import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { cn } from '@/lib/utils/cn';

interface SafeScreenProps {
  children: React.ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  statusBarStyle?: 'auto' | 'light' | 'dark';
  scrollable?: boolean;
  padding?: boolean;
  className?: string;
}

export function SafeScreen({
  children,
  edges = ['top', 'bottom'],
  statusBarStyle = 'auto',
  scrollable = false,
  padding = true,
  className,
}: SafeScreenProps) {
  const insets = useSafeAreaInsets();
  const padTop = edges.includes('top') ? insets.top : 0;
  const padBottom = edges.includes('bottom') ? insets.bottom : 0;
  const padLeft = edges.includes('left') ? insets.left : 0;
  const padRight = edges.includes('right') ? insets.right : 0;

  // inline: safe area insets are dynamic at runtime — cannot be expressed in className
  const insetStyle = {
    paddingTop: padTop,
    paddingBottom: padBottom,
    paddingLeft: padLeft,
    paddingRight: padRight,
  };

  const Wrapper = scrollable ? KeyboardAwareScrollView : View;

  return (
    <View className={cn('flex-1 bg-background', className)} style={insetStyle}>
      <StatusBar style={statusBarStyle} />
      <Wrapper
        {...(scrollable
          ? { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: 'handled' as const }
          : { className: 'flex-1' })}
      >
        <View className={cn('flex-1', padding && 'px-4')}>{children}</View>
      </Wrapper>
    </View>
  );
}
