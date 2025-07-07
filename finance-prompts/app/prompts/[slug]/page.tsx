import { notFound } from 'next/navigation';
import { getAllCategories, getPromptsByCategory } from '@/lib/prompts';
import { PromptCard } from '@/components/PromptCard';

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompts = getPromptsByCategory(slug);
  if (!prompts.length) return notFound();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold capitalize">{slug}</h1>
      {prompts.map((p) => (
        <PromptCard key={p.id} prompt={p} />
      ))}
    </div>
  );
}