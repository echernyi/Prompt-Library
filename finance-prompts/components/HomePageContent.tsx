'use client';

import { useSearchParams } from 'next/navigation';
import {
  getAllCategories,
  getPromptsByCategories,
} from '@/lib/prompts';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PromptPreview } from '@/components/PromptPreview';
import { useMemo } from 'react';

export default function HomePageContent() {
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