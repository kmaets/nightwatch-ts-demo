import stylistic from '@stylistic/eslint-plugin';
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: 'latest'
            }
		},
		files: ['tests/**/*.ts'],
		ignores: ['build', 'node_modules'],
		plugins: {
			'@typescript-eslint': tsPlugin,
			'@stylistic': stylistic,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...stylistic.configs['recommended-flat'].rules,
			'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/semi': ['error', 'always'],
			'@typescript-eslint/no-require-imports': 'warn'
			// "no-unused-vars": ['warning',]
		},
	}
];