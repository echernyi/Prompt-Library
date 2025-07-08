import { Brain, Sparkles, Zap } from 'lucide-react';

export const metadata = {
  title: 'ИИ Помощник - СФН',
  description: 'Умный помощник для создания персонализированных финансовых промптов',
};

export default function PromptHelperPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <Brain className="h-20 w-20 text-accent" />
            <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900">
          ИИ Помощник
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Умный помощник для создания персонализированных финансовых промптов. 
          Опишите вашу задачу, и ИИ поможет создать идеальный промпт.
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-accent/10 to-purple-100 rounded-3xl border border-accent/20 shadow-xl p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-3">
              <Zap className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Скоро запуск!
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Мы разрабатываем интеллектуального помощника, который будет:
            </p>
            
            <div className="grid gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Анализировать ваши задачи</strong> и предлагать подходящие типы промптов
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Генерировать персонализированные промпты</strong> на основе ваших потребностей
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Оптимизировать существующие промпты</strong> для лучших результатов
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Предлагать улучшения</strong> и альтернативные подходы
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-600 italic">
                Следите за обновлениями - эта функция будет доступна в ближайшее время!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Пока ИИ помощник в разработке, воспользуйтесь нашей библиотекой готовых промптов
        </p>
        
        <a
          href="/library"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors shadow-lg"
        >
          Перейти к библиотеке
          <Sparkles className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}