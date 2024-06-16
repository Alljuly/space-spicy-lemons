module.exports = {
  parser: '@typescript-eslint/parser',
  // Substitua "parserOptions" por "languageOptions.parserOptions"
  languageOptions: {
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
    // outras regras personalizadas aqui
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  // Defina suas variáveis globais aqui, se necessário
  globals: {
    React: 'writable'
  }
};
