import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [imageError, setImageError] = useState({ usa: false, brazil: false });

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
  };

  const handleImageError = (country: 'usa' | 'brazil') => {
    setImageError(prev => ({ ...prev, [country]: true }));
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleLanguage}
        className="relative w-16 h-8 bg-gray-800/80 rounded-full p-1 transition-all duration-300 hover:bg-gray-700/90 border border-gray-600/50 hover:border-gray-500/70 shadow-lg hover:shadow-xl group"
        aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
      >
        {/* Background track with gradient */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-green-500/20 group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all duration-300" />
        
        {/* Moving toggle with enhanced styling */}
        <div
          className={`relative w-6 h-6 rounded-full bg-white shadow-xl transition-all duration-500 ease-out flex items-center justify-center border-2 ${
            language === 'pt' 
              ? 'translate-x-8 shadow-green-400/40 border-green-200' 
              : 'translate-x-0 shadow-blue-400/40 border-blue-200'
          }`}
          style={{
            transform: language === 'pt' ? 'translateX(32px)' : 'translateX(0px)',
            boxShadow: language === 'pt' 
              ? '0 4px 16px rgba(34, 197, 94, 0.4), 0 0 0 3px rgba(34, 197, 94, 0.1)' 
              : '0 4px 16px rgba(59, 130, 246, 0.4), 0 0 0 3px rgba(59, 130, 246, 0.1)'
          }}
        >
          {/* Flag icons with SVG fallback */}
          {language === 'en' ? (
            // US Flag
            <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-gray-200/50 shadow-sm">
              {!imageError.usa ? (
                <img 
                  src="/flags/usa.svg" 
                  alt="USA Flag"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('usa')}
                />
              ) : (
                // Simplified US Flag
                <div className="w-full h-full relative bg-red-600">
                  <div className="absolute top-0 left-0 w-2/5 h-1/2 bg-blue-800"></div>
                  <div className="absolute top-0 left-2/5 right-0 h-[14%] bg-white"></div>
                  <div className="absolute top-[28%] left-2/5 right-0 h-[14%] bg-white"></div>
                  <div className="absolute bottom-[14%] left-0 right-0 h-[14%] bg-white"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[14%] bg-white"></div>
                </div>
              )}
            </div>
          ) : (
            // Brazil Flag
            <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-gray-200/50 shadow-sm">
              {!imageError.brazil ? (
                <img 
                  src="/flags/brazil.svg" 
                  alt="Brazil Flag"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('brazil')}
                />
              ) : (
                // Simplified Brazil Flag
                <div className="w-full h-full relative bg-green-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-2 bg-yellow-400 transform rotate-45"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -mt-0.5 -ml-0.5 bg-blue-700 rounded-full"></div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Subtle glow effect */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          language === 'pt' 
            ? 'bg-green-400/10 opacity-100' 
            : 'bg-blue-400/10 opacity-100'
        }`} />
      </button>
    </div>
  );
};

export default LanguageToggle;
