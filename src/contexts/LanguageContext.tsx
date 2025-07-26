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
    'hero.role': 'Data Analytics Professional',
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Thiago Alberto',
    'hero.title': 'Data Analyst',
    'hero.subtitle': 'Transforming complex data into actionable insights through advanced analytics and stunning visualizations.',
    'hero.subtitle.highlight1': 'complex data',
    'hero.subtitle.highlight2': 'actionable insights',
    'hero.cta.work': 'View My Work',
    'hero.cta.linkedin': 'Connect on LinkedIn',
    'hero.highlights.analytics': 'Analytics',
    'hero.highlights.analytics.desc': 'Data-driven insights',
    'hero.highlights.visualization': 'Visualization',
    'hero.highlights.visualization.desc': 'Interactive dashboards',
    'hero.highlights.strategy': 'Strategy',
    'hero.highlights.strategy.desc': 'Business intelligence',
    
    // About Section
    'about.title': 'About Me',
    'about.intro.title': 'Data Analytics Specialist',
    'about.intro.desc': 'Passionate about transforming raw data into meaningful business insights',
    'about.description.p1': 'With a strong background in data analytics and business intelligence, I specialize in extracting valuable insights from complex datasets. My expertise spans across multiple tools and programming languages, enabling me to tackle diverse analytical challenges.',
    'about.description.p2': 'I believe in the power of data to drive decision-making and create meaningful impact. Whether it\'s building predictive models, creating interactive dashboards, or performing deep statistical analysis, I\'m passionate about turning data into actionable intelligence.',
    'about.description.p3': 'My approach combines technical expertise with business acumen, ensuring that every analysis not only answers the right questions but also provides clear, actionable recommendations for stakeholders.',
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
    
    // Contact Section
    'contact.title': 'Let\'s Connect',
    'contact.subtitle': 'Ready to transform your data into insights?',
    'contact.description': 'I\'m always interested in discussing new opportunities, collaborating on data projects, or simply talking about the latest trends in analytics. Feel free to reach out!',
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
    'hero.role': 'Profissional de Análise de Dados',
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Thiago Alberto',
    'hero.title': 'Analista de Dados',
    'hero.subtitle': 'Transformando dados complexos em insights acionáveis através de análises avançadas e visualizações impressionantes.',
    'hero.subtitle.highlight1': 'dados complexos',
    'hero.subtitle.highlight2': 'insights acionáveis',
    'hero.cta.work': 'Ver Meu Trabalho',
    'hero.cta.linkedin': 'Conectar no LinkedIn',
    'hero.highlights.analytics': 'Análise',
    'hero.highlights.analytics.desc': 'Insights orientados por dados',
    'hero.highlights.visualization': 'Visualização',
    'hero.highlights.visualization.desc': 'Dashboards interativos',
    'hero.highlights.strategy': 'Estratégia',
    'hero.highlights.strategy.desc': 'Inteligência de negócios',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.intro.title': 'Especialista em Análise de Dados',
    'about.intro.desc': 'Apaixonado por transformar dados brutos em insights significativos para negócios',
    'about.description.p1': 'Com sólida experiência em análise de dados e business intelligence, me especializo em extrair insights valiosos de conjuntos de dados complexos. Minha expertise abrange múltiplas ferramentas e linguagens de programação, permitindo-me enfrentar diversos desafios analíticos.',
    'about.description.p2': 'Acredito no poder dos dados para impulsionar a tomada de decisões e criar impacto significativo. Seja construindo modelos preditivos, criando dashboards interativos ou realizando análises estatísticas profundas, sou apaixonado por transformar dados em inteligência acionável.',
    'about.description.p3': 'Minha abordagem combina expertise técnica com conhecimento empresarial, garantindo que cada análise não apenas responda às perguntas certas, mas também forneça recomendações claras e práticas para os stakeholders.',
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
    
    // Contact Section
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Pronto para transformar seus dados em insights?',
    'contact.description': 'Estou sempre interessado em discutir novas oportunidades, colaborar em projetos de dados ou simplesmente conversar sobre as últimas tendências em análise. Sinta-se à vontade para entrar em contato!',
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
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
