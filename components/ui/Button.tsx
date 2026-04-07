import { forwardRef } from 'react';
import {
  ActivityIndicator,
  Pressable,
  type GestureResponderEvent,
  type PressableProps,
  type View,
} from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Haptics from 'expo-haptics';
import { cn } from '@/lib/utils/cn';
import { Text } from './Text';

const buttonVariants = cva(
  'flex-row items-center justify-center rounded-xl active:opacity-80 disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        secondary: 'bg-surface-elevated border border-border',
        ghost: 'bg-transparent',
        danger: 'bg-danger',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-11 px-4',
        lg: 'h-14 px-6',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

const buttonTextVariants = cva('font-semibold', {
  variants: {
    variant: {
      primary: 'text-primary-foreground',
      secondary: 'text-foreground',
      ghost: 'text-foreground',
      danger: 'text-primary-foreground',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

export interface ButtonProps
  extends Omit<PressableProps, 'style' | 'children'>,
    VariantProps<typeof buttonVariants> {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  haptic?: boolean;
  className?: string;
}

export const Button = forwardRef<View, ButtonProps>(
  (
    { label, variant, size, leftIcon, rightIcon, loading, haptic, className, onPress, disabled, ...props },
    ref,
  ) => {
    const handlePress = async (e: GestureResponderEvent) => {
      if (haptic) {
        try {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } catch {
          // haptics unavailable on web — silent
        }
      }
      onPress?.(e);
    };

    return (
      <Pressable
        ref={ref}
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled || loading, busy: loading }}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
        onPress={handlePress}
        {...props}
      >
        {loading ? <ActivityIndicator /> : leftIcon}
        <Text className={cn(buttonTextVariants({ variant, size }), (leftIcon || loading) && 'ml-2', rightIcon && 'mr-2')}>
          {label}
        </Text>
        {!loading && rightIcon}
      </Pressable>
    );
  },
);
Button.displayName = 'Button';
