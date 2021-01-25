export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'customizable-css-docs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel:'stylesheet', href:'https://myCDN.com/prism@v1.x/themes/prism.css'},

    ],
    script:[
      {  src:'/js/main.js'}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src:    '~/plugins/vue-instantsearch'      ,ssr: false
    }
  ], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxt/content'

  ],
  // Nuxt content algolia
  nuxtContentAlgolia:{
    appId: process.env.ALLGOLLIA_APP_ID,
    apiKey: process.env.ALLGOLLIA_API_KEY,
    paths:[
      {
        name:'documentation',
        index:'docs',
        field:['title','description','bodyPlainText']
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:['vue-isntantsearch','instantsearch.js/es']
  },
  hooks:{
    'content:file:beforeInsert':(document)=>
    {
      const removeMd = require('remove-markdown');
      if(document.extension === 'md'){
        document.bodyPlainText = removeMd(document.text)
      }
    
    }
  }
}
