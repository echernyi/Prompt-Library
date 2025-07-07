import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
        <header className="sticky top-0 z-20 backdrop-blur-md bg-white/30 border-b border-white/40 supports-backdrop-blur:bg-white/30 px-4 py-3 shadow-glass">
          <div className="container mx-auto">
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
