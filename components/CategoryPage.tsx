
import React, { useEffect } from 'react';
import { Product, Section } from '../types';
import ProductCard from './ProductCard';

interface CategoryPageProps {
  section: Section;
  products: Product[];
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ section, products, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="py-12 md:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para vitrine
        </button>
        
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 flex items-center justify-center rounded-3xl bg-white dark:bg-gray-800 shadow-lg text-4xl border border-gray-100 dark:border-gray-700">
            {section.icon}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">{section.title}</h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400 font-medium">
              Mostrando {products.length} itens exclusivos.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <div 
            key={product.id} 
            className="flex w-full animate-in fade-in zoom-in-95 duration-500" 
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-32 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800">
          <div className="text-6xl mb-6">🔍</div>
          <p className="text-gray-400 dark:text-gray-500 text-xl font-medium">Nenhum tesouro encontrado aqui ainda.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
