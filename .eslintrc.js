module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "react",
  ],
  "rules": {
    'react/react-in-jsx-scope': 'off',
    "react/prop-types": "off",
  },
  "settings": {
    "react": {
      "version": 'detect',
    },
  },
  "ignorePatterns": ["main.js", "node_modules/"],
}
