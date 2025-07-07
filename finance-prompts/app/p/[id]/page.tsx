import { notFound } from 'next/navigation';
import {
  getAllPromptIds,
  getPromptById,
} from '@/lib/prompts';
import { PromptCard } from '@/components/PromptCard';

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

  return <PromptCard prompt={prompt} />;
}