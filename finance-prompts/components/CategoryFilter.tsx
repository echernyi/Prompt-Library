'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
}
export function CategoryFilter({ categories }: CategoryFilterProps) {
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

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => toggle(cat)}
          className={cn(
            'rounded-full px-3 py-1 text-xs capitalize shadow-glass backdrop-blur-sm border border-white/30 transition-all',
            selected.has(cat)
              ? 'bg-accent/90 text-white'
              : 'bg-white/10 hover:bg-white/20'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}