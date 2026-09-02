import React, { useState } from 'react';
import { X, Send, Mail, MessageSquare, Phone, MapPin, Clock, Check, Copy, HelpCircle, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
  contactEmail?: string;
  onOpenQuote: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5581981075376',
  contactEmail = 'dc0ce3a511@proton.me',
  onOpenQuote,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá Ayrton! Vi seu site e gostaria de tirar uma dúvida sobre desenvolvimento de sites.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const faqs = [
    {
      q: 'Quanto tempo leva para o meu site ficar pronto?',
      a: 'Landing pages de alta conversão costumam ser entregues em 7 a 10 dias úteis. Sites institucionais completos levam entre 15 a 20 dias.',
    },
    {
      q: 'O site funciona bem em celulares e tablets?',
      a: 'Sim! Todos os projetos são desenvolvidos com metodologia Mobile-First, garantindo carregamento instantâneo e layout adaptado para qualquer tela.',
    },
    {
      q: 'Vocês cuidam do domínio e hospedagem?',
      a: 'Sim, realizamos toda a configuração de domínio (.com.br ou .com), hospedagem em servidores de alta performance e certificado de segurança SSL gratuito.',
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Trabalhamos com 50% de entrada e 50% na entrega e aprovação final do site, ou parcelado em até 12x no cartão de crédito.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,209,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/20 border border-[#007AFF]/30 flex items-center justify-center text-[#007AFF]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">
                Canais de Atendimento & Contato
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Fale diretamente com o Ayrton para orçamentos, dúvidas técnicas e parcerias.
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

        {/* Content */}
        <div className="p-6 max-h-[72vh] overflow-y-auto space-y-6">
          {/* Main Direct Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp */}
            <div
              onClick={handleWhatsApp}
              className="p-5 rounded-xl border border-blue-500/30 bg-blue-950/20 hover:bg-blue-900/30 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-400 uppercase font-bold tracking-wider block">
                    Resposta em minutos
                  </span>
                  <h3 className="text-base font-bold text-white font-heading">
                    Conversar via WhatsApp
                  </h3>
                  <p className="text-xs text-slate-400">Atendimento comercial direto</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 transition-transform group-hover:translate-x-1" />
            </div>

            {/* Email */}
            <div
              onClick={handleCopyEmail}
              className="p-5 rounded-xl border border-white/10 bg-[#070D1F]/70 hover:border-[#007AFF]/40 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#007AFF]/20 border border-[#007AFF]/40 flex items-center justify-center text-[#007AFF]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-[#007AFF] uppercase font-bold tracking-wider block">
                    E-mail Oficial
                  </span>
                  <h3 className="text-sm font-bold text-white font-heading">
                    {contactEmail}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {copiedEmail ? 'Copiado para a área de transferência!' : 'Clique para copiar'}
                  </p>
                </div>
              </div>
              {copiedEmail ? (
                <Check className="w-5 h-5 text-blue-400" />
              ) : (
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
              )}
            </div>
          </div>

          {/* Business Info Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#007AFF] flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Horário de Atendimento</span>
                <span className="text-xs font-semibold text-white">Seg a Dom: 09h às 19h</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#007AFF] flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Localização</span>
                <span className="text-xs font-semibold text-white">Toritama, PE (Atende Todo o Brasil)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#007AFF] flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Consultoria Rápida</span>
                <span className="text-xs font-semibold text-white">Diagnóstico gratuito</span>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#007AFF]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Dúvidas Frequentes (FAQ)
              </h3>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpenFaq = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveFaq(isOpenFaq ? null : idx)}
                    className="p-4 rounded-xl border border-white/10 bg-[#070D1F]/60 cursor-pointer hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white">
                      <span>{faq.q}</span>
                      <span className="text-[#007AFF] font-mono text-sm ml-2">
                        {isOpenFaq ? '-' : '+'}
                      </span>
                    </div>
                    {isOpenFaq && (
                      <p className="text-xs text-slate-300 mt-2 pt-2 border-t border-white/5 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070D1F] flex items-center justify-between">
          <span className="text-xs text-slate-400">Pronto para dar o próximo passo?</span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-5 py-2 rounded-full bg-[#007AFF] hover:bg-[#38e1ff] text-[#00285c] font-bold text-xs shadow-[0_0_15px_rgba(0,209,255,0.4)] transition-all cursor-pointer"
          >
            Calcular Meu Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};
