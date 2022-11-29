export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  //server: {     
    //port: 8000, // default: 3000     
   // host: '0.0.0.0', // default: localhost   
 // },  
  head: {
    title: 'Edu-Stream',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=-100vw' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    menpm: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-compress',
    //'@nuxt/image',
    '@nuxt/postcss8',
    /*'@nuxtjs/google-fonts',
    {
      families: {
        Montserrat: {
          wght: [300, 400, 500, 600, 700, 800, 900],
        },
      },
      display: 'swap'
    },*/
    //'@nuxtjs/eslint-module',
  ],
  'nuxt-compress': {
    brotli: {
      threshold: 8192,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    //'nuxt-compress',
    
  ],
  /*'nuxt-compress': {
    brotli: {
      threshold: 8192,
    },
  },*/
  bootstrapVue: {
    icons: true
  },
  i18n: {
    locales: ['de','en', 'ru'],
    baseUrl: '',
    langDir:'~/locales/',
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        file:'de.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        file:'en.json'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file:'ru.json'
      },
    ],
    defaultLocale: 'de',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        de: {
          welcome: 'Bienvenue'
        },
        ru: {
          welcome: 'Bienvenido'
        }
      }
    }    /* module options */
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  plugins: [{ src: '~plugins/vue-carousel', ssr: false }]
}
