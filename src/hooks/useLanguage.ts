import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// Hook customizado isolado para resolver Fast Refresh warning
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
