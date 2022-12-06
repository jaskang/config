module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', require.resolve('./index')],
  settings: {
    react: {
      version: '18.0'
    }
  },
  rules: {}
};
