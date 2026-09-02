import React from 'react';
import { X, Video, ExternalLink, Heart, Eye } from 'lucide-react';
import { TikTokPost } from '../types';

interface TikTokModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: TikTokPost[];
  tiktokUrl?: string;
}

export const TikTokModal: React.FC<TikTokModalProps> = ({
  isOpen,
  onClose,
  posts,
  tiktokUrl = 'https://tiktok.com',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,209,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/20 border border-[#007AFF]/30 flex items-center justify-center text-[#007AFF]">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold font-heading">
                  TikTok & Pílulas Rápidas
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-[10px] font-bold border border-[#007AFF]/30">
                  Vídeos Curtos
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Dicas rápidas de programação, precificação, ferramentas e bastidores.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Post Grid */}
        <div className="p-6 max-h-[72vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl overflow-hidden border border-white/10 bg-[#070D1F]/70 hover:border-[#007AFF]/40 transition-all flex flex-col justify-between"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.thumbnailUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D1F] via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xs font-bold text-white font-heading mb-2 drop-shadow-md">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#007AFF]" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-blue-400" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070D1F] flex items-center justify-between">
          <span className="text-xs text-slate-400">Novos vídeos toda semana no perfil.</span>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[#007AFF] hover:bg-[#38e1ff] text-[#00285c] font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all"
          >
            <Video className="w-4 h-4" />
            <span>Seguir no TikTok</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
