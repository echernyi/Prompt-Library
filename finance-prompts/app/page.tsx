'use client';

import { useSearchParams } from 'next/navigation';
import {
  getAllCategories,
  getPromptsByCategories,
} from '@/lib/prompts';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PromptCard } from '@/components/PromptCard';
import { useMemo } from 'react';

export default function HomePage() {
  const search = useSearchParams();
  const selected = useMemo(
    () => search.get('cat')?.split(',').filter(Boolean) ?? [],
    [search]
  );

  const categories = getAllCategories();
  const prompts = useMemo(
    () => getPromptsByCategories(selected),
    [selected]
  );

  return (
    <div className="space-y-10">
      <CategoryFilter categories={categories} />

      {prompts.length ? (
        <div className="space-y-8">
          {prompts.map((p) => (
            <PromptCard key={p.id} prompt={p} />
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
