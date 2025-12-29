
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col h-[540px] w-full bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 group relative">
      {/* Imagem do Produto */}
      <div className="relative h-[240px] w-full bg-gray-50 dark:bg-gray-800 overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-900">
            {product.category === 'ebook' ? 'Digital' : product.category === 'livro' ? 'Físico' : 'Acessório'}
          </span>
          <div className="text-[10px] font-bold text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Disponível
          </div>
        </div>
        
        <h3 className="text-gray-950 dark:text-white font-black text-lg md:text-xl line-clamp-2 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight tracking-tight h-[56px]">
          {product.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed font-bold flex-grow opacity-80 overflow-hidden">
          {product.description}
        </p>
        
        <div className="mt-6 pt-2">
          <button 
            onClick={handlePurchase}
            className="w-full py-4 px-5 rounded-2xl text-base font-black text-center transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 bg-gray-900 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500"
          >
            Acessar Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
