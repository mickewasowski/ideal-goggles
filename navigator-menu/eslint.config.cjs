module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
      ],
      parserOptions: {
        "ecmaFeatures": {
          "jsx": true
        }
      },
      rules: {
        "prettier/prettier": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
      },
      plugins: [
        "react",
        "prettier"
      ]
}