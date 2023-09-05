import colors from "vuetify/es5/util/colors.js"

export default {
  env: { NODE_ENV: "dev" },
  repo: "IEA-Paris/PFIAS",
  name: "PFIAS",
  domain: "france", //> france.pias.science
  full_name: "Proceedings of the French Institutes for Advanced Study", // set to false if there is none
  full_name_html:
    "Proceedings of the French&nbsp;Institutes<br>for Advanced&nbsp;Study", // set to false if there is none
  address: "17, Quai d'Anjou 75004 PARIS - FRANCE",
  phone: "+33(0)1 56 81 00 52",
  email: "publications@paris-iea.fr",
  subtitle: "Open source publishing platform for open science.",
  logo: "icon.png",
  description: "Open source publishing platform for open science.",
  splash_title: "Open source publishing platform for open science.",
  recaptcha: "6Lc_xuUUAAAAALwowUq0cC0wFtFnZ2NCi3UH4i1j",
  acm_certificate_arn:
    "arn:aws:acm:us-east-1:720928668014:certificate/af936a71-516a-40fc-8187-121807242a41",
  location: {
    origin:
      "https://www.openstreetmap.org/export/embed.html?bbox=2.356580793857575%2C48.850586483414915%2C2.361644804477692%2C48.85278204589751&amp;layer=mapnik&amp;marker=48.851684276691216%2C2.359112799167633",
    target:
      "https://www.openstreetmap.org/?mlat=48.85168&amp;mlon=2.35911#map=19/48.85168/2.35911",
  },
  // graphqlEndpoint:
  //   'https://mz3e6z5nlngvdls3zh3possona.appsync-api.eu-west-2.amazonaws.com/graphql',
  // graphqlApiKey: 'da2-eb5bkfhsvbdz3mexfykmkwjka4',
  keywords: "open source, open science, science, vuejs, nuxt, vuetify, vuex",
  url: "https://france.pias.science",
  lang: {
    default: "en",
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "French",
        file: "fr.json",
        dir: "ltr",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],
  },
  // TODO declare the features that should be enabled to customize the website & enforce them
  features: {
    generate: {
      pdf: true,
      thumbnails: true,
      tableOfContent: true,
      bibliography: true,
    },
    disseminate: {
      Zenodo: false,
    },
  },
  theme: {
    loading: "red",
    dark: false,
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#2196f3",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  identifier: {
    ISSN: "2826-2832",
  },
  modules: {
    sentry: {
      dsn: "https://a329c0ed448543d098d4c1956b6bffb4@sentry.paris-ias.io/13",
    },
    ackee: {
      domain: "cfe2c3ce-f188-4b37-807a-f3839a49e040",
      server: "https://ackee.paris-ias.io/",
    },
    zenodo: {
      token: process.env.ZENODO_TOKEN,
      sandboxToken: process.env.ZENODO_SANDBOX_TOKEN,
      sandbox: true,
      community: "proceedings-of-the-insitutes-for-advanced-studies",
    },
    image: {
      domains: [
        "https://picsum.photos",
        // snipcart.nuxtjs.org',
        "source.unsplash.com",
      ],
    },
    deepl: {
      key: process.env.DEEPL_KEY,
    },
    fonts: {
      families: {
        "Bodoni Moda": [500, 700],
        "Open Sans": [500, 700],
      },
    },
    bibliography: {
      defaultStyle: "APA",
      styles: [],
    },
  },
}
