import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Download, Code, Layers, Server, PenTool, Monitor, Cpu, Folder } from 'lucide-react';
import { LibraryCategory, ProgrammingBook } from '../types';

interface BooksPageProps {
  onBack: () => void;
  categories: LibraryCategory[];
}

const IconMap: Record<string, React.FC<any>> = {
  code: Code,
  layers: Layers,
  server: Server,
  tool: PenTool,
  monitor: Monitor,
  cpu: Cpu,
  book: BookOpen,
  folder: Folder
};

export const BooksPage: React.FC<BooksPageProps> = ({ onBack, categories }) => {
  const [currentPath, setCurrentPath] = useState<string[]>([]); // array of category IDs

  // Navigate deeper
  const handleCategoryClick = (categoryId: string) => {
    setCurrentPath(prev => [...prev, categoryId]);
  };

  // Navigate up one level
  const handleBackClick = () => {
    if (currentPath.length > 0) {
      setCurrentPath(prev => prev.slice(0, -1));
    } else {
      onBack();
    }
  };

  // Resolve current view data based on path
  let currentTitle = "Biblioteca Exclusiva";
  let currentSubtitle = "Ayrton";
  let currentDescription = "Tenha acesso aos materiais que vão transformar sua carreira na programação. Estude, aplique e entenda como funciona desenvolvimento de software.";
  
  let currentSubcategories: LibraryCategory[] = [];
  let currentBooks: ProgrammingBook[] = [];

  if (currentPath.length === 0) {
    currentSubcategories = categories;
  } else {
    // Traverse to the selected category
    let currentCategory: LibraryCategory | undefined;
    let list = categories;
    for (const p of currentPath) {
      currentCategory = list.find(c => c.id === p);
      if (currentCategory?.subcategories) {
        list = currentCategory.subcategories;
      } else {
        list = [];
      }
    }

    if (currentCategory) {
      currentTitle = currentCategory.title;
      currentSubtitle = "";
      currentDescription = currentCategory.description || "Escolha um material abaixo.";
      currentSubcategories = currentCategory.subcategories || [];
      currentBooks = currentCategory.books || [];
    }
  }

  return (
    <div className="min-h-screen bg-[#070D1F] text-[#dce1fb] pb-24 font-sans">
      {/* Header / Navbar */}
      <div className="border-b border-white/[0.06] bg-[#0A0F1E]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {currentPath.length === 0 ? "Voltar ao Portfólio" : "Voltar"}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-[#007AFF]/10 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-[#007AFF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            {currentTitle} {currentSubtitle && <span className="text-[#007AFF]">{currentSubtitle}</span>}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {currentDescription}
          </p>
        </div>

        {/* Categories / Subcategories Grid */}
        {currentSubcategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentSubcategories.map((cat) => {
              const IconComp = IconMap[cat.iconName || 'folder'] || Folder;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="bg-[#0F172A] border border-white/10 hover:border-[#007AFF]/50 rounded-2xl p-6 text-left flex items-start gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,122,255,0.15)] hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-[#151f38] rounded-xl text-[#007AFF] group-hover:bg-[#007AFF]/10 transition-colors flex items-center justify-center w-12 h-12">
                    {cat.iconImageUrl ? (
                      <img src={cat.iconImageUrl} alt={cat.title} className="w-6 h-6 object-contain" />
                    ) : (
                      <IconComp className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                    {cat.description && (
                      <p className="text-sm text-slate-400">{cat.description}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Books Grid */}
        {currentBooks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBooks.map((book) => {
              const isAvailable = !!book.pdfDownloadUrl;

              return (
                <div 
                  key={book.id}
                  className={`relative group bg-[#0F172A] rounded-3xl border ${isAvailable ? 'border-[#007AFF]/30 shadow-[0_0_40px_rgba(0,122,255,0.1)]' : 'border-white/10'} overflow-hidden flex flex-col transition-all duration-300 ${!isAvailable && 'opacity-60'}`}
                >
                  {/* Imagem de Capa */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#151f38]">
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isAvailable ? 'group-hover:scale-110' : 'filter blur-sm grayscale'}`}
                    />
                    {!isAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#070D1F]/50 backdrop-blur-sm">
                        <span className="px-6 py-2 bg-[#1A233A] text-white font-medium rounded-full border border-white/10 shadow-lg">
                          Em Breve
                        </span>
                      </div>
                    )}
                    {isAvailable && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#007AFF] text-white text-xs font-bold rounded-full shadow-lg">
                        Disponível
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300">
                        {book.level}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {book.title}
                    </h3>
                    
                    <p className="text-sm text-[#007AFF] font-medium mb-4">
                      {book.subtitle}
                    </p>

                    <p className="text-slate-400 text-sm mb-6 flex-1">
                      {book.description}
                    </p>

                    {/* Tópicos */}
                    <ul className="space-y-2 mb-8">
                      {book.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-300">
                          <div className="min-w-[12px] h-3 w-3 rounded-full bg-[#007AFF]/20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                          </div>
                          <span className="line-clamp-2">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botão Ação */}
                    {isAvailable ? (
                      <a 
                        href={book.pdfDownloadUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                      >
                        <Download className="w-5 h-5" />
                        Acessar PDF agora
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="w-full py-4 bg-[#1A233A] text-slate-500 font-medium rounded-xl cursor-not-allowed flex items-center justify-center"
                      >
                        Em Produção
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
