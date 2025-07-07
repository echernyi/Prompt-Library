'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';             // created by shadcn init

interface CopyButtonProps {
  value: string;
}
export function CopyButton({ value }: CopyButtonProps) {
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
        'inline-flex items-center gap-1 rounded border px-3 py-1 text-sm transition-colors focus-visible:outline-accent',
        copied
          ? 'bg-accent text-white'
          : 'hover:bg-accent hover:text-white'
      )}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}