import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.role': 'DATA STRATEGY SPECIALIST',
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Thiago Alberto',
    'hero.title': 'Business Intelligence & Data Strategy Consultant',
    'hero.subtitle': 'I turn messy data into clear, useful, and profitable systems. Real insights, decision-driving visuals, and analysis that shows what you\'re missing.',
    'hero.subtitle.highlight1': 'messy data',
    'hero.subtitle.highlight2': 'clear, useful, and profitable systems',
    'hero.cta.work': 'View My Work',
    'hero.cta.linkedin': 'Connect on LinkedIn',
    'hero.highlights.analytics': 'Deep Analytics',
    'hero.highlights.analytics.desc': 'Insights that reveal profit or loss in real time.',
    'hero.highlights.visualization': 'Purposeful Visualization',
    'hero.highlights.visualization.desc': 'Dashboards built to guide — not just impress.',
    'hero.highlights.strategy': 'Strategic Data Use',
    'hero.highlights.strategy.desc': 'Decisions powered by logic, not guesswork.',
    
    // About Section
    'about.title': 'About Me',
    'about.intro.title': 'Data Analytics Specialist',
    'about.intro.desc': 'My work begins where reports end.',
    'about.description.p1': 'Every day, businesses generate data — but few know how to use it effectively. My work begins where reports end.',
    'about.description.p2': 'I\'m a data analyst focused on solving real business problems. Beyond building dashboards or automating processes, I create structure so the right decisions can happen faster, with less noise and more confidence.',
    'about.description.p3': 'I operate at the friction point between operational chaos and strategic clarity. I organize data, untangle bottlenecks, and turn scattered information into visual, practical, and actionable solutions.',
    'about.description.p4': 'My goal isn\'t to complicate things with pretty charts — it\'s to simplify with intelligence. If your business is stuck in messy spreadsheets, disconnected systems, or blind decisions — that\'s where I come in.',
    'about.skills.title': 'Technical Skills',
    'about.skills.excel': 'Excel',
    'about.skills.python': 'Python',
    'about.skills.sql': 'SQL',
    'about.skills.looker': 'Looker',
    'about.skills.ml': 'Machine Learning',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Showcasing data-driven solutions and analytical insights',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    
    // Apps Section
    'apps.title': 'Apps & Solutions',
    'apps.subtitle': 'Practical applications developed to solve real day-to-day business problems. Each app is a complete, tested, and ready-to-use solution.',
    'apps.epi.title': 'EPI Control',
    'apps.epi.subtitle': 'Complete Personal Protective Equipment management system. Works on web browsers and mobile devices with delivery, expiration, compliance control and automatic reports.',
    'apps.epi.available': 'App Available Now',
    'apps.epi.demo': 'View Interactive Demo',
    'apps.epi.close': 'Close Demo',
    'apps.epi.request': 'Request Demonstration',
    'apps.epi.placeholder': 'Click "View Interactive Demo" to see the application working',
    'apps.epi.realtime': 'Real time from your device',
    'apps.epi.tech.title': 'Technical Specifications',
    'apps.epi.tech.platform': 'Web & Mobile',
    'apps.epi.tech.platform.desc': 'Access via browser and mobile app',
    'apps.epi.tech.availability': 'Availability',
    'apps.epi.tech.availability.desc': 'Online and offline operation',
    'apps.epi.tech.users': 'Simultaneous Users',
    'apps.epi.tech.users.desc': 'Basic plan, expandable as needed',
    'apps.epi.tech.hybrid.title': '💡 Hybrid Platform',
    'apps.epi.tech.hybrid.desc': 'Developed with AppSheet, offers native experience on mobile devices and full access via web browser on computers and tablets.',
    'apps.epi.tech.users.title': '📊 About Users:',
    'apps.epi.tech.users.explanation': 'Register as many employees as needed in the system. The simultaneous user limit refers to how many people can use the app at the same time, based on the contracted plan.',
    
    // EPI Features
    'apps.epi.features.control.title': 'Total Control',
    'apps.epi.features.control.desc': 'Monitor all company PPE in real time',
    'apps.epi.features.management.title': 'Employee Management',
    'apps.epi.features.management.desc': 'Individual control by employee and department',
    'apps.epi.features.reports.title': 'Automatic Reports',
    'apps.epi.features.reports.desc': 'Instant compliance dashboards and reports',
    'apps.epi.features.compliance.title': 'NR Compliance',
    'apps.epi.features.compliance.desc': 'Ensure 100% compliance with regulatory standards',
    
    // EPI Problem & Solution
    'apps.epi.problem.title': 'The Problem',
    'apps.epi.problem.item1': 'Manual PPE control generates errors and rework',
    'apps.epi.problem.item2': 'Fines for non-compliance with NRs',
    'apps.epi.problem.item3': 'PPE loss and unnecessary costs',
    'apps.epi.problem.item4': 'Time-consuming reports for audits',
    
    'apps.epi.solution.title': 'The Solution',
    'apps.epi.solution.item1': '80% reduction in manual control time',
    'apps.epi.solution.item2': '100% elimination of non-compliance fines',
    'apps.epi.solution.item3': 'Estimated savings of R$ 15,000 to R$ 50,000/year*',
    'apps.epi.solution.item4': 'Automatic report generation for audits',
    'apps.epi.solution.item5': 'Complete traceability of all PPE',
    'apps.epi.solution.item6': 'Preventive expiration alerts via WhatsApp',
    'apps.epi.solution.disclaimer': '*Savings based on: reduction of administrative hours, elimination of fines, loss control and purchase optimization. Values vary according to company size.',
    'apps.epi.email.subject': 'Interest in EPI Control App',
    
    'apps.more': 'More apps in development...',
    
    // Contact Section
    'contact.title': 'Tired of Making Decisions in the Dark?',
    'contact.subtitle': 'Turn your messy data into clear strategic advantage',
    'contact.description': 'Stop wasting time on spreadsheets that lie, reports nobody trusts, and gut-feeling decisions that cost money. I build data systems that actually tell you what\'s working, what\'s failing, and exactly what to do next.',
    'contact.cta.main': 'Fix My Data Problems',
    'contact.cta.secondary': 'Show Me What\'s Possible',
    'contact.value.prop': 'Real insights that drive real results — no fluff, no pretty charts that mean nothing',
    'contact.cta.title': 'Get Your Data Working For You',
    'contact.cta.subtitle': 'Transform chaos into clarity',
    'contact.cta.pain': 'Scattered spreadsheets • Manual reports • Guesswork decisions',
    'contact.cta.primary': 'Fix My Data Problems',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.social.github': 'GitHub',
    'contact.social.linkedin': 'LinkedIn',
    'contact.social.email': 'Email',
    'contact.connect': 'Connect With Me',
    'contact.platforms': 'Click on the icons above to connect with me on different platforms',
    
    // Footer
    'footer.copyright': '© 2024 Thiago Alberto. All rights reserved.',
    'footer.brand.title': 'Thiago Alberto',
    'footer.brand.subtitle': 'Data Analyst & BI Specialist',
    'footer.brand.description': 'Transforming data into insights',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.services.analysis': 'Data Analysis',
    'footer.services.bi': 'Business Intelligence',
    'footer.services.dashboard': 'Dashboard Creation',
    'footer.services.automation': 'Process Automation',
    'footer.services.visualization': 'Data Visualization',
    'footer.contact': 'Get in Touch',
    'footer.contact.email': 'thiago.alberto@example.com',
    'footer.contact.available': 'Available for freelance projects',
    'footer.contact.response': 'Response time: 24 hours',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.made': 'Made with',
    'footer.and': 'and',
    'footer.in': 'in Brazil',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.role': 'ESPECIALISTA EM ESTRATÉGIA DE DADOS',
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Thiago Alberto',
    'hero.title': 'Consultor em Análise e Inteligência de Negócios',
    'hero.subtitle': 'Transformo dados bagunçados em sistemas claros, úteis e lucrativos. Leitura real, visualizações que guiam decisões e análises que falam o que você ainda não vê.',
    'hero.subtitle.highlight1': 'dados bagunçados',
    'hero.subtitle.highlight2': 'sistemas claros, úteis e lucrativos',
    'hero.cta.work': 'Ver meus projetos',
    'hero.cta.linkedin': 'Falar no LinkedIn',
    'hero.highlights.analytics': 'Análise Profunda',
    'hero.highlights.analytics.desc': 'Insights que mostram onde você ganha ou perde.',
    'hero.highlights.visualization': 'Visualização com Propósito',
    'hero.highlights.visualization.desc': 'Dashboards que te ajudam a decidir, não só olhar.',
    'hero.highlights.strategy': 'Estratégia com Dados',
    'hero.highlights.strategy.desc': 'Decisões guiadas por lógica, não achismo.',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.intro.title': 'Especialista em Análise de Dados',
    'about.intro.desc': 'Meu trabalho começa onde os relatórios param.',
    'about.description.p1': 'Todos os dias, empresas geram dados — mas nem sempre sabem o que fazer com eles. Meu trabalho começa onde os relatórios param.',
    'about.description.p2': 'Sou analista de dados com foco em resolver problemas reais de negócio. Mais do que entregar dashboards ou automatizar processos, eu crio estrutura para que as decisões certas aconteçam com mais velocidade, menos ruído e muito mais segurança.',
    'about.description.p3': 'Atuo no ponto de fricção entre o caos operacional e a clareza estratégica. Organizo dados, desato nós, e transformo informações dispersas em soluções visuais, práticas e acionáveis.',
    'about.description.p4': 'Meu objetivo não é complicar com gráficos bonitos — é simplificar com inteligência. Se sua empresa está travada em planilhas desorganizadas, sistemas que não conversam ou decisões no escuro, é aí que eu entro.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.skills.excel': 'Excel',
    'about.skills.python': 'Python',
    'about.skills.sql': 'SQL',
    'about.skills.looker': 'Looker',
    'about.skills.ml': 'Machine Learning',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Apresentando soluções orientadas por dados e insights analíticos',
    'projects.viewProject': 'Ver Projeto',
    'projects.viewCode': 'Ver Código',
    'projects.liveDemo': 'Demo Online',
    
    // Apps Section
    'apps.title': 'Apps & Soluções',
    'apps.subtitle': 'Aplicações práticas desenvolvidas para resolver problemas reais do dia a dia empresarial. Cada app é uma solução completa, testada e pronta para usar.',
    'apps.epi.title': 'Controle de EPI',
    'apps.epi.subtitle': 'Sistema completo para gestão de Equipamentos de Proteção Individual. Funciona em navegadores web e dispositivos móveis com controle de entrega, vencimento, conformidade e relatórios automáticos.',
    'apps.epi.available': 'App Disponível Agora',
    'apps.epi.demo': 'Ver Demo Interativa',
    'apps.epi.close': 'Fechar Demo',
    'apps.epi.request': 'Solicitar Demonstração',
    'apps.epi.placeholder': 'Clique em "Ver Demo Interativa" para visualizar o aplicativo funcionando',
    'apps.epi.realtime': 'Hora real do seu dispositivo',
    'apps.epi.tech.title': 'Especificações Técnicas',
    'apps.epi.tech.platform': 'Web & Mobile',
    'apps.epi.tech.platform.desc': 'Acesso via navegador e aplicativo móvel',
    'apps.epi.tech.availability': 'Disponibilidade',
    'apps.epi.tech.availability.desc': 'Funcionamento online e offline',
    'apps.epi.tech.users': 'Usuários Simultâneos',
    'apps.epi.tech.users.desc': 'Plano básico, expansível conforme necessidade',
    'apps.epi.tech.hybrid.title': '💡 Plataforma Híbrida',
    'apps.epi.tech.hybrid.desc': 'Desenvolvido com AppSheet, oferece experiência nativa em dispositivos móveis e acesso completo via navegador web em computadores e tablets.',
    'apps.epi.tech.users.title': '📊 Sobre Usuários:',
    'apps.epi.tech.users.explanation': 'Cadastre quantos funcionários precisar no sistema. O limite de usuários simultâneos refere-se a quantas pessoas podem usar o app ao mesmo tempo, baseado no plano contratado.',
    
    // EPI Features
    'apps.epi.features.control.title': 'Controle Total',
    'apps.epi.features.control.desc': 'Monitore todos os EPIs da empresa em tempo real',
    'apps.epi.features.management.title': 'Gestão de Funcionários',
    'apps.epi.features.management.desc': 'Controle individual por colaborador e setor',
    'apps.epi.features.reports.title': 'Relatórios Automáticos',
    'apps.epi.features.reports.desc': 'Dashboards e relatórios de conformidade instantâneos',
    'apps.epi.features.compliance.title': 'Conformidade NR',
    'apps.epi.features.compliance.desc': 'Garanta 100% de conformidade com as normas regulamentadoras',
    
    // EPI Problem & Solution
    'apps.epi.problem.title': 'O Problema',
    'apps.epi.problem.item1': 'Controle manual de EPIs gera erros e retrabalho',
    'apps.epi.problem.item2': 'Multas por não conformidade com NRs',
    'apps.epi.problem.item3': 'Perda de EPIs e custos desnecessários',
    'apps.epi.problem.item4': 'Relatórios demorados para auditorias',
    
    'apps.epi.solution.title': 'A Solução',
    'apps.epi.solution.item1': 'Redução de 80% no tempo de controle manual',
    'apps.epi.solution.item2': 'Eliminação de 100% das multas por não conformidade',
    'apps.epi.solution.item3': 'Economia estimada de R$ 15.000 a R$ 50.000/ano*',
    'apps.epi.solution.item4': 'Geração automática de relatórios para auditorias',
    'apps.epi.solution.item5': 'Rastreabilidade completa de todos os EPIs',
    'apps.epi.solution.item6': 'Alertas preventivos de vencimento via WhatsApp',
    'apps.epi.solution.disclaimer': '*Economia baseada em: redução de horas administrativas, eliminação de multas, controle de perdas e otimização de compras. Valores variam conforme o porte da empresa.',
    'apps.epi.email.subject': 'Interesse no App de Controle de EPI',
    
    'apps.more': 'Mais apps em desenvolvimento...',
    
    // Contact Section
    'contact.title': 'Cansado de Decidir no Escuro?',
    'contact.subtitle': 'Transforme seus dados bagunçados em vantagem estratégica clara',
    'contact.description': 'Pare de perder tempo com planilhas que mentem, relatórios que ninguém confia e decisões no achismo que custam dinheiro. Eu construo sistemas de dados que realmente te mostram o que está funcionando, o que está falhando e exatamente o que fazer.',
    'contact.cta.main': 'Resolver Meus Problemas de Dados',
    'contact.cta.secondary': 'Mostrar o Que é Possível',
    'contact.value.prop': 'Insights reais que geram resultados reais — sem enrolação, sem gráficos bonitos que não significam nada',
    'contact.cta.title': 'Coloque Seus Dados Para Trabalhar',
    'contact.cta.subtitle': 'Transforme caos em clareza',
    'contact.cta.pain': 'Planilhas espalhadas • Relatórios manuais • Decisões no achismo',
    'contact.cta.primary': 'Resolver Meus Problemas de Dados',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.form.name': 'Seu Nome',
    'contact.form.email': 'Seu Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.social.github': 'GitHub',
    'contact.social.linkedin': 'LinkedIn',
    'contact.social.email': 'Email',
    'contact.connect': 'Conecte-se Comigo',
    'contact.platforms': 'Clique nos ícones acima para se conectar comigo em diferentes plataformas',
    
    // Footer
    'footer.copyright': '© 2024 Thiago Alberto. Todos os direitos reservados.',
    'footer.brand.title': 'Thiago Alberto',
    'footer.brand.subtitle': 'Analista de Dados & Especialista em BI',
    'footer.brand.description': 'Transformando dados em insights',
    'footer.navigation': 'Navegação',
    'footer.services': 'Serviços',
    'footer.services.analysis': 'Análise de Dados',
    'footer.services.bi': 'Business Intelligence',
    'footer.services.dashboard': 'Criação de Dashboards',
    'footer.services.automation': 'Automação de Processos',
    'footer.services.visualization': 'Visualização de Dados',
    'footer.contact': 'Entre em Contato',
    'footer.contact.email': 'thiago.alberto@example.com',
    'footer.contact.available': 'Disponível para projetos freelance',
    'footer.contact.response': 'Tempo de resposta: 24 horas',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.made': 'Feito com',
    'footer.and': 'e',
    'footer.in': 'no Brasil',
  }
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const langTranslations = translations[language];
    return (langTranslations as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { useLanguage, LanguageProvider };
