export default {
  buildDir: 'nuxt-dist',
  build: {
    analyze: false,
    analyze: {
      analyzerMode: 'static'
    }
  },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js',
        defer: true
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css'}
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
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