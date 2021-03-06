module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // possible errors
    'no-extra-parens': 2,

    // es6
    'no-var': 2,

    // best practice
    'curly': 2,
    'eqeqeq': 2,

    // rules
    'no-shadow-restricted-names': 2,

    // style
    'array-bracket-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-dangle': 2,
    'comma-spacing': 2,
    'eol-last': 2,
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'key-spacing': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, 'single'],
    'semi-spacing': 2,
    'semi': [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
  }
};
