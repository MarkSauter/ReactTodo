module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true,
  },
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    },
  },
  "installedESLint": true,
  "globals": {
    "React": true,
  },
  "plugins": [
    "no-inferred-method-name",
    "react",
  ],
  "rules": {
    "semi": 2,
    "linebreak-style": [
      "error",
      "windows",
    ],
    "require-jsdoc": ["error", {
      "require": {
          "FunctionDeclaration": false,
          "MethodDefinition": false,
          "ClassDeclaration": false,
      },
    }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false,
    }],
  }
};
