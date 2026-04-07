// IMPORTANT: react-native-reanimated/plugin must be LAST in the plugins array.
// See platform-knowledge/react-native/topics/19-gotchas.md
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      // strip console.* in production builds (keeps error/warn)
      ['transform-remove-console', { exclude: ['error', 'warn'] }],
      // MUST be last
      'react-native-reanimated/plugin',
    ],
  };
};
