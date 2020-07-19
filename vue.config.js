module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#722ED1'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
