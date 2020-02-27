module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  extends: [
    "react-app",
    "airbnb",
    "prettier"
  ],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/state-in-constructor": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-console": 0,
    "consistent-return": 0
  },
  env: {
    "browser": true
  }
}