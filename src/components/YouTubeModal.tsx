import React from 'react';
import { X, Play, ExternalLink, Users, Youtube, ThumbsUp } from 'lucide-react';
import { YouTubeVideo } from '../types';

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: YouTubeVideo[];
  channelUrl?: string;
}

export const YouTubeModal: React.FC<YouTubeModalProps> = ({
  isOpen,
  onClose,
  videos,
  channelUrl = 'https://youtube.com',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold font-heading">
                  Canal do YouTube
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/30">
                  TI Sem Romantização
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Aulas práticas, bastidores de projetos de alto valor e realidade do mercado dev.
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

        {/* Video List */}
        <div className="p-6 max-h-[72vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <a
                key={video.id}
                href={channelUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl overflow-hidden border border-white/10 bg-[#070D1F]/70 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-white font-heading group-hover:text-blue-400 transition-colors mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{video.views}</span>
                    <span>{video.publishedAt}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070D1F] flex items-center justify-between">
          <span className="text-xs text-slate-400">Inscreva-se e ative as notificações.</span>
          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
          >
            <Youtube className="w-4 h-4" />
            <span>Acessar Canal Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
