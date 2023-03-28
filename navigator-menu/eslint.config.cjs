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
        },
        "sourceType": "module",
        "ecmaVersion": "latest",
      },
      settings: {
        "react": {
          "version": "detect"
        },
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx"],
            "moduleDirectory": ["node_modules", "src"]
          }
        }
      },
      env: {
        "browser": true,
        "es2021": true,
      },
      rules: {
        "prettier/prettier": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "off"
      },
      plugins: [
        "react",
        "prettier"
      ]
}