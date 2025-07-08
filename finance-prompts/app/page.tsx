import { Suspense } from 'react';
import HomePageContent from '@/components/HomePageContent';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center py-8">Загрузка...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
