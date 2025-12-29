
import { Product } from './types';

/**
 * Para adicionar um novo produto, basta duplicar um dos blocos abaixo
 * e preencher com as informações do seu produto.
 */
export const products: Product[] = [
  // --- EBOOKS ---
  {
    id: 'e1',
    title: 'Mindset Vencedor',
    description: 'Aprenda as estratégias mentais dos maiores empreendedores do mundo para alcançar o sucesso.',
    image: 'https://picsum.photos/seed/mindset/400/500',
    link: 'https://pay.kiwify.com.br/exemplo1',
    category: 'ebook'
  },
  {
    id: 'e2',
    title: 'Marketing sem Segredos',
    description: 'Guia prático para quem está começando no marketing digital e quer resultados rápidos.',
    image: 'https://picsum.photos/seed/marketing/400/500',
    link: 'https://pay.kiwify.com.br/exemplo2',
    category: 'ebook'
  },
  {
    id: 'e3',
    title: 'Produtividade de Elite',
    description: 'Como organizar seu dia para produzir mais trabalhando menos horas.',
    image: 'https://picsum.photos/seed/prod/400/500',
    link: 'https://pay.kiwify.com.br/exemplo3',
    category: 'ebook'
  },
  {
    id: 'e4',
    title: 'Finanças para Iniciantes',
    description: 'Tudo o que você precisa saber para organizar suas contas e começar a investir.',
    image: 'https://picsum.photos/seed/finance/400/500',
    link: 'https://pay.kiwify.com.br/exemplo4',
    category: 'ebook'
  },
  {
    id: 'e5',
    title: 'Adição manual Alexandre',
    description: 'Testanado adição de recurso.',
    image: 'https://daquiprafora.com.br/wp-content/uploads/2022/07/O-intercambio-pode-me-abrir-portas-scaled.jpg',
    link: 'https://pay.kiwify.com.br/iooioio',
    category: 'ebook'
  },

  // --- LIVROS ---
  {
    id: 'l1',
    title: 'Pai Rico, Pai Pobre',
    description: 'O que os ricos ensinam a seus filhos sobre dinheiro.',
    image: 'https://picsum.photos/seed/book1/400/500',
    link: 'https://amazon.com.br/exemplo1',
    category: 'livro'
  },
  {
    id: 'l2',
    title: 'O Homem Mais Rico da Babilônia',
    description: 'Segredos milenares para o sucesso financeiro e prosperidade.',
    image: 'https://picsum.photos/seed/book2/400/500',
    link: 'https://amazon.com.br/exemplo2',
    category: 'livro'
  },
  {
    id: 'l3',
    title: 'Hábitos Atômicos',
    description: 'Um método fácil e comprovado de criar bons hábitos e eliminar os maus.',
    image: 'https://picsum.photos/seed/book3/400/500',
    link: 'https://amazon.com.br/exemplo3',
    category: 'livro'
  },

  // --- ACESSÓRIOS ---
  {
    id: 'a1',
    title: 'Kindle Paperwhite',
    description: 'A melhor experiência de leitura digital com luz ajustável e à prova d\'água.',
    image: 'https://picsum.photos/seed/kindle/400/500',
    link: 'https://amazon.com.br/kindle',
    category: 'acessorio'
  },
  {
    id: 'a2',
    title: 'Fone Bluetooth Noise Cancelling',
    description: 'Foco total nas suas leituras e estudos com cancelamento de ruído premium.',
    image: 'https://picsum.photos/seed/headphone/400/500',
    link: 'https://amazon.com.br/fone',
    category: 'acessorio'
  },
  {
    id: 'a3',
    title: 'Suporte Articulado para Tablet',
    description: 'Mais conforto para ler e assistir suas aulas em qualquer posição.',
    image: 'https://picsum.photos/seed/stand/400/500',
    link: 'https://amazon.com.br/suporte',
    category: 'acessorio'
  }
];
