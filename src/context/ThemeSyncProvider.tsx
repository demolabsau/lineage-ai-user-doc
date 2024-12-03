import React, { useEffect } from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export const ThemeSyncProvider = ({ children }) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    // Sync Docusaurus theme with HTML element
    if (colorMode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode]);

  return <>{children}</>;
};