
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'ebook', label: 'Ebooks' },
    { id: 'livro', label: 'Livros' },
    { id: 'acessorio', label: 'Acessórios' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-500 backdrop-blur-2xl ${isDarkMode ? 'bg-gray-950/90 border-gray-800' : 'bg-white/95 border-gray-100 shadow-lg shadow-gray-200/20'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <button onClick={() => handleLinkClick('home')} className="flex items-center gap-3 group outline-none">
            <img 
              src="https://i.ibb.co/zVMdSBZ7/logo.png" 
              alt="Logo" 
              className={`h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isDarkMode ? 'brightness-125' : ''}`}
            />
            <span className={`text-lg md:text-xl font-black tracking-tighter transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'}`}>
              Conexão Sem Limites
            </span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleLinkClick(item.id)} 
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                currentView === item.id 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' 
                  : `text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 mx-5"></div>

          <button 
            onClick={toggleDarkMode}
            className={`p-3 rounded-2xl transition-all ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" strokeWidth={2.5}/>
                <path strokeLinecap="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 9h-1"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a 
            href="https://conexaosemlimites.com" 
            className={`ml-6 px-8 py-3 rounded-2xl text-sm font-black transition-all shadow-xl active:scale-95 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
          >
            Sair da Loja
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className={`p-2 ${isDarkMode ? 'text-yellow-400' : 'text-gray-500'}`}>
            {isDarkMode ? <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" strokeWidth={2.5}/></svg> : <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[110] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-80 transition-transform duration-500 p-8 flex flex-col ${isDarkMode ? 'bg-gray-950' : 'bg-white'} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <img src="https://i.ibb.co/zVMdSBZ7/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className={`text-sm font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Conexão Sem Limites</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <button onClick={() => handleLinkClick('home')} className={`w-full text-left px-5 py-4 rounded-2xl text-xl font-bold ${currentView === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}>🏠 Início</button>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleLinkClick(item.id)} className={`w-full text-left px-5 py-4 rounded-2xl text-xl font-bold ${currentView === item.id ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}>{item.label}</button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
