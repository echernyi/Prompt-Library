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
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <header className="border-b px-4 py-3">
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
