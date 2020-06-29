module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  parser: 'babel-eslint'
}
