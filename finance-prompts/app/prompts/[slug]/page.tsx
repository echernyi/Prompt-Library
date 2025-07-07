import { notFound } from 'next/navigation';
import { getAllCategories, getPromptsByCategory } from '@/lib/prompts';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c }));
}

export default function CategoryPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const prompts = getPromptsByCategory(slug);
  if (!prompts.length) return notFound();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold capitalize">{slug}</h1>
      {prompts.map((p) => (
        <article
          key={p.id}
          className="grid gap-4 md:grid-cols-[1fr_minmax(240px,320px)] border-b pb-8"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-medium">{p.title}</h2>
            <pre className="whitespace-pre-wrap rounded bg-neutral-100 p-4">
{p.text}
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(p.text)}
              className="mt-2 rounded border px-3 py-1 text-sm hover:bg-accent hover:text-white focus-visible:outline-accent"
            >
              Copy Prompt
            </button>
          </div>

          <div className="prose prose-sm max-w-none md:border-l md:pl-6">
            <h3 className="m-0 text-base font-semibold">Prompt Logic</h3>
            <ReactMarkdown>{p.logic}</ReactMarkdown>
          </div>
        </article>
      ))}
    </div>
  );
}