// eslint-disable-next-line no-undef
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  pwa: {
    name: 'Autoscriber',
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    },
    workboxOptions: {
      skipWaiting: true
    }
  }
};
