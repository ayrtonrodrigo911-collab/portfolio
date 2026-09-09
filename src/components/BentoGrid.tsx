import React from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Lock,
  Play,
  Video,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { SiteConfig } from '../types';

interface BentoGridProps {
  config: SiteConfig;
  onOpenQuote: () => void;
  onOpenBooks: () => void;
  onOpenMentorship: () => void;
  onOpenYouTube: () => void;
  onOpenTikTok: () => void;
  onOpenPortfolio: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  config,
  onOpenQuote,
  onOpenBooks,
  onOpenMentorship,
  onOpenYouTube,
  onOpenTikTok,
  onOpenPortfolio,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Top Grid Area: 2 Columns on Desktop with Expanded Hero Action Space */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-stretch">
        {/* Card 1: Realizar Orçamento / Hero Action (Left Large Card with Increased Height & Space) */}
        <div
          id="card-realizar-orcamento"
          onClick={() => window.open('https://wa.me/message/ADO22UJUCGV7L1', '_blank')}
          className="group relative lg:col-span-7 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/70 backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(0,122,255,0.25)] min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between p-7 sm:p-9"
        >
          {/* Background Image with Vignette Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src={config.heroCard.imageUrl}
              alt="Ayrton - Desenvolvedor Web"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter brightness-70 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D1F] via-[#070D1F]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D1F]/80 via-transparent to-transparent" />
          </div>

          {/* Top Left Floating Arrow */}
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-[#007AFF]/15 border border-[#007AFF]/30 flex items-center justify-center text-[#007AFF] transition-all group-hover:bg-[#007AFF] group-hover:text-[#00285c] group-hover:scale-110 shadow-[0_0_15px_rgba(0,209,255,0.2)]">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom Card Content with Generous Typography and Spacing */}
          <div className="relative z-10 mt-auto pt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 font-heading tracking-tight group-hover:text-[#007AFF] transition-colors">
              {config.heroCard.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-normal">
              {config.heroCard.subtitle}
            </p>
          </div>
        </div>

        {/* Right Column (2 Stacked Cards) */}
        <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
          {/* Card 2: Livros de Programação (Top Right) */}
          <div
            id="card-livros-programacao"
            onClick={onOpenBooks}
            className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,209,255,0.2)] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] lg:min-h-[255px]"
          >
            {/* Subtle background image */}
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity">
              <img
                src={config.booksCard.imageUrl}
                alt="Workspace Livros"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-[#0F172A]/80" />
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#007AFF]/50 group-hover:text-[#007AFF] transition-colors">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-heading group-hover:text-[#007AFF] transition-colors">
                  {config.booksCard.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {config.booksCard.subtitle}
              </p>
            </div>
          </div>

          {/* Card 3: Mentoria Individual (Middle Right) */}
          <div
            id="card-mentoria-individual"
            onClick={onOpenMentorship}
            className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/30 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between min-h-[230px] lg:min-h-[265px]"
          >
            {/* Background texture */}
            <div className="absolute inset-0 z-0 opacity-15">
              <img
                src={config.mentorshipCard.imageUrl}
                alt="Mentoria"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale"
              />
              <div className="absolute inset-0 bg-[#070D1F]/90" />
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#007AFF] opacity-70">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Centeblue Frosted Glass Badge "Indisponível no momento" */}
            <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
              <div className="px-5 py-2.5 rounded-full bg-[#1E2538]/90 backdrop-blur-md border border-white/15 text-slate-200 text-xs sm:text-sm font-medium shadow-xl flex items-center gap-2 group-hover:border-[#007AFF]/40 group-hover:text-white transition-all">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>{config.mentorshipCard.badge || 'Indisponível no momento'}</span>
              </div>
            </div>

            {/* Content (Slightly blurblue/muted as in original screen) */}
            <div className="relative z-10 mt-4 filter blur-[6px] opacity-30 select-none">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-heading">
                {config.mentorshipCard.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {config.mentorshipCard.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid Row: 4 Equal Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 4: Canal do YouTube */}
        <div
          id="card-canal-youtube"
          onClick={() => window.open('https://m.youtube.com/channel/UCb3bxN6Tdx00vSYYvxDjj0A', '_blank')}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,122,255,0.2)] flex flex-col"
        >
          {/* Thumbnail with YouTube Glow */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={config.youtubeCard.imageUrl}
              alt="Canal do Youtube"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>

          {/* Text Area */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#007AFF] transition-colors mb-1">
                {config.youtubeCard.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {config.youtubeCard.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: TikTok */}
        <div
          id="card-tiktok"
          onClick={() => window.open('https://www.tiktok.com/@ayrtonrodrigoyt?_r=1&_t=ZS-9954tit9XsL', '_blank')}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,122,255,0.2)] flex flex-col"
        >
          {/* Thumbnail with TikTok Glow */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={config.tiktokCard.imageUrl}
              alt="Tik Tok"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>

          {/* Text Area */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#007AFF] transition-colors mb-1">
                {config.tiktokCard.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {config.tiktokCard.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Card 5.5: Instagram */}
        <div
          id="card-instagram"
          onClick={() => window.open(config.instagramCard.actionUrl || 'https://instagram.com/ayrtonrodrigoyt', '_blank')}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,122,255,0.2)] flex flex-col"
        >
          {/* Thumbnail with Instagram Glow */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={config.instagramCard.imageUrl}
              alt="Instagram"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>

          {/* Text Area */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#007AFF] transition-colors mb-1">
                {config.instagramCard.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {config.instagramCard.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Card 6: Portfólio (Mockups on Laptop + Mobile) */}
        <div
          id="card-portfolio"
          onClick={onOpenPortfolio}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#007AFF]/40 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,209,255,0.2)] flex flex-col"
        >
          {/* Thumbnail with Devices Mockup (Santander / Laptop & Phone) */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={config.portfolioCard.imageUrl}
              alt="Portfólio de Sites"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>

          {/* Text Area */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#007AFF] transition-colors mb-1">
                {config.portfolioCard.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {config.portfolioCard.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
