import { notFound } from 'next/navigation';
import {
  getAllPromptIds,
  getPromptById,
} from '@/lib/prompts';
import { EditablePrompt } from '@/components/EditablePrompt';
import { CategoryPill } from '@/components/CategoryPill';
import { highlightTags } from '@/lib/highlight';

export async function generateStaticParams() {
  return getAllPromptIds().map((id) => ({ id }));
}

export default async function PromptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prompt = getPromptById(id);
  if (!prompt) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {prompt.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {prompt.categories.map((cat) => (
              <CategoryPill key={cat} name={cat} />
            ))}
          </div>
        </div>

        {/* Editable Prompt */}
        <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Editable Prompt
          </h2>
          <EditablePrompt initialValue={prompt.text} />
        </div>

        {/* Prompt Structure Explained */}
        <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Prompt Structure Explained
          </h2>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <div className="space-y-4">
              {highlightTags(prompt.logic)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}