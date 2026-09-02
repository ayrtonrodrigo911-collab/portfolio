import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
}

const WORDS = ['Vende', 'Converte', 'Engaja', 'Impulsiona'];

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline = 'Seu Negócio Merece um Site que Vende',
  subheadline = 'Sites profissionais para pequenas e médias empresas, Advogados, nutricionistas, prestadores de serviço, Lojas e mais, que querem crescer online',
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = WORDS[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 text-center max-w-4xl mx-auto">
      {/* Subtle background glow effect */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#007AFF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-heading flex flex-col items-center">
        <span className="text-center">Seu Negócio Merece um Site que</span>
        <span className="text-[#007AFF] flex items-center justify-start min-w-[200px] sm:min-w-[300px] mt-2">
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      {/* Subtitle description */}
      <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
        {subheadline}
      </p>
    </section>
  );
};
