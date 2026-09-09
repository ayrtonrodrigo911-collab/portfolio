import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Smartphone, Laptop, CheckCircle2, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: PortfolioProject[];
  onOpenQuote: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  projects,
  onOpenQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,209,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-1">
              Portfólio de Projetos
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Sites e plataformas de alta performance construídos para gerar faturamento real.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden border border-white/10 bg-[#070D1F]/70 hover:border-[#007AFF]/40 transition-all flex flex-col justify-between"
              >
                {/* Project Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D1F] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/10 text-[11px] font-semibold text-[#007AFF]">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#007AFF] transition-colors mb-1.5 font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={project.pinterestUrl || "https://br.pinterest.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-white text-white hover:text-red-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Visualizar projeto no pinterest</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.17 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
                    </a>
                    
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#007AFF] hover:text-[#00285c] text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Quero um Site com essa Qualidade</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
