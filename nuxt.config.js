require('dotenv').config()
const { API_KEY, API_POSTS_ENDPOINT, API_CLUBS_ENDPOINT } = process.env;

export default {
  privateRuntimeConfig: {
    apiKey: API_KEY,
    postsEndpoint: API_POSTS_ENDPOINT,
    clubsEndpoint: API_CLUBS_ENDPOINT,
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
      },
    ],
  },
  srcDir: 'src/',
  generate: {
    fallback: true,
  },
  router: {
    trailingSlash: true,
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/bootstrap-custom/scss/bootstrap.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    // Docs:https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
    // ['@nuxtjs/google-tag-manager', {
    //   id: 'GTM-XXXXXXX',
    //   pageTracking: true
    // }],
  ],
  gtm: {
    id: process.env.GTM_ID,
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP'],
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' },
      },
    },
  },
}
