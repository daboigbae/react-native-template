import { forwardRef } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      display: 'text-4xl leading-tight',
      title: 'text-2xl leading-tight',
      subtitle: 'text-lg leading-snug',
      body: 'text-base leading-normal',
      caption: 'text-sm leading-normal',
      label: 'text-xs uppercase tracking-wide',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted',
      inverse: 'text-background',
      primary: 'text-primary',
      danger: 'text-danger',
      success: 'text-success',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'regular',
    color: 'default',
  },
});

export interface TextProps extends RNTextProps, VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = forwardRef<RNText, TextProps>(
  ({ variant, weight, color, align, className, ...props }, ref) => (
    <RNText
      ref={ref}
      className={cn(textVariants({ variant, weight, color, align }), className)}
      {...props}
    />
  ),
);
Text.displayName = 'Text';
