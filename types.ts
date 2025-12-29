
export type Category = 'ebook' | 'livro' | 'acessorio';

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
}

export interface Section {
  id: Category;
  title: string;
  icon: string;
}
