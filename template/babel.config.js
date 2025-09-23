module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			['module:@react-native/babel-preset', {jsxImportSource: 'nativewind'}],
			'nativewind/babel',
		],
		plugins: [
			'react-native-reanimated/plugin',
		],
	};
};
