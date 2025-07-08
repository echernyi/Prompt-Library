import ReactMarkdown from 'react-markdown';
import { CopyButton } from './CopyButton';
import { CategoryPill } from './CategoryPill';
import { Prompt } from '@/lib/prompts';

interface PromptCardProps {
  prompt: Prompt;
  showLogic?: boolean;
}

export function PromptCard({ prompt, showLogic = true }: PromptCardProps) {
  return (
    <article className="grid gap-6 md:grid-cols-[1fr_minmax(260px,320px)] rounded-2xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-xl p-6">
      {/* prompt text block */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{prompt.title}</h2>
        <div className="flex flex-wrap gap-2">
          {prompt.categories.map((cat) => (
            <CategoryPill key={cat} name={cat} />
          ))}
        </div>
        <pre className="whitespace-pre-wrap rounded-lg bg-white/20 p-4 text-sm leading-relaxed shadow-inner">
{prompt.text}
        </pre>
        <CopyButton value={prompt.text} buttonText="Скопировать" />
      </div>

      {/* always-visible logic panel (per your spec) */}
      {showLogic && (
        <div className="prose prose-sm max-w-none md:border-l-2 md:border-blue-200 md:pl-6 bg-blue-50/40 rounded-xl p-4">
          <h3 className="m-0 text-base font-semibold">Логика промпта</h3>
          <ReactMarkdown>{prompt.logic}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}