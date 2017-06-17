// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'react-app',
    // 'plugin:jsx-a11y/recommended'
  ]
  // // check if imports actually resolve
  // 'settings': {
  //   'import/resolver': {
  //     'webpack': {
  //       'config': 'build/webpack.base.conf.js'
  //     }
  //   }
  // },
  // // add your custom rules here
  // 'rules': {
  //   'class-methods-use-this': [0],
  //   'space-before-function-paren': [0],
  //   'semi': [0, 'never'],
  //   // allow optionalDependencies
  //   'import/no-extraneous-dependencies': ['error', {
  //     'optionalDependencies': ['test/unit/index.js']
  //   }],
  //   // allow debugger during development
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  // }
}
