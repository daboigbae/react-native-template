import { useTheme } from '../contexts/ThemeContext';

export const useThemeColors = () => {
  const { isDark } = useTheme();

  return {
    // Tailwind classes for styling
    primary: isDark ? 'bg-dark-primary' : 'bg-light-primary',
    secondary: isDark ? 'bg-dark-secondary' : 'bg-light-secondary',
    accent: isDark ? 'bg-dark-accent' : 'bg-light-accent',
    background: isDark ? 'bg-dark-background' : 'bg-light-background',
    surface: isDark ? 'bg-dark-surface' : 'bg-light-surface',
  };
};

export const useThemeHexColors = () => {
  const { isDark } = useTheme();

  return {
    // Hex color values for React Navigation and other components
    primary: isDark ? '#EA2264' : '#6D94C5',
    secondary: isDark ? '#F78D60' : '#E8DFCA',
    accent: isDark ? '#4A0A45' : '#F5EFE6',
    background: isDark ? '#0D1164' : '#F5EFE6',
    surface: isDark ? '#640D5F' : '#ffffff',
    text: isDark ? '#F5EFE6' : '#0D1164',
    textSecondary: isDark ? '#E8DFCA' : '#640D5F',
    border: isDark ? '#640D5F' : '#e5e7eb',
  };
};

export const useThemeTextColors = () => {
  const { isDark } = useTheme();

  return {
    primary: isDark ? 'text-dark-text' : 'text-light-text',
    secondary: isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary',
  };
};

export const useThemeBorderColors = () => {
  const { isDark } = useTheme();

  return {
    primary: isDark ? 'border-dark-primary' : 'border-light-primary',
    secondary: isDark ? 'border-dark-secondary' : 'border-light-secondary',
    accent: isDark ? 'border-dark-accent' : 'border-light-accent',
  };
};
