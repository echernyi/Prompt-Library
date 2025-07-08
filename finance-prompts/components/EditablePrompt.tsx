"use client"

import React, { useState, useRef, useEffect } from 'react';
import { CopyButton } from './CopyButton';

interface EditablePromptProps {
  initialValue: string;
  className?: string;
}

export function EditablePrompt({ initialValue, className = '' }: EditablePromptProps) {
  const [value, setValue] = useState(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full min-h-[400px] p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl resize-y text-sm leading-relaxed font-mono focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all duration-200"
          placeholder="Edit your prompt here..."
          style={{ minWidth: '400px' }}
        />
      </div>
      <div className="flex justify-end">
        <CopyButton value={value} buttonText="Copy Edited Prompt" />
      </div>
    </div>
  );
}