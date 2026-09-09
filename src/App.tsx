import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { QuoteModal } from './components/QuoteModal';
import { PortfolioModal } from './components/PortfolioModal';
import { BooksPage } from './components/BooksPage';
import { MentorshipModal } from './components/MentorshipModal';
import { YouTubeModal } from './components/YouTubeModal';
import { TikTokModal } from './components/TikTokModal';
import { ContactModal } from './components/ContactModal';
import {
  DEFAULT_SITE_CONFIG,
  DEFAULT_PORTFOLIO_PROJECTS,
  LIBRARY_CATEGORIES,
  DEFAULT_YOUTUBE_VIDEOS,
  DEFAULT_TIKTOK_POSTS,
} from './data/defaultData';
import { SiteConfig } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('contato');
  const [siteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [currentView, setCurrentView] = useState<'home' | 'books'>('home');

  // Modal open states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false);
  const [isTikTokOpen, setIsTikTokOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSelectNavTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'contato') setIsContactOpen(true);
    if (tab === 'portfolio') setIsPortfolioOpen(true);
    if (tab === 'youtube') setIsYouTubeOpen(true);
    if (tab === 'tiktok') setIsTikTokOpen(true);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsQuoteOpen(false);
        setIsPortfolioOpen(false);
        setIsMentorshipOpen(false);
        setIsYouTubeOpen(false);
        setIsTikTokOpen(false);
        setIsContactOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#070D1F] text-[#dce1fb] relative selection:bg-[#007AFF]/30 selection:text-white flex flex-col justify-between overflow-x-hidden font-sans">
      {/* Background Ambience Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-radial-hero opacity-90" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#007AFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {currentView === 'home' ? (
        <>
          {/* Main Top Navigation */}
          <Navbar
            activeTab={activeTab}
            onSelectTab={handleSelectNavTab}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Hero Section */}
            <HeroSection
              headline={siteConfig.headline}
              subheadline={siteConfig.subheadline}
            />

            {/* 6-Card Bento Grid */}
            <BentoGrid
              config={siteConfig}
              onOpenQuote={() => setIsQuoteOpen(true)}
              onOpenBooks={() => setCurrentView('books')}
              onOpenMentorship={() => setIsMentorshipOpen(true)}
              onOpenYouTube={() => setIsYouTubeOpen(true)}
              onOpenTikTok={() => setIsTikTokOpen(true)}
              onOpenPortfolio={() => setIsPortfolioOpen(true)}
            />
          </main>

          {/* Footer */}
          <footer className="w-full border-t border-white/[0.06] bg-[#0A0F1E]/80 backdrop-blur-sm py-8 px-4 text-center text-xs text-slate-400">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-300">
                  Sites Profissionais de Alta Conversão
                </span>
              </div>

              <div className="flex items-center space-x-6 text-slate-400">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-[#007AFF] transition-colors cursor-pointer"
                >
                  Contato & WhatsApp
                </button>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <BooksPage 
          categories={LIBRARY_CATEGORIES} 
          onBack={() => setCurrentView('home')} 
        />
      )}

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        whatsappNumber={siteConfig.whatsappNumber}
      />

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        projects={DEFAULT_PORTFOLIO_PROJECTS}
        onOpenQuote={() => {
          setIsPortfolioOpen(false);
          setIsQuoteOpen(true);
        }}
      />

      <MentorshipModal
        isOpen={isMentorshipOpen}
        onClose={() => setIsMentorshipOpen(false)}
      />

      <YouTubeModal
        isOpen={isYouTubeOpen}
        onClose={() => setIsYouTubeOpen(false)}
        videos={DEFAULT_YOUTUBE_VIDEOS}
        channelUrl={siteConfig.youtubeChannelUrl}
      />

      <TikTokModal
        isOpen={isTikTokOpen}
        onClose={() => setIsTikTokOpen(false)}
        posts={DEFAULT_TIKTOK_POSTS}
        tiktokUrl={siteConfig.tiktokUrl}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        whatsappNumber={siteConfig.whatsappNumber}
        contactEmail={siteConfig.contactEmail}
        onOpenQuote={() => {
          setIsContactOpen(false);
          setIsQuoteOpen(true);
        }}
      />
    </div>
  );
}
