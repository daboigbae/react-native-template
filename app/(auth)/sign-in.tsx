// Sample form screen — RHF + Zod + FormInput. The route is thin: layout + submit only.
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { SafeScreen, VStack, Text, Button, FormInput } from '@/components/ui';
import { signInSchema, type SignInInput } from '@/lib/validation/auth';
import { useAuthStore } from '@/lib/stores/auth';

export default function SignInScreen() {
  const setUser = useAuthStore((s) => s.setUser);
  const { control, handleSubmit, formState } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (values: SignInInput) => {
    // Stub — wire to a mutation hook in lib/queries/auth/useAuthMutations.ts
    setUser({ id: '1', email: values.email, name: 'Demo User' });
    router.replace('/(tabs)');
  };

  return (
    <SafeScreen scrollable>
      <VStack gap={6} className="flex-1 justify-center">
        <VStack gap={2}>
          <Text variant="display" weight="bold">
            Welcome back
          </Text>
          <Text color="muted">Sign in to continue.</Text>
        </VStack>

        <VStack gap={4}>
          <FormInput
            name="email"
            control={control}
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <FormInput
            name="password"
            control={control}
            label="Password"
            secureTextEntry
            autoComplete="password"
          />
        </VStack>

        <Button
          label="Sign in"
          size="lg"
          haptic
          loading={formState.isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </VStack>
    </SafeScreen>
  );
}
