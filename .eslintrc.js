module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    // "linebreak-style": 0,
    // "jsx-a11y/label-has-associated-control": [ "error", {
    //     "required": {
    //       "some": [ "nesting", "id"  ]
    //     }
    //   }],
    //   "jsx-a11y/label-has-for": [ "error", {
    //     "required": {
    //       "some": [ "nesting", "id"  ]
    //     }
    //   }],
    //   "import/prefer-default-export": "off",
    //   "arrow-parens": "off",
    //   "import/no-named-as-default": 0
  },
};
