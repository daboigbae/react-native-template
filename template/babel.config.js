module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./"],
				alias: {
					"@api": "./src/api",
					"@screens": "./src/screens",
					"@components": "./src/components",
					"@navigation": "./src/navigation",
					"@redux": "./src/redux",
					"@assets": "./src/assets",
					"@hooks": "./src/hooks",
					"@utils": "./src/utils",
				},
			},
		],
		"@babel/plugin-proposal-export-namespace-from",
		"nativewind/babel",
		"react-native-reanimated/plugin",
	],
};
