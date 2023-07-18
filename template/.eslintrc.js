module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
		"jest/globals": true
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended", 
		"plugin:@typescript-eslint/recommended" // Add TypeScript ESLint plugin
	],
	parser: "@typescript-eslint/parser", // Specify the TypeScript parser

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},

	plugins: ["react", "react-native", "detox", "@typescript-eslint"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": ["error"],
		"no-unused-vars": "off", // Disable the default rule for unused variables
		"@typescript-eslint/no-unused-vars": ["error", { vars: "all" }] // Enable TypeScript-specific rule for unused variables

	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
