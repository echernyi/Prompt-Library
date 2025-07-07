import ReactMarkdown from 'react-markdown';
import { CopyButton } from './CopyButton';
import { Prompt } from '@/lib/prompts';

interface PromptCardProps {
  prompt: Prompt;
  showLogic?: boolean;
}

export function PromptCard({ prompt, showLogic = true }: PromptCardProps) {
  return (
    <article className="grid gap-6 md:grid-cols-[1fr_minmax(240px,320px)] rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 shadow-glass p-6">
      {/* prompt text block */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{prompt.title}</h2>
        <pre className="whitespace-pre-wrap rounded-lg bg-white/20 p-4 text-sm leading-relaxed shadow-inner">
{prompt.text}
        </pre>
        <CopyButton value={prompt.text} />
      </div>

      {/* always-visible logic panel (per your spec) */}
      {showLogic && (
        <div className="prose prose-sm max-w-none md:border-l md:border-white/30 md:pl-6">
          <h3 className="m-0 text-base font-semibold">Prompt Logic</h3>
          <ReactMarkdown>{prompt.logic}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}