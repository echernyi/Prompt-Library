import Link from 'next/link';
import { CategoryPill } from './CategoryPill';
import { Prompt } from '@/lib/prompts';

export function PromptPreview({ prompt }: { prompt: Prompt }) {
  return (
    <Link
      href={`/p/${prompt.id}`}
      className="block rounded-2xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-xl p-6 transition-transform hover:scale-[1.02] focus-visible:outline-accent"
    >
      <h2 className="text-lg font-semibold">{prompt.title}</h2>

      <div className="my-2 flex flex-wrap gap-2">
        {prompt.categories.map((c) => (
          <CategoryPill key={c} name={c} />
        ))}
      </div>

      <p className="text-sm text-neutral-700 line-clamp-3">
        {prompt.logic}
      </p>
    </Link>
  );
}