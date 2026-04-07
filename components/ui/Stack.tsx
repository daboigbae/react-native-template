import { View, type ViewProps } from 'react-native';
import { cn } from '@/lib/utils/cn';

interface StackProps extends ViewProps {
  gap?: number;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
} as const;

// Discrete map required — NativeWind v4 cannot detect dynamically constructed
// class strings (e.g. `gap-${n}`) at build time. Add higher values as needed.
const gapMap: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
};

function buildStack(direction: 'row' | 'col') {
  return ({ gap = 0, align, justify, wrap, className, children, ...rest }: StackProps) => (
    <View
      className={cn(
        direction === 'row' ? 'flex-row' : 'flex-col',
        gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && 'flex-wrap',
        className,
      )}
      {...rest}
    >
      {children}
    </View>
  );
}

export const HStack = buildStack('row');
export const VStack = buildStack('col');
export const Stack = VStack;
