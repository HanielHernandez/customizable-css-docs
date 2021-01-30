export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "customizable-css-docs",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://myCDN.com/prism@v1.x/themes/prism.css"
      },
      {
        rel: "stylesheet",
        href: "https://myCDN.com/prism@v1.x/themes/prism.css"
      }
    ],
    script: [
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/customizable-css@1.1.2/js/main.js"
      }
    ]
  },

  router: {
    base: "/custom-css/"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css", "~/assets/css/docs.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-instantsearch",
      ssr: true
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "nuxt-content-algolia"],
  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    paths: [
      {
        name: "components",
        index: "components",
        fields: ["title", "description", "tags",'category',"bodyPlainText"]
      },
      {
        name: "forms",
        index: "forms",
        fields: ["title", "description","tags", 'category', "bodyPlainText"]
      },
      {
        name: "layouts",
        index: "layouts",
        fields: ["title", "description","tags",'category', "bodyPlainText"]
      },
      {
        name: "utilities",
        index: "utilities",
        fields: ["title", "description","tags", 'category',"bodyPlainText"]
      }
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/markdownit", "@nuxt/content"],

  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-instantsearch", "instantsearch.js/es"]
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      const removeMd = require('remove-markdown');
      if (document.extension === '.md') {
        document.bodyPlainText = removeMd(document.text);
      }
    },
  },
  privateRuntimeConfig: {
    appId: process.env.ALGOLIA_APP_ID,
    apikey: process.env.ALGOLIA_API_KEY
  }
};
