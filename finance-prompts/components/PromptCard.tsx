import ReactMarkdown from 'react-markdown';
import { CopyButton } from './CopyButton';
import { Prompt } from '@/lib/prompts';

interface PromptCardProps {
  prompt: Prompt;
  showLogic?: boolean;
}

export function PromptCard({ prompt, showLogic = true }: PromptCardProps) {
  return (
    <article className="grid gap-4 md:grid-cols-[1fr_minmax(240px,320px)] border-b pb-8">
      {/* prompt text block */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{prompt.title}</h2>
        <pre className="whitespace-pre-wrap rounded bg-neutral-100 p-4">
{prompt.text}
        </pre>
        <CopyButton value={prompt.text} />
      </div>

      {/* always-visible logic panel (per your spec) */}
      {showLogic && (
        <div className="prose prose-sm max-w-none md:border-l md:pl-6">
          <h3 className="m-0 text-base font-semibold">Prompt Logic</h3>
          <ReactMarkdown>{prompt.logic}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}