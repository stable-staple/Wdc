export default {
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0})
    }
  },
  buildDir: 'nuxt-dist',
  // build: {
  //   analyze: false,
  //   analyze: {
  //     analyzerMode: 'static'
  //   }
  // },
  head: {
    title: 'Wdc Dent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],  
    script: [{src: 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js', defer: true}],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css'},
      { rel: 'preconnect', href: 'https://api.mapbox.com', crossorigin: true }
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false
  },
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ]
  },
  plugins: [
    { ssr: true, src: '~/plugins/vue-swiper.js' }
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'font') return /.woff2/.test(file)
      }
    }
  }
}