import Link from 'next/link';
import { BookOpen, Brain, MessageCircle, ArrowRight, Sparkles, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Библиотека Промптов СФН
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Готовые финансовые промпты для работы с ИИ, персональный помощник для создания промптов 
          и возможность предложить свои идеи сообществу.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        
        {/* 1. Prompt Library */}
        <Link href="/library" className="group block">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/70">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-blue-100 rounded-full p-4 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Библиотека Промптов
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Готовые к использованию финансовые промпты для различных задач. 
                  Используйте фильтры для быстрого поиска нужного решения.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Фильтрация по категориям</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Готовые к копированию</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Риск, отчетность, оценка</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium group-hover:text-blue-700">
                <span>Открыть библиотеку</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>

        {/* 2. AI Prompt Helper */}
        <Link href="/prompt-helper" className="group block">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/70 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-purple-100 rounded-full p-4 group-hover:bg-purple-200 transition-colors relative">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  ИИ Помощник
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Умный помощник для создания персонализированных промптов. 
                  Опишите задачу, и ИИ поможет создать идеальный промпт.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Персонализация под задачу</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Анализ и оптимизация</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Скоро запуск!</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-purple-600 font-medium group-hover:text-purple-700">
                <span>Узнать больше</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              СКОРО
            </div>
          </div>
        </Link>

        {/* 3. Suggest Prompt */}
        <a 
          href="https://t.me/egorchernyi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/70">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-green-100 rounded-full p-4 group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Предложить Промпт
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Есть идея для нового промпта? Поделитесь с сообществом! 
                  Напишите нам в Telegram и помогите развивать библиотеку.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Прямая связь с разработчиками</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Быстрая обратная связь</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Участие в развитии</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-green-600 font-medium group-hover:text-green-700">
                <span>Написать в Telegram</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Community Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Users className="h-12 w-12 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Присоединяйтесь к сообществу
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Станьте частью растущего сообщества финансовых профессионалов, 
          использующих ИИ для повышения эффективности работы.
        </p>
      </div>
    </div>
  );
}
