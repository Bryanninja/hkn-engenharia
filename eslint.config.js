import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import react from 'eslint-plugin-react'; // <--- Importamos o plugin
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules', '.git'] },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    // Configuração para detectar a versão do React automaticamente
    settings: { react: { version: '18.3' } },
    plugins: {
      react, // <--- Ativamos o plugin
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules, // <--- Regras padrão do React
      ...react.configs['jsx-runtime'].rules, // <--- Permite JSX sem importar 'React'
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Ajuste final: Avisa sobre variáveis não usadas, mas ignora as que começam com _
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],

      // Desliga a validação de Props (chato em projetos modernos com Vite/Simples)
      'react/prop-types': 'off',
    },
  },
  eslintConfigPrettier,
];
