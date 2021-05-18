const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
import { resolve } from 'path'

/**
 *=== deploy:
 *===   https://javascript.plainenglish.io/deploy-a-nuxtjs-application-to-netlify-9301099d0c28
 *
 *=== electron:
 *===   https://qiita.com/282Haniwa/items/a3b0a7d3c622ad82ac8d
 *===   https://qiita.com/tamfoi/items/0f70bc146344ba5acaee
 *
 *=== alias: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias
 */
export default {
  dev: isDev,
  mode: 'universal',
  router: {
    mode: 'hash',
    // middleware: ['website']
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '畢業DVD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title', content: '畢業DVD' },
      { hid: 'description', name: 'description', content: '畢業光碟' },
      { hid: 'og:description', property: 'og:description', content: '畢業光碟' },
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
      },
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css",
        rel: "stylesheet"
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/mixins/base.scss',
    '~/assets/mixins/font.scss',
    '~/assets/mixins/anime.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/window-resize.js', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],
  redirect: [
    { from: '^/achievement/109y_10school.html', to: '/exhibitions' }
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (!isDev) {
        // absolute path to files on production (default value: '/_nuxt/')
        config.output.publicPath = '_nuxt/'
      }
      config.node = {
        __dirname: !isProduction,
        __filename: !isProduction,
      }
    },
  },
  /* 在哪個路徑產 dist */
  generate: {
    // dir: '../../dist/nuxt-build',
  },
  publicRuntimeConfig: {
    // environment: process.env.ENV || 'HanTing'
  },
  target: 'static'
  // telemetry: false,
}
