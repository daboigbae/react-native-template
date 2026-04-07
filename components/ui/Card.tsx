import { forwardRef } from 'react';
import { Pressable, View, type PressableProps, type ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

// iOS shadow + Android elevation pair lives in className via NativeWind utilities.
// See topic 17 for the platform-parity gotcha.
const cardVariants = cva('rounded-2xl bg-surface', {
  variants: {
    variant: {
      default: '',
      elevated: 'shadow-md shadow-black/10 elevation-md',
      outlined: 'border border-border',
    },
    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },
  },
  defaultVariants: { variant: 'default', padding: 'md' },
});

interface CardOwnProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export type CardProps = CardOwnProps & Omit<ViewProps, 'style'> & Omit<PressableProps, 'style' | 'children'>;

export const Card = forwardRef<View, CardProps>(
  ({ children, variant, padding, className, onPress, ...props }, ref) => {
    const cls = cn(cardVariants({ variant, padding }), className);
    if (onPress) {
      return (
        <Pressable ref={ref} onPress={onPress} accessibilityRole="button" className={cls} {...(props as PressableProps)}>
          {children}
        </Pressable>
      );
    }
    return (
      <View ref={ref} className={cls} {...(props as ViewProps)}>
        {children}
      </View>
    );
  },
);
Card.displayName = 'Card';
