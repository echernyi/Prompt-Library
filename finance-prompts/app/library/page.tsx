import { Suspense } from 'react';
import { getAllCategories } from '@/lib/prompts';
import FilterablePrompts from '@/components/FilterablePrompts';

export const metadata = {
  title: 'Библиотека Промптов - СФН',
  description: 'Найдите подходящие финансовые промпты для ваших задач с помощью удобных фильтров',
};

export default function LibraryPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-8">
      {/* Filterable Prompts Component */}
      <Suspense fallback={<div className="text-center py-8">Загрузка...</div>}>
        <FilterablePrompts categories={categories} />
      </Suspense>
    </div>
  );
}