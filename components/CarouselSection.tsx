
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Product, Section } from '../types';
import ProductCard from './ProductCard';

interface CarouselSectionProps {
  section: Section;
  products: Product[];
  onSeeMore: (categoryId: string) => void;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ section, products, onSeeMore }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products, checkScroll]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.querySelector('.carousel-item')?.clientWidth || 300;
      const scrollAmount = cardWidth + 20;
      
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 50) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ 
          left: direction === 'left' ? -scrollAmount : scrollAmount, 
          behavior: 'smooth' 
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!isHovered && products.length > 2) {
      const interval = setInterval(() => {
        scroll('right');
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, products, scroll]);

  const getGlowColor = () => {
    switch (section.id) {
      case 'ebook': return 'bg-blue-400 dark:bg-blue-600';
      case 'livro': return 'bg-red-400 dark:bg-red-600';
      case 'acessorio': return 'bg-green-400 dark:bg-green-600';
      default: return 'bg-gray-400';
    }
  };

  if (products.length === 0) return null;

  return (
    <section 
      id={section.id} 
      className="relative py-12 border-b border-gray-100 dark:border-gray-800 last:border-b-0 overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Neon Sutil */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-[0.05] dark:opacity-[0.1] rounded-full animate-pulse transition-colors duration-1000 ${getGlowColor()}`}></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-900 dark:bg-gray-800 shadow-xl text-3xl border border-gray-800">
              {section.icon}
            </div>
            <div>
              <h2 className="text-3xl font-black text-red-600 dark:text-red-500 tracking-tight leading-none mb-2">
                {section.title}
              </h2>
              <button 
                onClick={() => onSeeMore(section.id)}
                className="text-sm font-black text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center transition-all group"
              >
                Ver todos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className={`p-4 rounded-2xl border transition-all ${
                !showLeftArrow 
                  ? 'opacity-20 scale-90 pointer-events-none' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-2xl border transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-10 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth touch-pan-x"
          >
            {products.map((product) => (
              <div key={product.id} className="carousel-item flex-none w-[280px] sm:w-[320px] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1.2rem)]">
                <ProductCard product={product} />
              </div>
            ))}
            <div className="flex-none w-10 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
