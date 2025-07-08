'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  onClearAll?: () => void;
}

export function CategoryFilter({ categories, onClearAll }: CategoryFilterProps) {
  const router = useRouter();
  const search = useSearchParams();
  const selected = new Set(
    search.get('cat')?.split(',').filter(Boolean) ?? []
  );

  function toggle(cat: string) {
    if (selected.has(cat)) selected.delete(cat);
    else selected.add(cat);

    const next = Array.from(selected).join(',');
    router.replace(next ? `?cat=${next}` : '');
  }

  function clearAllFilters() {
    router.replace('');
    if (onClearAll) onClearAll();
  }

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg p-6 space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        </div>
        {selected.size > 0 && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
          >
            <X className="h-3 w-3" />
            Очистить всё
          </button>
        )}
      </div>

      {/* Instruction Text */}
      <p className="text-sm text-gray-600">
        Выберите категории для фильтрации промптов по вашим потребностям:
      </p>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => {
          const isSelected = selected.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={cn(
                'group relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-200 transform hover:scale-105',
                'border-2 shadow-lg backdrop-blur-sm',
                'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2',
                isSelected
                  ? 'bg-accent border-accent text-white shadow-accent/25 hover:bg-accent/90'
                  : 'bg-white/80 border-gray-200 text-gray-700 hover:border-accent/50 hover:bg-accent/5 hover:text-accent'
              )}
            >
              <span className="flex items-center gap-2">
                {cat}
                {isSelected && (
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" />
                )}
              </span>
              
              {/* Hover tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                  {isSelected ? 'Убрать фильтр' : 'Применить фильтр'}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Filters Summary */}
      {selected.size > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Активные фильтры:</span>
          <div className="flex flex-wrap gap-1">
            {Array.from(selected).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium"
              >
                {cat}
                <button
                  onClick={() => toggle(cat)}
                  className="hover:bg-accent/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}