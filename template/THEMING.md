# 🎨 Theming System

This React Native template includes a comprehensive theming system with pastel colors for light mode and neon colors for dark mode.

## 🌈 Color Palette

### Light Mode (Pastel Colors)
- **Primary**: Soft blue tones (`#f0f9ff` to `#0c4a6e`)
- **Secondary**: Gentle purple tones (`#fdf4ff` to `#701a75`)
- **Accent**: Fresh green tones (`#f0fdf4` to `#14532d`)
- **Neutral**: Warm gray tones (`#f8fafc` to `#0f172a`)

### Dark Mode (Neon Colors)
- **Primary**: Cyan neon (`#00ffff` with dark backgrounds)
- **Secondary**: Magenta neon (`#ff00ff` with dark backgrounds)
- **Accent**: Green neon (`#00ff00` with dark backgrounds)
- **Neutral**: Dark gray tones (`#0a0a0a` to `#9a9a9a`)

## 🚀 Usage

### Basic Theme Usage

```tsx
import { useTheme } from './src/contexts/ThemeContext';
import { useThemeColors, useThemeTextColors } from './src/hooks/useThemeColors';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();

  return (
    <View className={`${colors.background} flex-1`}>
      <Text className={textColors.primary}>
        Hello World
      </Text>
      <View className={`${colors.primary[500]} p-4 rounded-lg`}>
        <Text className={textColors.primary}>
          Primary Button
        </Text>
      </View>
    </View>
  );
}
```

### Theme Toggle

```tsx
import { ThemeToggle } from './src/components/ThemeToggle';

function MyScreen() {
  return (
    <View>
      <ThemeToggle />
    </View>
  );
}
```

### Customizing Colors

To customize the color palette, edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            // Your custom pastel colors
            500: '#your-color',
          },
        },
        dark: {
          primary: {
            // Your custom neon colors
            500: '#your-neon-color',
          },
        },
      },
    },
  },
}
```

## 🎯 Available Hooks

### `useTheme()`
Returns theme state and controls:
- `theme`: Current theme ('light' | 'dark')
- `themeMode`: Current mode ('light' | 'dark' | 'system')
- `setThemeMode()`: Set specific theme mode
- `toggleTheme()`: Cycle through themes
- `isDark`: Boolean for dark mode
- `isLight`: Boolean for light mode

### `useThemeColors()`
Returns background color classes:
- `primary[50-900]`: Primary color variants
- `secondary[50-900]`: Secondary color variants
- `accent[50-900]`: Accent color variants
- `neutral[50-900]`: Neutral color variants
- `background`: Main background color
- `surface`: Surface/card background color

### `useThemeTextColors()`
Returns text color classes:
- `primary`: Primary text color
- `secondary`: Secondary text color
- `primaryText[50-900]`: Primary color text variants
- `secondaryText[50-900]`: Secondary color text variants

## 🔧 Customization

### Adding New Color Schemes

1. Add colors to `tailwind.config.js`
2. Update `useThemeColors.ts` hook
3. Add new theme modes to `ThemeContext.tsx`

### Creating Theme-Aware Components

```tsx
import { useThemeColors, useThemeTextColors } from './src/hooks/useThemeColors';

function ThemedButton({ children, variant = 'primary' }) {
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  
  const variantClasses = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    accent: colors.accent[500],
  };

  return (
    <TouchableOpacity className={`${variantClasses[variant]} p-4 rounded-lg`}>
      <Text className={textColors.primary}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
```

## 📱 Features

- ✅ Automatic system theme detection
- ✅ Manual theme switching
- ✅ Smooth theme transitions
- ✅ TypeScript support
- ✅ Easy customization
- ✅ Consistent color naming
- ✅ Semantic color tokens
- ✅ Dark/Light mode optimized

## 🎨 Design Principles

- **Light Mode**: Soft, pastel colors for comfortable viewing
- **Dark Mode**: Vibrant neon colors for high contrast
- **Consistency**: Same color structure across themes
- **Accessibility**: High contrast ratios for readability
- **Flexibility**: Easy to customize and extend
