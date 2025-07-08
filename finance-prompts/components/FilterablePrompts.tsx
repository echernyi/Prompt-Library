'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, AlertCircle } from 'lucide-react';
import { getPromptsByCategories, type Prompt } from '@/lib/prompts';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PromptPreview } from '@/components/PromptPreview';

interface FilterablePromptsProps {
  categories: string[];
}

export default function FilterablePrompts({ categories }: FilterablePromptsProps) {
  const search = useSearchParams();
  const selected = useMemo(
    () => search.get('cat')?.split(',').filter(Boolean) ?? [],
    [search]
  );

  const prompts = useMemo(
    () => getPromptsByCategories(selected),
    [selected]
  );

  const hasNoFilters = selected.length === 0;
  const hasNoResults = selected.length > 0 && prompts.length === 0;

  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <section aria-labelledby="filters-heading">
        <CategoryFilter categories={categories} />
      </section>
      
      {/* Results Section */}
      <section aria-labelledby="results-heading">
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg p-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 id="results-heading" className="text-xl font-semibold text-gray-900">
              {hasNoFilters ? 'Все промпты' : 'Найденные промпты'}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Search className="h-4 w-4" />
              <span>{prompts.length} промпт{prompts.length === 1 ? '' : prompts.length > 4 ? 'ов' : 'а'}</span>
            </div>
          </div>

          {/* No Filters State */}
          {hasNoFilters && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Search className="h-5 w-5 text-blue-600 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-900 mb-1">
                    Начните с выбора фильтров
                  </h3>
                  <p className="text-sm text-blue-700">
                    Используйте фильтры выше, чтобы найти промпты для конкретных финансовых задач. 
                    Вы можете выбрать несколько категорий одновременно.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* No Results State */}
          {hasNoResults && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-amber-900 mb-1">
                    Нет промптов для выбранных фильтров
                  </h3>
                  <p className="text-sm text-amber-700">
                    Попробуйте изменить или убрать некоторые фильтры, чтобы увидеть больше результатов.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid */}
          {prompts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {prompts.map((p: Prompt) => (
                <PromptPreview key={p.id} prompt={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}