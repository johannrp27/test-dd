module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.jsx',
          '.js',
        ],
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: {
          single: 1,
          multi: 1,
        },
      },
    ],
  },
  settings: {
    react: {
      version: '18',
    },
  },
};
