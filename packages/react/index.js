module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'rascal-ts'],
  settings: {
    react: {
      version: 'detect' // 确保ESLint规则与项目中使用的React版本保持一致
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
