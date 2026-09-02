import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Smartphone, Laptop, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(projects[0] || null);

  if (!isOpen) return null;

  const categories = ['Todos', 'Fintech', 'Advocacia', 'Nutrição', 'E-commerce'];

  const filteblueProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,209,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#007AFF]/15 text-[#007AFF] text-xs font-semibold uppercase tracking-wider">
                Cases de Sucesso
              </span>
            </div>
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

        {/* Category Filters */}
        <div className="px-6 py-3 border-b border-white/10 flex items-center gap-2 overflow-x-auto bg-[#070D1F]/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#007AFF] text-[#00285c] font-bold shadow-[0_0_15px_rgba(0,209,255,0.4)]'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteblueProjects.map((project) => (
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

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] text-slate-400 block">{m.label}</span>
                          <span className="text-xs font-bold text-[#007AFF] flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#007AFF] hover:text-[#00285c] text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Quero um Site com essa Qualidade</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/10 bg-[#070D1F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Todos os projetos são 100% responsivos e com garantia de satisfação.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-6 py-2.5 rounded-full bg-[#007AFF] hover:bg-[#38e1ff] text-[#00285c] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all cursor-pointer"
          >
            Solicitar Proposta para meu Nicho
          </button>
        </div>
      </div>
    </div>
  );
};
