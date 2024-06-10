module.exports = {
	root: true,
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended", // Add TypeScript ESLint plugin
	],
	parser: "@typescript-eslint/parser", // Specify the TypeScript parser

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},

	plugins: [
		"react",
		"react-native",
		"@typescript-eslint",
		"simple-import-sort",
	],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		], // handles proper indentation for switch cases
		"linebreak-style": ["error", "unix"], // to ensure all line breaks are consistent
		quotes: ["error", "double"], // to ensure all strings are consistently wrapped with double quotes
		semi: ["error", "always"], // to make sure that all statements are terminated with a semicolon
		"no-console": ["error"], // to reduce the number of console.log statements in the code
		"comma-dangle": [
			// ensuring that all arrays, objects, imports, and exports are consistent
			"error",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "never",
			},
		],
		"simple-import-sort/imports": "error", // to ensure that all imports are sorted alphabetically and grouped
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "after-used",
				ignoreRestSiblings: true,
			},
		],
	},
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
			rules: {
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// Packages `react` related packages come first.
							["^react"],
							// Packages `@` related packages come second.
							["^@?\\w"],
							// Internal packages.
							[
								"^(@|@api|@assets|@components|@hooks|@navigation|@redux|@screens|@utils)(/.*|$)",
							],
							// Other relative imports. Put same-folder imports and `.` last.
							[
								"^\\.\\.(?!/?$)",
								"^\\.\\./?$",
								"^\\./(?=.*/)(?!/?$)",
								"^\\.(?!/?$)",
								"^\\./?$",
							],
						],
					},
				],
			},
		},
	],
};
