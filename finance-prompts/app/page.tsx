import { Suspense } from 'react';
import { getAllCategories } from '@/lib/prompts';
import FilterablePrompts from '@/components/FilterablePrompts';

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-10">
      <Suspense fallback={<div className="text-center py-8">Загрузка...</div>}>
        <FilterablePrompts categories={categories} />
      </Suspense>
    </div>
  );
}
