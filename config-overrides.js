/* config-overrides.js */
const { compose } = require('react-app-rewired')
const rewireEsLit = require('react-app-rewire-eslint')
const rewirePofyffils = require('react-app-rewire-polyfills')

module.exports = compose(
  rewireEsLit,
  rewirePofyffils
)
