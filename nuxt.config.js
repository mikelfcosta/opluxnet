module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'opLUXXnet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Projeto opLUXXnet' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  plugins: ['~plugins/bootstrap-vue', '~plugins/vue-social-sharing'],
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' },
    { src: '~assets/css/font-awesome.scss', lang: 'scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'bootstrap-vue', 'vue-social-sharing'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
