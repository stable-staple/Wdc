export default {
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
    link: [
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css'}
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ]
  },
  plugins: ['~/plugins/vue-swiper.js']
}