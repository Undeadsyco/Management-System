module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'default-param-last': 'off',
    'react/forbid-prop-types': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
