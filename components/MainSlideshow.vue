<template lang="pug">
  .main-slideshow
    .main-slideshow__backdrop.full-bleed
      swiper(ref="mainSwiper" class="main-slideshow__slides" :options="swiperOptions")
        swiper-slide(class="main-slide")
          div.main-slide__inner
        swiper-slide(class="main-slide")
          div.main-slide__inner(
            style="background-image:url('https://pp.userapi.com/c412624/v412624691/4136/_da_uAA6ha8.jpg')"
          )
        swiper-slide(class="main-slide")
          div.main-slide__inner(
            style="background-image:url('https://pp.userapi.com/c637331/v637331691/48f5f/spHnV42iYVw.jpg')"
          )
    .main-slideshow__content
      div(class="main-slideshow__textgroup" :class="{'main-slideshow__textgroup--fade': contentTransition}")
        h1(class="primary_heading main-slideshow__title") {{ textSlides[currentTextSlide].title }}
        p(class="primary_desc main-slideshow__desc") Импланты швейцарского качества с технологией максимальной приживаемости
        button.button--more.main-slideshow__desktop-btn.card_desc Смотреть подробнее
      .main-slideshow__green-implants
        picture
          source(srcset="~assets/img/green_implants_mobile.png" media="(max-width: 768px)")
          img(class="main-slideshow__green-implants__img" src="~assets/img/green_implants.png")
      .main-slideshow__mobile-btn-container
        button.button--more.main-slideshow__mobile-btn.card_desc Смотреть подробнее
      .main-slideshow__timers--mobile
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 0}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 1}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 2}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
      .main-slideshow__swipe-controls
        button(
          class="swipe-button swipe-button--dark swiper-button--prev" @click="prevSlide"
          :disabled="currentTextSlide <= 0"
          )
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
            path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
        button(
          class="swipe-button swipe-button--dark swiper-button--next" @click="nextSlide"
          :disabled="isLastSlide"
          )
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
            path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
      .main-slideshow__timers
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 0}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 1}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
        svg.slide-timer(:class="{'slide-timer--active': currentTextSlide === 2}" width='6' height='6' viewbox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='3' cy='3' r='3' fill='white')
      .main-slideshow__social
        a.main-slideshow__social__link(href='#')
          svg(width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            g(clip-path='url(#clip0)')
              path(d='M15.9906 4.70404C15.9531 3.8539 15.8156 3.26944 15.6186 2.76299C15.4154 2.22541 15.1028 1.74412 14.6932 1.34401C14.293 0.937683 13.8085 0.621948 13.277 0.421957C12.7675 0.22502 12.186 0.0875415 11.3357 0.0500586C10.479 0.00940124 10.2071 0 8.03436 0C5.86164 0 5.58969 0.00940124 4.73621 0.0468842C3.8859 0.0843671 3.30132 0.221967 2.7949 0.418783C2.25709 0.621948 1.7757 0.934509 1.37552 1.34401C0.969115 1.74412 0.65344 2.22858 0.453289 2.75994C0.256313 3.26944 0.118808 3.85073 0.0813183 4.70087C0.0406531 5.55736 0.03125 5.82926 0.03125 8.00156C0.03125 10.1739 0.0406531 10.4458 0.0781432 11.2991C0.115633 12.1492 0.25326 12.7337 0.450236 13.2401C0.65344 13.7777 0.969115 14.259 1.37552 14.6591C1.7757 15.0654 2.26027 15.3812 2.79172 15.5812C3.30132 15.7781 3.88272 15.9156 4.73315 15.9531C5.58651 15.9907 5.85859 16 8.03131 16C10.204 16 10.476 15.9907 11.3295 15.9531C12.1798 15.9156 12.7644 15.7781 13.2708 15.5812C14.3463 15.1654 15.1966 14.3153 15.6124 13.2401C15.8092 12.7306 15.9469 12.1492 15.9844 11.2991C16.0218 10.4458 16.0312 10.1739 16.0312 8.00156C16.0312 5.82926 16.0281 5.55736 15.9906 4.70404ZM14.5495 11.2366C14.515 12.018 14.3838 12.4399 14.2743 12.7212C14.0054 13.4183 13.4521 13.9715 12.755 14.2403C12.4736 14.3497 12.0485 14.481 11.27 14.5153C10.4259 14.5529 10.1728 14.5622 8.03754 14.5622C5.90231 14.5622 5.64598 14.5529 4.80496 14.5153C4.0234 14.481 3.60136 14.3497 3.32001 14.2403C2.97307 14.1121 2.65727 13.909 2.40095 13.6433C2.13522 13.3838 1.93201 13.0713 1.80379 12.7244C1.69437 12.4431 1.5631 12.018 1.52878 11.2397C1.49117 10.3958 1.48189 10.1426 1.48189 8.00779C1.48189 5.87297 1.49117 5.6167 1.52878 4.77596C1.5631 3.99455 1.69437 3.5726 1.80379 3.29129C1.93201 2.9443 2.13522 2.62869 2.40412 2.37229C2.6635 2.10661 2.97612 1.90345 3.32318 1.77537C3.60454 1.66597 4.02975 1.53472 4.80813 1.50029C5.65221 1.46281 5.90548 1.45341 8.04059 1.45341C10.179 1.45341 10.4321 1.46281 11.2732 1.50029C12.0547 1.53472 12.4768 1.66597 12.7581 1.77537C13.1051 1.90345 13.4209 2.10661 13.6772 2.37229C13.9429 2.63174 14.1461 2.9443 14.2743 3.29129C14.3838 3.5726 14.515 3.99761 14.5495 4.77596C14.587 5.61987 14.5964 5.87297 14.5964 8.00779C14.5964 10.1426 14.587 10.3927 14.5495 11.2366Z' fill='white')
              path(d='M8.0348 3.89136C5.76524 3.89136 3.92383 5.73229 3.92383 8.00153C3.92383 10.2708 5.76524 12.1117 8.0348 12.1117C10.3045 12.1117 12.1458 10.2708 12.1458 8.00153C12.1458 5.73229 10.3045 3.89136 8.0348 3.89136ZM8.0348 10.6677C6.56243 10.6677 5.36812 9.47375 5.36812 8.00153C5.36812 6.52932 6.56243 5.33536 8.0348 5.33536C9.5073 5.33536 10.7015 6.52932 10.7015 8.00153C10.7015 9.47375 9.5073 10.6677 8.0348 10.6677Z' fill='white')
              path(d='M13.2672 3.72907C13.2672 4.25896 12.8375 4.68861 12.3074 4.68861C11.7774 4.68861 11.3477 4.25896 11.3477 3.72907C11.3477 3.19906 11.7774 2.76953 12.3074 2.76953C12.8375 2.76953 13.2672 3.19906 13.2672 3.72907Z' fill='white')
            defs
              clippath#clip0
                rect(width='16' height='16' fill='white')
        a.main-slideshow__social__link(href='#')
          svg(width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M15.1831 4.25079C15.0103 3.60818 14.5036 3.10162 13.8611 2.92859C12.6873 2.60742 7.992 2.60742 7.992 2.60742C7.992 2.60742 3.2969 2.60742 2.12311 2.91641C1.49295 3.08926 0.973938 3.60828 0.801086 4.25079C0.492188 5.4245 0.492188 7.85861 0.492188 7.85861C0.492188 7.85861 0.492188 10.305 0.801086 11.4664C0.974121 12.1089 1.48059 12.6155 2.1232 12.7885C3.30926 13.1098 7.99219 13.1098 7.99219 13.1098C7.99219 13.1098 12.6873 13.1098 13.8611 12.8008C14.5037 12.6279 15.0103 12.1213 15.1833 11.4788C15.4921 10.305 15.4921 7.87097 15.4921 7.87097C15.4921 7.87097 15.5045 5.4245 15.1831 4.25079ZM6.49713 10.1073V5.60989L10.4015 7.85861L6.49713 10.1073Z' fill='white')
        a.main-slideshow__social__link(href='#')
            svg(width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M13.7551 2.24487C12.3075 0.797219 10.3828 0 8.33553 0C6.28828 0 4.36353 0.797219 2.91587 2.24487C1.46822 3.69253 0.671031 5.61722 0.671031 7.66447C0.671031 8.96131 0.999312 10.2357 1.62244 11.3645L0 16L4.63541 14.3776C5.76428 15.0007 7.03866 15.329 8.3355 15.329C10.3827 15.329 12.3075 14.5317 13.7551 13.0841C15.2028 11.6365 16 9.71175 16 7.66447C16 5.61719 15.2028 3.6925 13.7551 2.24487ZM12.1245 10.5117L11.2397 11.3966C10.5067 12.1296 8.42684 11.2382 6.59431 9.40569C4.76175 7.57312 3.87041 5.49334 4.60344 4.76031L5.48825 3.8755C5.6715 3.69225 5.96863 3.69225 6.15188 3.8755L7.25791 4.98153C7.44116 5.16478 7.44116 5.46191 7.25791 5.64516L6.59428 6.30878C7.238 7.66775 8.33225 8.76197 9.69122 9.40569L10.3548 8.74206C10.5381 8.55881 10.8352 8.55881 11.0185 8.74206L12.1245 9.84809C12.3078 10.0314 12.3078 10.3285 12.1245 10.5117Z' fill='white')
</template>

<script>
  export default {
    data() {
      return {
        contentTransition: false,
        currentTextSlide: 0,
        textSlides: [
          {
            title: "Импланты Straumann",
            desc: "Наша клиника использует импланты проверенных годами компаний",
            img: 'img/main_implants.png'
          },
          {
            title: "Швейцарское качество",
            desc: "Наша клиника использует импланты проверенных годами компаний",
            img: 'img/main_implants.png'
          },
          {
            title: "Швейцарское качество3",
            desc: "Наша клиника использует импланты проверенных годами компаний",
            img: 'img/main_implants.png'
          }
        ],
        swiperOptions: {
          speed: 1000,
          watchSlidesProgress: true,
          grab: true,
          on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * 0.8;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".main-slide__inner").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".main-slide__inner").style.transition =
                  speed + "ms";
              }
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mainSwiper.$swiper
      },
      isLastSlide: function() {
        return this.currentTextSlide >= this.textSlides.length - 1;
      }
    },
    methods: {
      nextSlide: function () {
        if (this.contentTransition === true || this.currentTextSlide >= this.swiper.slides.length - 1 || this.swiper.animating)
          return false;
        this.contentTransition = true;
        this.swiper.slideNext();
        setTimeout(() => this.currentTextSlide++, 500);
        setTimeout(() => this.contentTransition = false, 1000);
      },
      prevSlide: function () {
        if (this.contentTransition === true || this.currentTextSlide <= 0 || this.swiper.animating)
          return false;
        this.contentTransition = true;
        this.swiper.slidePrev();
        setTimeout(() => this.currentTextSlide--, 500);
        setTimeout(() => this.contentTransition = false, 1000);
      }
    }
  }
</script>

<style lang="scss">
  .main-slideshow {
    display: flex;
    position: relative;
    height: 738px;
  }

  .main-slideshow__slides {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  .main-slide {
    overflow: hidden;
  }

  .main-slide__inner {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    background-position: center;
    background-color: $primary-black;
  }

  .main-slideshow__content {
    display: flex;
    width: 100%;
    background-color: transparent;
    z-index: 1;
    position: relative;
    bottom: 60px;
    height: 549px;
    align-self: center;
  }

  .main-slideshow__mobile-btn {
    display: none;
    width: 100%;
  }

  .main-slideshow__mobile-btn-container {
    text-align: center;
    margin-bottom: 24px;
  }

  .main-slideshow__textgroup {
    position: relative;
    align-self: center;
    width: 400px;
    height: 260px;
    color: white;
    margin-left: 70px;
    margin-right: 124px;
    bottom: 14px;

    & > * {
      margin: 0;
    }

    & > p {
      color: #FFFFFF;
      opacity: 0.72;
    }

    &--fade {
      transform: translateY(50px);
      opacity: 0;
      transition-duration: 0.5s, 0.5s;
      transition-property: opacity, transform;
      animation-name: textgroupFade;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
      animation-duration: 0.5s;
    }
  }

  .main-slideshow__title {
    margin-bottom: 24px;
  }

  .main-slideshow__desc {
    margin-bottom: 32px;
    font-size: 14px;
  }

  .main-slideshow__controls {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .swipe-button {
    &:hover:enabled {
      cursor: pointer;
    }
    &:disabled > svg > * {
      stroke: #808080;
    }
    & > svg > * {
      transition-property: fill, stroke;
      transition-duration: 180ms, 180ms;
      fill: transparent;
      stroke: $primary-color;
    }
    &:hover:enabled > svg > * {
      fill: $primary-color;
      stroke: #FFFFFF;
    }
    &--dark {
      & > svg > * {
        stroke: #FFFFFF;
      }
      &:hover:enabled > svg > * {
        fill: #FFFFFF;
        stroke: $primary-color;
      }
    }
    & + & {
      margin-left: 4px;
    }
  }

  .main-slideshow__swipe-controls {
    position: absolute;
    bottom: 0;
    left: 70px;
  }

  .main-slideshow__social {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    align-self: center;
    z-index: 1;

    & > * + * {
      margin-top: 28px;
    }
  }

  .main-slideshow__timers {
    position: absolute;
    bottom: 0;
    right: 2.3px;

    & > * + * {
      margin-left: 19px;
    }
  }

  .main-slideshow__timers--mobile {
    display: none;
    text-align: center;
    margin-bottom: calc(23px + 32px);

    & > * + * {
      margin-left: 19px;
    }
  }

  .slide-timer {
    transform: scale(1);
    transition: transform 200ms linear;

    &--active {
      transform: scale(1.8);
    }
  }

  .main-slideshow__green-implants__img {
    position: relative;
    right: 40px;
    bottom: 20px;
    max-width: 100%;
  }

  .main-slideshow__social__link {
    box-sizing: border-box;
    line-height: 0;
    transform: scale(1);
    transition-duration: 200ms;

    &:hover {
      transform: scale(1.25);
    }
  }

  @keyframes textgroupFade {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 768px) {
    .main-slideshow__textgroup {
      position: static;
      text-align: center;
      margin: 0;
      width: auto;
    }

    .main-slideshow {
      height: auto;
    }

    .main-slideshow__title {
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 12px;
    }

    .main-slideshow__desc {
      margin-bottom: 7px;
    }

    .main-slideshow__content {
      position: static;
      padding-top: 32px;
      display: flex;
      height: auto;
      flex-direction: column;
    }

    .main-slideshow__textgroup {
      height: auto;
    }

    .main-slideshow__mobile-btn {
      display: block;
    }

    .main-slideshow__timers--mobile {
      display: block;
    }

    .main-slideshow__green-implants {
      margin: 0 auto;
      position: static;
      margin-bottom: 20px;

      &__img {
        position: static;
        display: block;
      }
    }

    .main-slideshow__social, 
    .main-slideshow__swipe-controls,
    .main-slideshow__timers,
    .main-slideshow__desktop-btn
    { 
      display: none;
    }
  }
</style>