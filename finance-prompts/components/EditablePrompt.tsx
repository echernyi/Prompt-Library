"use client"

import React, { useState, useRef, useEffect } from 'react';
import { CopyButton } from './CopyButton';

interface EditablePromptProps {
  initialValue: string;
  className?: string;
}

export function EditablePrompt({ initialValue, className = '' }: EditablePromptProps) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value, isEditing]);

  // Track changes
  useEffect(() => {
    setHasChanges(value !== initialValue);
  }, [value, initialValue]);

  // Responsive min height/width for textarea
  const textareaBase =
    'w-full min-h-[200px] md:min-h-[400px] p-4 md:p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl resize-y text-sm leading-relaxed font-mono transition-all duration-200';

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={
            textareaBase +
            (isEditing
              ? ' focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 border-accent/40 bg-white'
              : ' bg-white/60 border-white/60 text-gray-700 pointer-events-none select-none opacity-90')
          }
          placeholder="Edit your prompt here..."
          style={{ minWidth: '0', width: '100%' }}
          readOnly={!isEditing}
        />
        {!isEditing && (
          <div className="absolute inset-0 rounded-2xl cursor-pointer" onClick={() => setIsEditing(true)} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-end items-end">
        {/* If not editing and no changes, show Copy and Edit */}
        {!isEditing && !hasChanges && (
          <>
            <CopyButton value={value} buttonText="Скопировать" />
            <button
              className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium transition-all shadow-glass border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 active:scale-[.97]"
              onClick={() => setIsEditing(true)}
            >
              Редактировать
            </button>
          </>
        )}
        {/* If editing or has changes, show Copy and Cancel */}
        {(isEditing || hasChanges) && (
          <>
            <CopyButton value={value} buttonText="Скопировать" />
            <button
              className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium transition-all shadow-glass border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 active:scale-[.97]"
              onClick={() => {
                setValue(initialValue);
                setIsEditing(false);
              }}
            >
              Отменить изменения
            </button>
          </>
        )}
      </div>
    </div>
  );
}