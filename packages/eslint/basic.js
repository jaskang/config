require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn'
  }
};
