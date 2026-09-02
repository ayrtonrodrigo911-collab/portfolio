import { SiteConfig, PortfolioProject, ProgrammingBook, YouTubeVideo, TikTokPost } from '../types';
import heroAyrtonImg from '../assets/images/new_hero.jpg';
import youtubeAyrtonImg from '../assets/images/new_youtube.jpg';
import tiktokAyrtonImg from '../assets/images/new_tiktok.jpg';
import portfolioSantanderImg from '../assets/images/new_portfolio.jpg';
import booksProgrammingImg from '../assets/images/books_programming_1787357313493.jpg';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  headline: 'Seu Negócio Merece um Site que Vende',
  subheadline: 'Sites profissionais para pequenas e médias empresas, Advogados, nutricionistas, prestadores de serviço, Lojas e mais, que querem crescer online',
  whatsappNumber: '5581981075376',
  contactEmail: 'dc0ce3a511@proton.me',
  youtubeChannelUrl: 'https://youtube.com',
  tiktokUrl: 'https://tiktok.com',
  heroCard: {
    id: 'hero',
    title: 'Realizar orçamento',
    subtitle: 'Solicite um orçamento para ter seu próprio site feito pelo Ayrton.',
    imageUrl: heroAyrtonImg,
    actionUrl: '#orcamento',
  },
  booksCard: {
    id: 'books',
    title: 'Livros de Programação',
    subtitle: 'Aprenda programação com os melhores livros em PDF',
    imageUrl: booksProgrammingImg,
    iconName: 'book',
  },
  mentorshipCard: {
    id: 'mentorship',
    title: 'Seja meu mentorado Individual',
    subtitle: 'Aprenda como ganhar dinheiro de verdade com programação!',
    imageUrl: booksProgrammingImg,
    badge: 'Indisponível no momento',
    iconName: 'user-check',
  },
  youtubeCard: {
    id: 'youtube',
    title: 'Canal do Youtube',
    subtitle: 'Vídeos únicos do mercado de TI sem romantização',
    imageUrl: youtubeAyrtonImg,
    actionUrl: 'https://youtube.com',
  },
  tiktokCard: {
    id: 'tiktok',
    title: 'Tik Tok',
    subtitle: 'Acompanhe meus conteúdos no Tiktok',
    imageUrl: tiktokAyrtonImg,
    actionUrl: 'https://tiktok.com',
  },
  portfolioCard: {
    id: 'portfolio',
    title: 'Portfólio',
    subtitle: 'Conheça meus projetos.',
    imageUrl: portfolioSantanderImg,
    actionUrl: '#portfolio',
  },
};

export const DEFAULT_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'santander-fintech',
    title: 'Plataforma Santander Cartões & Benefícios',
    category: 'Fintech',
    client: 'Fintech & Instituição Financeira',
    description: 'Interface responsiva com alta conversão, painel de controle e segurança bancária com foco em emissão de cartões e adesão mobile.',
    imageUrl: portfolioSantanderImg,
    mobileImageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Alta Conversão'],
    metrics: [
      { label: 'Aumento de Conversão', value: '+142%' },
      { label: 'Tempo de Carregamento', value: '0.6s' },
      { label: 'Pontuação Google PageSpeed', value: '99/100' },
    ],
  },
  {
    id: 'advocacia-elite',
    title: 'Escritório de Advocacia Tributária & Cível',
    category: 'Advocacia',
    client: 'Dr. Valente & Associados',
    description: 'Site institucional sóbrio e autoritário com captação direta de leads para WhatsApp, formulário de triagem jurídica e integração de CRM.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'SEO Jurídico', 'WhatsApp Direct', 'Copywriting'],
    metrics: [
      { label: 'Novos Contatos / Mês', value: '85+' },
      { label: 'Posicionamento Google', value: 'Top 3 Orgânico' },
    ],
  },
  {
    id: 'clinica-nutricao',
    title: 'Clínica de Nutrição Esportiva & Saúde Integrativa',
    category: 'Nutrição',
    client: 'Dra. Beatriz Fernandes',
    description: 'Página de vendas focada em agendamento de consultas particulares, apresentação de metodologia de emagrecimento e depoimentos em vídeo.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop',
    tags: ['Landing Page', 'Agendamento Online', 'Mobile First'],
    metrics: [
      { label: 'Agenda Lotada', value: '3 Semanas Antes' },
      { label: 'Taxa de Retenção', value: '78%' },
    ],
  },
  {
    id: 'joalheria-luxo',
    title: 'E-commerce Joalheria & Estética Minimalista',
    category: 'E-commerce',
    client: 'Aura Joias Contemporâneas',
    description: 'Loja virtual de luxo com checkout transparente de alta performance, catálogo interativo 3D e design imersivo em modo escuro.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-commerce', 'Stripe / Pix', 'Design Luxury'],
    metrics: [
      { label: 'Ticket Médio', value: 'R$ 480' },
      { label: 'Checkout Abandonment', value: '-35%' },
    ],
  },
];

