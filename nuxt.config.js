export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/variables.scss',
    '~/assets/scss/helpers.scss',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/scss/page.scss',
    '~/assets/scss/ui-components.scss',
    '~/assets/scss/external-components.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/composition-api.ts',
    '@/plugins/global.ts',
    '@/plugins/mirage.ts',
    '@/plugins/wysiwyg.ts'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // '@nuxtjs/pwa'
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {}
}
