import React from 'react';
import { TagTooltip } from '@/components/TagTooltip';

const TAG_DESCRIPTIONS = {
  '[ROLE]': 'Sets the assistant\'s persona and expertise',
  '[GOAL]': 'Defines the primary objective of the interaction',
  '[CONTEXT]': 'Provides background information and scenario details',
  '[TASKS]': 'Lists specific actions or steps to be performed',
  '[FORMAT]': 'Specifies the desired output structure and format',
  '[CONSTRAINTS]': 'Defines limitations, requirements, and boundaries',
  '[РОЛЬ]': 'Определяет экспертизу и роль ассистента',
  '[ЦЕЛЬ]': 'Формулирует основную задачу анализа',
  '[КОНТЕКСТ]': 'Задает бизнес-сценарий и исходные условия',
  '[ЗАДАЧИ]': 'Перечисляет ключевые задачи и этапы анализа',
  '[ФОРМАТ]': 'Определяет структуру и формат результата',
  '[ОГРАНИЧЕНИЯ]': 'Описывает ограничения, требования и условия'
};

export function highlightTags(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  // Find all tag matches (English and Russian)
  const tagRegex = /\[(ROLE|GOAL|CONTEXT|TASKS|FORMAT|CONSTRAINTS|РОЛЬ|ЦЕЛЬ|КОНТЕКСТ|ЗАДАЧИ|ФОРМАТ|ОГРАНИЧЕНИЯ)\]/g;
  let match;
  
  while ((match = tagRegex.exec(text)) !== null) {
    const fullTag = match[0];
    const tagKey = fullTag as keyof typeof TAG_DESCRIPTIONS;
    // Add text before the tag
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the tagged pill
    parts.push(
      <TagTooltip
        key={`${fullTag}-${match.index}`}
        description={TAG_DESCRIPTIONS[tagKey]}
      >
        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-accent text-white shadow-glass cursor-help">
          #{match[1].toLowerCase()}
        </span>
      </TagTooltip>
    );
    lastIndex = match.index + fullTag.length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}