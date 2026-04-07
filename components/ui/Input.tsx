import { forwardRef } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { Text } from './Text';

const inputVariants = cva(
  'rounded-xl border text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-surface border-border',
        filled: 'bg-surface-elevated border-transparent',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-14 px-5 text-lg',
      },
      hasError: {
        true: 'border-danger',
        false: '',
      },
    },
    defaultVariants: { variant: 'default', size: 'md', hasError: false },
  },
);

export interface InputProps
  extends Omit<TextInputProps, 'style'>,
    Omit<VariantProps<typeof inputVariants>, 'hasError'> {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
  containerClassName?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, helperText, variant, size, className, containerClassName, ...props }, ref) => (
    <View className={cn('w-full', containerClassName)}>
      {label ? (
        <Text variant="caption" weight="medium" className="mb-1.5">
          {label}
        </Text>
      ) : null}
      <TextInput
        ref={ref}
        accessibilityLabel={label}
        accessibilityState={{ disabled: props.editable === false }}
        placeholderTextColor="rgb(113 113 122)"
        className={cn(inputVariants({ variant, size, hasError: !!error }), className)}
        {...props}
      />
      {error ? (
        <Text variant="caption" color="danger" className="mt-1">
          {error}
        </Text>
      ) : helperText ? (
        <Text variant="caption" color="muted" className="mt-1">
          {helperText}
        </Text>
      ) : null}
    </View>
  ),
);
Input.displayName = 'Input';
