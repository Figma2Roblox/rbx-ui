// @ts-check
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginNoAutofix from 'eslint-plugin-no-autofix';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	eslintPluginNoAutofix,
	{
		rules: {
			'prettier/prettier': 'warn',
			'@typescript-eslint/no-floating-promises': [
				'error',
				{ ignoreVoid: true },
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				},
			],
		},
		plugins: {
			'prettier': eslintPluginPrettier,
			'simple-import-sort': eslintPluginSimpleImportSort,
		}
	}
);