<template lang="pug">
  .about-us
    .about-us__content
      .textgroup--mobile-controls
        span.textgroup--mobile__title {{ slides[currentSlide].title }}
        .special-offers__controls
          button.swipe-button.swiper-button--prev(@click='prevSlide' :disabled="currentSlide == 0")
            svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
              circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
              path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
          button.swipe-button.swiper-button--next(@click='nextSlide' :disabled="currentSlide == 3")
            svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
              circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
              path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
      .textgroup(:class="{'textgroup--fade': contentTransition}")
        h3.primary_heading.textgroup__title {{ slides[currentSlide].title }}
        p.textgroup__text.card_desc {{ slides[currentSlide].desc }}
      .about-us__controls
        button.swipe-button(@click='prevSlide' :disabled='currentSlide === 0')
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none')
            circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
            path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
        button.swipe-button(@click='nextSlide' :disabled='currentSlide >= 3')
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none')
            circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
            path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
    .about-us__img
      //- Preload image
      img(src='img/about_us/about_us.jpg' style="display: none;")
      img(src='img/about_us/about_us2.jpg' style="display: none;")
      img(src='img/about_us/about_us3.jpg' style="display: none;")
      img(src='img/about_us/about_us4.jpg' style="display: none;")
      img.about-us__img__inner(
        width="726"
        height="635"
        :src='slides[currentSlide].imgUrl' 
        @click="gallery.settings.startAt = currentSlide; gallery.open();"
        :key='currentSlide'
      ) 
      .about-us__img-overlay(:class="{'about-us__img-overlay--scaled': contentTransition}")
    .textgroup--mobile(:class="{'textgroup--fade': contentTransition}" style="height:115px;")
      p.textgroup__text.textgroup--mobile__text.card_desc(
        style="margin-bottom: 0;"
        :key="currentSlide"
        ) {{ slides[currentSlide].desc }}
</template>

<script>
  export default {
    data() {
      return {
        isStart: true,
        isEnd: false,
        contentTransition: false,
        currentSlide: 0,
        gallery: null,
        slides: [
          {
            title: "Современные технологии",
            desc: "В своей работе мы используем только лучшие технологии проверенных производителей, \
                  которые ускоряют работу и помогают добиться наилучших результатов лечения ",
            imgUrl: '/img/about_us/about_us.jpg'
          },
          {
            title: "Ответственный подход",
            desc: "Перед каждой процедурой проводится консультация и предварительный осмотр \
                  для того, чтобы лечение вышло наиболее эффективным",
            imgUrl: '/img/about_us/about_us2.jpg'
          },
          {
            title: "Комфортное лечение",
            desc: "Лечение в нашей клинике проходит быстро и безболезненно. Мы заботимся о том, \
                  чтобы у наших пациентов оставались только положительные впечатления от приема",
            imgUrl: '/img/about_us/about_us3.jpg'
          },
          {
            title: "Уютная атмосфера",
            desc: "Мы стараемся сделать все для того, чтобы нахождение в нашей стоматологии \
                      оставляло ощущение домашнего уюта и дружелюбия",
            imgUrl: '/img/about_us/about_us4.jpg'
          }
        ]
      }
    },
    methods: {
      nextSlide: function () {
        if (this.contentTransition === true || this.currentSlide >= 3)
          return false;
        this.contentTransition = true;
        setTimeout(() => this.currentSlide++, 500);
        setTimeout(() => this.contentTransition = false, 1000);
      },
      prevSlide: function () {
        if (this.contentTransition === true || this.currentSlide <= 0)
          return false;
        this.contentTransition = true;
        setTimeout(() => this.currentSlide--, 500);
        setTimeout(() => this.contentTransition = false, 1000);
      }
    },
    mounted() {
      const Gallery = require('glightbox');

      this.gallery = new Gallery({
        elements: [
            {
                'href': '/img/about_us/about_us.jpg',
                'type': 'image'
            },
            {
                'href': '/img/about_us/about_us2.jpg',
                'type': 'image'
            },
            {
                'href': '/img/about_us/about_us3.jpg',
                'type': 'image'
            },
            {
                'href': '/img/about_us/about_us4.jpg',
                'type': 'image'
            }
        ]
      })
    }
  }
</script>

<style lang="scss">
  @import "~/assets/scss/components/textgroup.scss";

  .about-us {
    position: relative;
    padding: 96px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .about-us__content {
    opacity: 1;
    padding-right: 129px;
    max-width: 459px;
    overflow: hidden;
    height: 100%;
  }

  .about-us__img {
    position: relative;
    border-radius: 10px;
  }

  .about-us__img__inner {
    height: auto;
    position: relative;
    border-radius: 6px;
    display: block;
    cursor: url('~assets/img/cursor_plus.svg'), auto;
    max-width: 100%;
    z-index: 1;
  }

  .about-us__img-overlay {
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #FFFFFF;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms;
    border-radius: 6px;
  }

  .about-us__img-overlay--scaled {
    animation-name: overlap;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    transform-origin: top;
  }

  @keyframes overlap {
    from {
      transform: scale3d(1, 0, 1);
      transform-origin: top;
    }
    50% {
      transform: scale3d(1, 1, 1);
      transform-origin: top;
    }
    50.000001% {
      transform-origin: bottom;
    }
    to {
      transform-origin: bottom;
      transform: scale3d(1, 0 1);
    }
  }

  @media only screen and (max-width: 768px) {
    .about-us {
      display: block;
    }

    .about-us__content {
      max-width: 480px;
      padding-right: 0;
    }

    .textgroup__title {
      font-size: 24px;
    }

    .textgroup__text {
      width: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .about-us__controls {
      display: none;
    }

    .about-us {
      padding: 40px 0;
    }

    .about-us__img {
      margin-bottom: 20px;
    }

    .about-us__content {
      max-width: initial;
      width: 100%;
    }

    .about-us__img__inner {
    }
  }
</style>