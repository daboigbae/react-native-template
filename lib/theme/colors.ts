// TS-side mirror of the semantic tokens in tailwind.config.js + global.css.
// Use ONLY for primitives that don't accept className (Image tintColor, SVG fill/stroke).
// Mark every usage with `// inline: <reason>` so audit greps skip the line.
// See standards/react-native/STACK.md rule 8.

export const colors = {
  light: {
    background: 'rgb(255 255 255)',
    foreground: 'rgb(11 11 15)',
    surface: 'rgb(250 250 252)',
    surfaceElevated: 'rgb(255 255 255)',
    muted: 'rgb(113 113 122)',
    border: 'rgb(228 228 231)',
    primary: 'rgb(99 102 241)',
    primaryForeground: 'rgb(255 255 255)',
    accent: 'rgb(168 85 247)',
    success: 'rgb(34 197 94)',
    warning: 'rgb(234 179 8)',
    danger: 'rgb(239 68 68)',
  },
  dark: {
    background: 'rgb(11 11 15)',
    foreground: 'rgb(250 250 252)',
    surface: 'rgb(24 24 27)',
    surfaceElevated: 'rgb(39 39 42)',
    muted: 'rgb(161 161 170)',
    border: 'rgb(39 39 42)',
    primary: 'rgb(129 140 248)',
    primaryForeground: 'rgb(11 11 15)',
    accent: 'rgb(192 132 252)',
    success: 'rgb(74 222 128)',
    warning: 'rgb(250 204 21)',
    danger: 'rgb(248 113 113)',
  },
} as const;

export type ColorScheme = keyof typeof colors;
export type ColorToken = keyof typeof colors.light;
