import { useCallback } from 'react';

interface SafeLinkOptions {
  allowedDomains?: string[];
  newTab?: boolean;
}

export const useSafeLink = (options: SafeLinkOptions = {}) => {
  const { 
    allowedDomains = [
      'github.com', 
      'linkedin.com', 
      'appsheet.com',
      'thiagoalberto.dev'
    ],
    newTab = true 
  } = options;

  const openSafeLink = useCallback((url: string) => {
    try {
      const urlObj = new URL(url);
      
      // Check if domain is allowed
      const isAllowed = allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
      );

      if (!isAllowed) {
        console.warn('Blocked attempt to open unsafe URL:', url);
        return;
      }

      // Open link safely
      if (newTab) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
          newWindow.opener = null;
        }
      } else {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Invalid URL:', url, error);
    }
  }, [allowedDomains, newTab]);

  const isValidUrl = useCallback((url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
      );
    } catch {
      return false;
    }
  }, [allowedDomains]);

  return { openSafeLink, isValidUrl };
};
