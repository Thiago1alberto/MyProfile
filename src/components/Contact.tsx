import React, { useState, useRef } from 'react';
import { Lightbulb, EnvelopeSimple, LinkedinLogo, GithubLogo } from 'phosphor-react';

const Contact = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleLightToggle = () => {
    setIsLightOn(!isLightOn);
    // Scroll para o topo da seção quando o texto mudar
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const socialLinks = [
    {
      icon: LinkedinLogo,
      href: "https://www.linkedin.com/in/thiago-alberto-864121190",
      label: "LinkedIn",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: GithubLogo,
      href: "https://github.com/Thiago1alberto",
      label: "GitHub",
      color: "text-purple-400 hover:text-purple-300"
    },
    {
      icon: EnvelopeSimple,
      href: "mailto:contato@thiagoalberto.dev",
      label: "Email",
      color: "text-green-400 hover:text-green-300"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-20 transition-all duration-1000 ${
        isLightOn 
          ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
          : 'bg-gradient-to-b from-gray-900 to-black'
      }`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className={`p-8 rounded-xl border transition-all duration-1000 ${
          isLightOn 
            ? 'border-cyan-400/30 bg-slate-800/50' 
            : 'border-gray-700/30 bg-gray-900/50'
        }`}>
          
          {/* Content */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className={`text-4xl lg:text-5xl font-bold transition-all duration-1000 ${
                isLightOn 
                  ? 'text-white' 
                  : 'text-gray-500'
              }`}>
                {isLightOn ? 'Transforme seus dados em resultados!' : 'Seus dados estão uma bagunça?'}
              </h2>
              
              <p className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${
                isLightOn 
                  ? 'text-slate-300' 
                  : 'text-gray-600'
              }`}>
                {isLightOn 
                  ? 'Com a estratégia certa, seus dados podem se tornar sua maior vantagem competitiva.'
                  : 'Você passa horas retrabalhando planilhas, perdendo oportunidades e tomando decisões no escuro. Cada dia sem dados organizados está custando dinheiro para sua empresa.'
                }
              </p>
              
              <div className={`p-6 rounded-xl border max-w-2xl mx-auto transition-all duration-1000 ${
                isLightOn 
                  ? 'border-green-500/30 bg-green-500/5' 
                  : 'border-red-500/30 bg-red-500/5'
              }`}>
                <p className={`text-base font-medium transition-all duration-1000 ${
                  isLightOn 
                    ? 'text-green-300' 
                    : 'text-red-300'
                }`}>
                  {isLightOn 
                    ? 'Dados organizados • Relatórios automatizados • Decisões baseadas em insights reais'
                    : 'Tempo perdido com retrabalho • Decisões baseadas em "achismo" • Oportunidades perdidas'
                  }
                </p>
              </div>

              {/* Lista de problemas/benefícios */}
              <div className={`space-y-3 pt-6 border-t transition-all duration-1000 ${
                isLightOn 
                  ? 'border-slate-700/30' 
                  : 'border-gray-700/20'
              }`}>
                <p className={`text-sm transition-all duration-1000 ${
                  isLightOn 
                    ? 'text-slate-400' 
                    : 'text-gray-600'
                }`}>
                  {isLightOn 
                    ? 'Economize 10+ horas por semana em relatórios manuais'
                    : 'Quantas horas você perde por semana refazendo planilhas?'
                  }
                </p>
                <p className={`text-sm transition-all duration-1000 ${
                  isLightOn 
                    ? 'text-slate-400' 
                    : 'text-gray-600'
                }`}>
                  {isLightOn 
                    ? 'Decisões 3x mais rápidas com dados em tempo real'
                    : 'Quantas oportunidades perdeu por decidir tarde demais?'
                  }
                </p>
                <p className={`text-sm transition-all duration-1000 ${
                  isLightOn 
                    ? 'text-slate-400' 
                    : 'text-gray-600'
                }`}>
                  {isLightOn 
                    ? 'ROI comprovado: clientes veem resultados em 30 dias'
                    : 'Quanto dinheiro está perdendo sem visibilidade dos seus dados?'
                  }
                </p>
              </div>

              {/* Frase de conexão */}
              <div className={`transition-all duration-1000 ${
                isLightOn ? 'opacity-0 h-0' : 'opacity-100 h-auto'
              }`}>
                <p className="text-lg font-medium text-slate-400 italic mt-8 mb-6">
                  Você não precisa ficar no escuro...
                </p>
                
                {/* Indicação visual para clicar */}
                <div className="flex flex-col items-center gap-2 animate-pulse">
                  <p className="text-sm text-yellow-400/80 font-medium">
                    👆 Clique aqui para descobrir a solução
                  </p>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Botão da luz - mais visível */}
            <div className="text-center mb-8">
              <button 
                onClick={handleLightToggle}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg border transition-all duration-1000 transform hover:scale-105 relative ${
                  isLightOn 
                    ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300 hover:bg-yellow-500/30 shadow-lg shadow-yellow-500/20' 
                    : 'bg-gray-800/50 border-yellow-600/30 text-yellow-400 hover:bg-yellow-800/30 hover:border-yellow-500/50 shadow-lg hover:shadow-yellow-500/10'
                }`}
              >
                {/* Efeito de brilho quando hover */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isLightOn 
                    ? 'bg-yellow-500/10' 
                    : 'bg-gradient-to-r from-yellow-500/5 via-yellow-400/5 to-yellow-500/5 opacity-0 hover:opacity-100'
                }`}></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  {isLightOn ? (
                    <Lightbulb size={28} weight="fill" className="text-yellow-400" />
                  ) : (
                    <Lightbulb size={28} weight="regular" className="animate-pulse" />
                  )}
                  <span className="font-semibold text-lg">
                    {isLightOn ? 'Apagar as luzes' : 'Acender as luzes 💡'}
                  </span>
                </div>
              </button>
            </div>

            {/* Call to action buttons - só aparecem com luz acesa */}
            {isLightOn && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                <a
                  href="mailto:contato@thiagoalberto.dev?subject=Vamos transformar meus dados em resultados"
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 min-w-[280px] text-center"
                >
                  Quero transformar meus dados
                </a>
                
                <a
                  href="https://www.linkedin.com/in/thiago-alberto-864121190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 min-w-[280px] text-center"
                >
                  Ver casos de sucesso
                </a>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className={`space-y-4 text-center pt-8 border-t transition-all duration-1000 ${
            isLightOn 
              ? 'border-slate-700/30' 
              : 'border-gray-700/20'
          }`}>
            <h4 className={`text-lg font-medium mb-4 transition-all duration-1000 ${
              isLightOn 
                ? 'text-slate-300' 
                : 'text-gray-500'
            }`}>
              Ou conecte-se comigo nas redes
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 border ${
                    isLightOn 
                      ? `hover:scale-110 ${color} border-gray-600 bg-gray-700` 
                      : 'bg-gray-800 text-gray-500 hover:bg-gray-700 border-gray-700'
                  }`}
                  aria-label={label}
                >
                  <Icon size={24} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
