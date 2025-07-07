import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home } from 'lucide-react';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Библиотека Промптов СФН',
  description: 'Финансовые промпты, готовые к копированию',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen flex flex-col text-black antialiased bg-gradient-to-br from-accent/10 via-white to-white before:pointer-events-none before:fixed before:inset-0 before:bg-[url('/assets/noise.png')] before:opacity-40">
        <header className="sticky top-0 z-30 backdrop-blur-lg bg-white/70 border-b border-white/60 shadow-xl">
          <div className="container mx-auto flex items-center gap-4 px-4 py-3">
            <Link
              href="/"
              aria-label="Home"
              className="rounded-full bg-white/60 p-1.5 shadow-glass backdrop-blur-sm transition-colors hover:bg-accent hover:text-white"
            >
              <Home size={18} />
            </Link>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:text-accent"
            >
              Библиотека Промптов СФН
            </Link>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
