module.exports = {
  plugins: [
    'ui'
  ],
  frontPlugins: [{
    name: 'ui',
    version: null,
    load: require('@ui/index.js')
  }]
};