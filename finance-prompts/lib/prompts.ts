import prompts from '@/data/prompts.json';

export type Prompt = typeof prompts[number];

export function getAllCategories(): string[] {
  return Array.from(
    new Set(prompts.flatMap((p) => p.categories))
  ).sort();
}

export function getPromptsByCategory(cat: string): Prompt[] {
  return prompts.filter((p) => p.categories.includes(cat));
}