export const DEFAULT_BOOKS: ProgrammingBook[] = [
  {
    id: 'book-1',
    title: 'Do Zero ao Primeiro Contrato Web',
    subtitle: 'O guia definitivo para desenvolvedores fecharem projetos de R$ 3k a R$ 15k com empresas locais.',
    pages: 184,
    format: 'PDF Digital + Modelos de Contrato',
    level: 'Iniciante',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    description: 'Aprenda como prospectar clientes, precificar sites, apresentar propostas irresistíveis e entregar páginas que geram ROI real para os contratantes.',
    topics: [
      'Prospecção Ativa & Passiva sem depender de plataformas freelance',
      'Como estruturar uma proposta comercial de alto valor',
      'Modelos de contrato com cláusulas anti-inadimplência',
      'Estratégias de Upsell (Hospedagem, SEO e Manutenção mensal)',
    ],
  },
  {
    id: 'book-2',
    title: 'Arquitetura Frontend Moderna em TypeScript & React',
    subtitle: 'Padrões de projeto, escalabilidade, performance extrema e micro-interações elegantes.',
    pages: 240,
    format: 'PDF Digital + Repositório Github',
    level: 'Avançado',
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e37273?q=80&w=800&auto=format&fit=crop',
    description: 'Domine a engenharia de interfaces modernas. Aprenda a criar sites com renderização instantânea, animações a 60fps e arquitetura modular e limpa.',
    topics: [
      'Clean Architecture aplicada a Single Page Applications',
      'Gerenciamento de estado previsível e sem overhead',
      'Design System do zero com Tailwind CSS e Radix UI',
      'Otimização Core Web Vitals (LCP, FID, CLS)',
    ],
  },
  {
    id: 'book-3',
    title: 'Landing Pages que Convertem: O Guia de CRO para Devs',
    subtitle: 'Como unir código limpo com gatilhos visuais e psicologia de consumo.',
    pages: 156,
    format: 'PDF Digital + Templates Figma',
    level: 'Intermediário',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    description: 'Não basta o site ser bonito, ele precisa gerar vendas. Descubra os princípios de Conversion Rate Optimization (CRO) que os maiores especialistas do mundo usam.',
    topics: [
      'Hierarquia visual e zonas de calor na tela',
      'Copywriting persuasivo para seções de impacto',
      'Velocidade como métrica de faturamento',
      'Testes A/B e mensuração com Google Analytics 4',
    ],
  },
];

export const DEFAULT_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    title: 'Como cobrei R$ 8.000 em uma Landing Page sendo dev solo',
    views: '48.2k visualizações',
    duration: '18:42',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://youtube.com',
    publishedAt: 'Há 2 semanas',
  },
  {
    id: 'yt-2',
    title: 'A Verdade sobre o mercado de TI em 2026 (Sem Ilusão)',
    views: '89.7k visualizações',
    duration: '24:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://youtube.com',
    publishedAt: 'Há 1 mês',
  },
  {
    id: 'yt-3',
    title: 'Stack que eu uso para criar sites profissionais em tempo recorde',
    views: '32.1k visualizações',
    duration: '14:05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://youtube.com',
    publishedAt: 'Há 2 meses',
  },
];

export const DEFAULT_TIKTOK_POSTS: TikTokPost[] = [
  {
    id: 'tk-1',
    title: 'Como responder cliente que diz "tá caro"',
    views: '124.5k',
    likes: '14.2k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://tiktok.com',
  },
  {
    id: 'tk-2',
    title: '3 erros fatais no portfólio de um dev iniciante',
    views: '98.3k',
    likes: '11.8k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://tiktok.com',
  },
  {
    id: 'tk-3',
    title: 'Por que empresas pagam caro por sites rápidos',
    views: '210.8k',
    likes: '28.4k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://tiktok.com',
  },
];
