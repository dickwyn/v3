module.exports = {
  extends: ['airbnb', 'prettier', 'react-app'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier'],
};
