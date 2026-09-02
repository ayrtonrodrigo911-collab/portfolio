import React, { useState } from 'react';
import { X, Check, Calculator, Sparkles, Send, Copy, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber = '5511999999999',
}) => {
  const [businessType, setBusinessType] = useState('Advocacia');
  const [projectType, setProjectType] = useState('landing-page');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'whatsapp-crm',
    'seo-google',
  ]);
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const businessTypes = [
    'Advocacia & Jurídico',
    'Nutrição & Saúde',
    'Clínica Médica / Estética',
    'Loja Virtual / E-commerce',
    'Prestador de Serviços',
    'Imobiliária / Corretor',
    'Infoprodutos / Educação',
    'Outro Ramo',
  ];

  const projectTypes = [
    {
      id: 'landing-page',
      title: 'Landing Page de Alta Conversão',
      desc: 'Focada em transformar visitantes em clientes imediatos no WhatsApp.',
      basePrice: 1800,
      deliveryDays: '7 a 10 dias',
    },
    {
      id: 'institutional',
      title: 'Site Institucional Completo',
      desc: 'Múltiplas páginas, autoridade máxima, serviços detalhados e blog/notícias.',
      basePrice: 3200,
      deliveryDays: '15 a 20 dias',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce / Loja Virtual',
      desc: 'Catálogo de produtos, checkout transparente com Pix/Cartão e painel de pedidos.',
      basePrice: 4500,
      deliveryDays: '20 a 30 dias',
    },
  ];

  const addonsList = [
    {
      id: 'whatsapp-crm',
      name: 'Integração WhatsApp Inteligente & CRM',
      price: 250,
      desc: 'Botões flutuantes, rastreio de cliques e envio automático de leads.',
    },
    {
      id: 'seo-google',
      name: 'Otimização SEO para Top 1 Google',
      price: 450,
      desc: 'Indexação rápida, meta tags e palavras-chave locais da sua cidade.',
    },
    {
      id: 'copywriting',
      name: 'Copywriting Profissional Persuasivo',
      price: 500,
      desc: 'Textos escritos por especialista para quebrar objeções e vender mais.',
    },
    {
      id: 'speed-extreme',
      name: 'Otimização de Velocidade Extrema (99+ PageSpeed)',
      price: 350,
      desc: 'Carregamento instantâneo em menos de 1 segundo em qualquer celular 4G.',
    },
  ];

  const currentProject = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const addonsTotal = selectedAddons.blueuce((sum, addonId) => {
    const found = addonsList.find((a) => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const totalPrice = currentProject.basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const generateMessageText = () => {
    const addonsNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `Olá Ayrton! Gostaria de solicitar um orçamento para o meu negócio:

👤 *Nome:* ${clientName || 'Não informado'}
🏢 *Empresa / Ramo:* ${clientCompany || businessType}
🎯 *Tipo de Projeto:* ${currentProject.title}
⚡ *Prazo Estimado:* ${currentProject.deliveryDays}
🛠️ *Opcionais:* ${addonsNames || 'Nenhum'}
💰 *Estimativa Base:* R$ ${totalPrice.toLocaleString('pt-BR')}

Podemos conversar sobre as próximas etapas?`;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateMessageText());
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#0F172A] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,209,255,0.15)] text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151f38]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/15 border border-[#007AFF]/30 flex items-center justify-center text-[#007AFF]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">
                Calculadora de Orçamento
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Personalize os requisitos e receba uma estimativa instantânea
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

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Step 1: Identificação Básica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Seu Nome ou Empresa
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Dr. Roberto / Boutique Bella"
                className="w-full px-4 py-2.5 rounded-xl bg-[#070D1F] border border-white/10 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-white text-sm outline-none transition-all placeholder:text-slate-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Nicho de Atuação
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070D1F] border border-white/10 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-white text-sm outline-none transition-all cursor-pointer"
              >
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#0F172A] text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Formato do Projeto */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Escolha a Estrutura do Site
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {projectTypes.map((project) => {
                const isSelected = projectType === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setProjectType(project.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#007AFF]/10 border-[#007AFF] shadow-[0_0_20px_rgba(0,209,255,0.15)]'
                        : 'bg-[#070D1F]/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#007AFF]">
                        {project.deliveryDays}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-[#007AFF] bg-[#007AFF]'
                            : 'border-slate-500'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#00285c] stroke-[3]" />}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="text-sm font-extrabold text-white">
                      R$ {project.basePrice.toLocaleString('pt-BR')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Funcionalidades Extras (Addons) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Recursos Estratégicos Adicionais
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-start gap-3 transition-all ${
                      isChecked
                        ? 'bg-[#007AFF]/10 border-[#007AFF]/80'
                        : 'bg-[#070D1F]/50 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border mt-0.5 flex-shrink-0 flex items-center justify-center ${
                        isChecked
                          ? 'border-[#007AFF] bg-[#007AFF]'
                          : 'border-slate-600 bg-transparent'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 text-[#00285c] stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">
                          {addon.name}
                        </span>
                        <span className="text-xs text-[#007AFF] font-semibold">
                          +R$ {addon.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {addon.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Investment Summary Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#007AFF]/15 to-[#007AFF]/15 border border-[#007AFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" />
                Estimativa de Investimento
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">
                R$ {totalPrice.toLocaleString('pt-BR')}{' '}
                <span className="text-xs font-normal text-slate-300">
                  (ou até 12x sem juros)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
              <Zap className="w-4 h-4 text-[#007AFF]" />
              <span>Entrega em média de {currentProject.deliveryDays}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-[#070D1F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/15 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400">Briefing Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Resumo do Projeto</span>
              </>
            )}
          </button>

          <button
            id="btn-confirm-send-whatsapp"
            onClick={handleSendWhatsApp}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#007AFF] hover:bg-[#38e1ff] text-[#00285c] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,209,255,0.4)] hover:shadow-[0_0_30px_rgba(0,209,255,0.6)] transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Falar no WhatsApp com Ayrton</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
