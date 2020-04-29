module.exports = {
  extends: ['airbnb', 'prettier', 'react-app', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-parens': 'always',
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier'],
};
