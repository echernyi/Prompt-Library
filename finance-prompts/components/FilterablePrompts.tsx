'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPromptsByCategories } from '@/lib/prompts';
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

  return (
    <div className="space-y-10">
      <CategoryFilter categories={categories} />
      
      {prompts.length ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {prompts.map((p) => (
            <PromptPreview key={p.id} prompt={p} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          Нет промптов для выбранных категорий.
        </p>
      )}
    </div>
  );
}