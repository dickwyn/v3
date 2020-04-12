module.exports = {
  extends: ['airbnb', 'prettier', 'react-app'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 'off',
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier'],
};
