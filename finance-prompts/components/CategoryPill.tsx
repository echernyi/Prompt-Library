import { cn } from '@/lib/utils';

export function CategoryPill({ name }: { name: string }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-accent/90 text-white px-2 py-0.5 text-xs font-medium shadow-glass'
      )}
    >
      #{name}
    </span>
  );
}