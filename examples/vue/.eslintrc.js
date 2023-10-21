/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['rascal/vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['demo']
      }
    ]
  }
};
