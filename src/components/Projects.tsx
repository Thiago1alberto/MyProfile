import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Eye } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified cards animation - only fade and scale
      if (cardsRef.current) {
        gsap.fromTo('.project-card',
          { 
            scale: 0.95,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Controle de EPI",
      description: "Sistema completo para gestão de Equipamentos de Proteção Individual com controle de entrega, vencimento e relatórios automáticos de conformidade.",
      techStack: ["AppSheet", "Google Sheets", "Mobile App", "Automation"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Mobile Application",
      isApp: true
    },
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, KPIs, and regional performance metrics with real-time data integration.",
      techStack: ["Power BI", "SQL Server", "DAX", "Power Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Business Intelligence"
    },
    {
      title: "Financial Expense Tracker",
      description: "Advanced Excel model with VBA automation for tracking expenses, budget forecasting, and financial reporting.",
      techStack: ["Excel", "VBA", "Pivot Tables", "Power Query"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Financial Analysis"
    },
    {
      title: "SQL Query Optimizer",
      description: "Python tool for analyzing and optimizing complex SQL queries, reducing execution time by up to 40%.",
      techStack: ["Python", "SQL", "PostgreSQL", "Performance Tuning"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Database Optimization"
    },
    {
      title: "Automated Reporting System",
      description: "Python-based automation system for generating and distributing daily/weekly reports to stakeholders.",
      techStack: ["Python", "Pandas", "SMTP", "Schedule"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Process Automation"
    },
    {
      title: "Customer Analytics Platform",
      description: "Comprehensive analytics platform using Plotly for visualizing customer behavior, retention, and lifetime value.",
      techStack: ["Python", "Plotly", "Dash", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Customer Analytics"
    },
    {
      title: "Predictive Sales Model",
      description: "Machine learning model for predicting sales trends and inventory optimization using historical data patterns.",
      techStack: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative" style={{background: 'linear-gradient(to bottom, rgb(30 41 59), rgb(25 35 50))'}}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-400"></div>
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
          </div>
          
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group relative glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 border border-slate-700/50 hover:border-blue-400/50"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={40} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Tech Stack */}
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-600 hover:border-blue-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                {project.isApp ? (
                  <Link 
                    to="/apps"
                    className="w-full btn-primary py-4 px-6 flex items-center justify-center gap-3 group"
                  >
                    <Eye size={20} />
                    <span>Ver App Completo</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a 
                    href="https://github.com/Thiago1alberto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary py-4 px-6 flex items-center justify-center gap-3 group"
                  >
                    <Eye size={20} />
                    <span>View on GitHub</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
              
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/apps"
              className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center gap-3"
            >
              <span>Ver Todos os Apps</span>
              <ArrowRight size={20} />
            </Link>
            <a 
              href="https://github.com/Thiago1alberto?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-lg font-semibold inline-block"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;