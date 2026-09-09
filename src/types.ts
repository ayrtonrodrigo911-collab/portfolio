export interface CardConfig {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  actionUrl?: string;
  badge?: string;
  iconName?: string;
}

export interface SiteConfig {
  headline: string;
  subheadline: string;
  whatsappNumber: string;
  contactEmail: string;
  youtubeChannelUrl: string;
  tiktokUrl: string;
  heroCard: CardConfig;
  booksCard: CardConfig;
  mentorshipCard: CardConfig;
  youtubeCard: CardConfig;
  tiktokCard: CardConfig;
  instagramCard: CardConfig;
  portfolioCard: CardConfig;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Advocacia' | 'Nutrição' | 'E-commerce' | 'Fintech' | 'Serviços';
  client: string;
  description: string;
  imageUrl: string;
  mobileImageUrl?: string;
  liveUrl?: string;
  pinterestUrl?: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProgrammingBook {
  id: string;
  title: string;
  subtitle: string;
  pages: number;
  format: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  coverImage: string;
  pdfDownloadUrl?: string;
  description: string;
  topics: string[];
}

export interface YouTubeVideo {
  id: string;
  title: string;
  views: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  publishedAt: string;
}

export interface TikTokPost {
  id: string;
  title: string;
  views: string;
  likes: string;
  thumbnailUrl: string;
  postUrl: string;
}

export interface LibraryCategory {
  id: string;
  title: string;
  description?: string;
  iconName?: string;
  iconImageUrl?: string;
  subcategories?: LibraryCategory[];
  books?: ProgrammingBook[];
}
