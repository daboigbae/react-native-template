// Flat config — extends expo + DAD constitutional bans (Tier 1 rules from STACK.md)
const expo = require('eslint-config-expo/flat');

module.exports = [
  ...expo,
  {
    rules: {
      // No `any`
      '@typescript-eslint/no-explicit-any': 'error',
      // No console.log in app code (transform-remove-console strips them anyway)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Ban legacy Animated, TouchableOpacity, FlatList, SafeAreaView, AsyncStorage
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@react-native-async-storage/async-storage',
              message:
                'AsyncStorage is forbidden for tokens (use expo-secure-store) and for KV (use react-native-mmkv). See STACK.md Tier 1 rule 5.',
            },
          ],
          patterns: [],
        },
        {
          paths: [
            {
              name: 'react-native',
              importNames: ['Animated', 'TouchableOpacity', 'TouchableHighlight', 'FlatList', 'SafeAreaView'],
              message:
                'Banned by DAD STACK.md. Use Reanimated / Pressable / FlashList / useSafeAreaInsets() instead.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['node_modules', 'ios', 'android', '.expo', 'dist'],
  },
];
