import React, { useState, useEffect } from 'react';
import { Play, ArrowSquareOut, CheckCircle, Shield, Users, ChartBar } from 'phosphor-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Componente EPIApp inline para resolver problema de import
const EPIApp = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualizar hora em tempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Função para formatar a hora
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Controle Total",
      description: "Monitore todos os EPIs da empresa em tempo real"
    },
    {
      icon: Users,
      title: "Gestão de Funcionários", 
      description: "Controle individual por colaborador e setor"
    },
    {
      icon: ChartBar,
      title: "Relatórios Automáticos",
      description: "Dashboards e relatórios de conformidade instantâneos"
    },
    {
      icon: CheckCircle,
      title: "Conformidade NR",
      description: "Garanta 100% de conformidade com as normas regulamentadoras"
    }
  ];

  const benefits = [
    "Redução de 80% no tempo de controle manual",
    "Eliminação de 100% das multas por não conformidade",
    "Economia estimada de R$ 15.000 a R$ 50.000/ano*",
    "Geração automática de relatórios para auditorias",
    "Rastreabilidade completa de todos os EPIs",
    "Alertas preventivos de vencimento via WhatsApp"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            App Disponível Agora
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Controle de EPI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sistema completo para gestão de Equipamentos de Proteção Individual. 
            Funciona em navegadores web e dispositivos móveis com controle de entrega, 
            vencimento, conformidade e relatórios automáticos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Description & Features */}
          <div className="space-y-8">
            
            {/* Problem & Solution */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-xl font-semibold text-red-300 mb-3">O Problema</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    Controle manual de EPIs gera erros e retrabalho
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    Multas por não conformidade com NRs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    Perda de EPIs e custos desnecessários
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    Relatórios demorados para auditorias
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                <h3 className="text-xl font-semibold text-green-300 mb-3">A Solução</h3>
                <ul className="space-y-2 text-gray-300">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} weight="fill" className="text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-green-500/20">
                  <p className="text-xs text-gray-400 italic">
                    *Economia baseada em: redução de horas administrativas, eliminação de multas, 
                    controle de perdas e otimização de compras. Valores variam conforme o porte da empresa.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <Icon size={24} weight="duotone" className="text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2">{title}</h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowDemo(!showDemo)}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play size={20} weight="fill" />
                {showDemo ? 'Fechar Demo' : 'Ver Demo Interativa'}
              </button>
              
              <a
                href="mailto:contato@thiagoalberto.dev?subject=Interesse no App de Controle de EPI"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-cyan-400/50 text-cyan-300 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10"
              >
                <ArrowSquareOut size={20} />
                Solicitar Demonstração
              </a>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[640px]">
              
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
                <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                  
                  {/* Phone Screen */}
                  <div className="relative w-full h-full bg-gray-900">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-2 bg-gray-800">
                      <span className="text-white text-sm font-medium font-mono">{formatTime(currentTime)}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border-2 border-white rounded-sm">
                          <div className="w-full h-full bg-green-400 rounded-[1px]"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    {showDemo ? (
                      <div className="relative w-full h-full">
                        <iframe 
                          src="https://www.appsheet.com/start/ba1490fc-0d0c-49fd-8a4a-9de6013710e5"
                          className="w-full h-full border-none"
                          title="EPI Control App Demo"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="p-4 space-y-4 bg-gray-100 h-full">
                        {/* Placeholder Screen */}
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                          <div className="text-6xl mb-4">📱</div>
                          <h3 className="text-lg font-medium text-gray-600 mb-2">App EPI Control</h3>
                          <p className="text-sm text-center text-gray-500 mb-6">
                            Clique em "Ver Demo Interativa" para visualizar o aplicativo funcionando
                          </p>
                          <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-xl -z-10"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
            
            {/* Real-time indicator */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-green-300 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Hora real do seu dispositivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-20 p-8 rounded-xl bg-gray-800/30 border border-gray-700/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Especificações Técnicas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-400 text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300 font-medium">Web & Mobile</div>
              <div className="text-gray-500 text-sm">Acesso via navegador e aplicativo móvel</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Disponibilidade</div>
              <div className="text-gray-500 text-sm">Funcionamento online e offline</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-3xl font-bold mb-2">∞</div>
              <div className="text-gray-300 font-medium">Usuários</div>
              <div className="text-gray-500 text-sm">Escalável para qualquer empresa</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="text-blue-300 font-semibold mb-2">💡 Plataforma Híbrida</h4>
            <p className="text-gray-300 text-sm">
              Desenvolvido com AppSheet, oferece experiência nativa em dispositivos móveis 
              e acesso completo via navegador web em computadores e tablets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Apps = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Apps & Soluções
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Aplicações práticas desenvolvidas para resolver problemas reais do dia a dia empresarial. 
            Cada app é uma solução completa, testada e pronta para usar.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>
      </section>

      {/* Apps List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* EPI Control App */}
          <EPIApp />
          
          {/* Placeholder for future apps */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Mais apps em desenvolvimento...</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;
