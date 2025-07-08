'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';             // created by shadcn init

interface CopyButtonProps {
  value: string;
  buttonText?: string;
}
export function CopyButton({ value, buttonText = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    await navigator.clipboard.writeText(value); // secure-context only (HTTPS)
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      aria-label="Copy prompt to clipboard"
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium transition-all shadow-glass border border-white/30 backdrop-blur-sm',
        copied
          ? 'bg-accent text-white'
          : 'bg-white/10 hover:bg-white/20 active:scale-[.97]'
      )}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {buttonText}
    </button>
  );
}