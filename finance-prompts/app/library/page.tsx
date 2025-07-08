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
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Библиотека Промптов
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Готовые к использованию финансовые промпты для ваших задач. 
          Используйте фильтры для быстрого поиска нужного решения.
        </p>
      </div>

      {/* Filterable Prompts Component */}
      <Suspense fallback={<div className="text-center py-8">Загрузка...</div>}>
        <FilterablePrompts categories={categories} />
      </Suspense>
    </div>
  );
}