// Root layout — providers, theme, splash. Routes never contain providers.
import 'react-native-gesture-handler';
import '@/global.css';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { queryClient } from '@/lib/queries/client';
import { useColorScheme } from 'react-native';
import { vars } from 'nativewind';

SplashScreen.preventAutoHideAsync().catch(() => undefined);

export default function RootLayout() {
  const scheme = useColorScheme();

  useEffect(() => {
    // Hide splash once layout mounts. Real apps wait on fonts/auth bootstrapping.
    SplashScreen.hideAsync().catch(() => undefined);
  }, []);

  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: scheme === 'dark' ? '#0B0B0F' : '#FFFFFF' },
            }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="post/[id]" options={{ headerShown: true, title: 'Post' }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

// Suppress unused — placeholder for future theme vars wiring.
void vars;
