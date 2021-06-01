module.exports = {
  plugins: [
    'user-admin',
		'ui'
  ],
  frontPlugins: [{
    name: 'user-admin',
    version: null,
    load: require('@user-admin/index.js')
  },
	{
    name: 'ui',
    version: null,
    load: require('@ui/index.js')
  }]
};