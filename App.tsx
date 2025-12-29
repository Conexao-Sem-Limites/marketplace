
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import CategoryPage from './components/CategoryPage';
import { products } from './data';
import { Section } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const sections: Section[] = [
    { id: 'ebook', title: 'Ebooks', icon: '📘' },
    { id: 'livro', title: 'Livros', icon: '📕' },
    { id: 'acessorio', title: 'Acessórios', icon: '🎒' }
  ];

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const currentSection = sections.find(s => s.id === currentView);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-[15%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[140px] opacity-[0.12] animate-pulse ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}></div>
        <div className={`absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full blur-[130px] opacity-[0.08] animate-pulse delay-700 ${isDarkMode ? 'bg-red-600' : 'bg-red-400'}`}></div>
        <div className={`absolute -bottom-[10%] left-[15%] w-[40%] h-[40%] rounded-full blur-[140px] opacity-[0.1] animate-pulse delay-1000 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
      </div>

      <Header onNavigate={handleNavigate} currentView={currentView} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 relative z-10">
        {currentView === 'home' ? (
          <>
            <div className="py-20 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter">
                Marketplace <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-green-400 via-blue-400 to-red-400' : 'from-green-700 via-blue-700 to-red-700'}`}>Conexão Sem Limites</span>
              </h1>
              <p className={`mt-6 text-lg md:text-xl max-w-2xl font-semibold leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A vitrine definitiva para sua evolução. Escolha, clique e transforme-se com os melhores recursos digitais.
              </p>
            </div>

            <div className="space-y-16 pb-20">
              {sections.map((section) => (
                <CarouselSection 
                  key={section.id} 
                  section={section} 
                  products={products.filter(p => p.category === section.id)} 
                  onSeeMore={handleNavigate}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            {currentSection && (
              <CategoryPage 
                section={currentSection}
                products={products.filter(p => p.category === currentView)}
                onBack={() => handleNavigate('home')}
              />
            )}
          </div>
        )}
      </main>

      <footer className={`relative z-10 border-t py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-950/50 border-gray-800' : 'bg-white/50 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://i.ibb.co/zVMdSBZ7/logo.png" 
            alt="Logo" 
            className={`h-12 w-auto mx-auto mb-8 transition-all ${isDarkMode ? 'brightness-125' : 'opacity-80'}`}
          />
          <div className="flex justify-center gap-6 mb-8">
             <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
             <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
             <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
          </div>
          <p className={`text-sm font-bold tracking-widest uppercase ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Conexão Sem Limites
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
