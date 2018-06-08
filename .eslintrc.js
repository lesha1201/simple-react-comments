module.exports = {
   env: {
      browser: true,
      es6: true
   },
   extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
   parser: 'babel-eslint',
   parserOptions: {
      ecmaFeatures: {
         experimentalObjectRestSpread: true,
         jsx: true
      },
      sourceType: 'module'
   },
   plugins: ['prettier', 'react'],
   rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'windows'],
      semi: ['error', 'always']
   }
};
