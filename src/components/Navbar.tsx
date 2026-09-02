import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuote,
}) => {
  const navItems = [
    { id: 'contato', label: 'Contato' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'tiktok', label: 'TikTok' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all">
      <div className="px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Left Logo */}
        <div className="flex-1 flex items-center">
          <span className="text-[#007AFF] font-bold text-xl flex items-center gap-2">
            Ayrton
          </span>
        </div>

        {/* Center Navigation Links (Inner Pill) */}
        <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full p-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                  isActive ? 'bg-[#007AFF]/20 text-[#007AFF] shadow-sm border border-[#007AFF]/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions (Mobile Nav + Desktop CTA) */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Mobile Only links fallback (simple dots or just the CTA) */}
          <button
            id="btn-solicitar-orcamento-nav"
            onClick={() => window.open('https://wa.me/message/ADO22UJUCGV7L1', '_blank')}
            className="px-5 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base text-white bg-[#007AFF] hover:bg-[#005bb5] transition-all cursor-pointer shadow-lg shadow-[#007AFF]/20 flex items-center gap-2"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
