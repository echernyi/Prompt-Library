import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home, BookOpen, Brain } from 'lucide-react';
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
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo/Title */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:text-accent transition-colors flex items-center gap-1"
            >
              <span className="text-accent">[</span>
              <span className="text-gray-500">sfn</span>
              <span className="text-black">prompt.ru</span>
              <span className="text-accent">]</span>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 shadow-glass backdrop-blur-sm transition-colors hover:bg-accent hover:text-white text-sm font-medium"
              >
                <Home size={16} />
                <span className="hidden sm:inline">Главная</span>
              </Link>
              
              <Link
                href="/library"
                className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 shadow-glass backdrop-blur-sm transition-colors hover:bg-accent hover:text-white text-sm font-medium"
              >
                <BookOpen size={16} />
                <span className="hidden sm:inline">Библиотека</span>
              </Link>
              
              <Link
                href="/prompt-helper"
                className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 shadow-glass backdrop-blur-sm transition-colors hover:bg-accent hover:text-white text-sm font-medium"
              >
                <Brain size={16} />
                <span className="hidden sm:inline">ИИ Помощник</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
