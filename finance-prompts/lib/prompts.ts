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

/** Return prompts that match *any* of the selected categories (OR logic). */
export function getPromptsByCategories(cats: string[]): Prompt[] {
  if (!cats.length) return prompts;
  return prompts.filter((p) =>
    cats.some((c) => p.categories.includes(c))
  );
}