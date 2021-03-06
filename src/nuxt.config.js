const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CALUMOZ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Calumoz is a Money Management Online' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    vendor: [
      '@/plugins/firebase-client-init.js',
      'jquery','bootstrap','popper.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'CALUMOZ',
    lang: 'en'
  },
  css: ['bootstrap/dist/css/bootstrap.css'],
  plugins: [
    {src: '@/plugins/firebase-client-init.js' , ssr: false},
    {src: '@/plugins/auth-cookie.js', ssr: false}
  ],
  serverMiddleware: [
    '~/serverMiddleware/validateFirebaseIdToken'
  ]
}
