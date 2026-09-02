import React from 'react';
import { X, Wrench } from 'lucide-react';
import { ProgrammingBook } from '../types';

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
  books: ProgrammingBook[];
}

export const BooksModal: React.FC<BooksModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,122,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-end bg-[#151f38]/60">
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#007AFF]/15 border border-[#007AFF]/30 flex items-center justify-center text-[#007AFF] mx-auto mb-6">
            <Wrench className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl font-bold font-heading text-white">
            Em Manutenção
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
            Estamos preparando um catálogo completo de livros de programação para você. Volte em breve!
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070D1F] flex items-center justify-center text-xs text-slate-500">
          <span className="text-[#007AFF] font-medium">Pixel Pro Studio</span>
        </div>
      </div>
    </div>
  );
};

