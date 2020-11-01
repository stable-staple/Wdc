<template lang="pug">
  .special-offers
    span.special-offers__title Акции
    .special-offers__controls
      button.swipe-button.swiper-button--prev(:disabled="this.isStart")
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
          path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
      button.swipe-button.swiper-button--next(:disabled="this.isEnd")
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
          path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
    swiper.special-offers__list(ref="offersSwiper" :options="swiperOptions")
      swiper-slide.special-offer
        p.card_heading.special-offer__title Акция на импланты
        p.special-offer__desc.card_desc Прицельный снимок бесплатно
        a.special-offer__more(href="#").card_desc Подробнее
        img(src="~assets/img/offers/offers_backdrop1.png" class="special-offer__backdrop")
        img(src="~assets/img/offers/offers_img1.png" class="special-offer__img")
      swiper-slide.special-offer
        p.card_heading.special-offer__title Акция на удаление зуба
        p.card_desc.special-offer__desc Компьютерная томография бесплатно
        a.special-offer__more(href="#").card_desc Подробнее
        img(src="~assets/img/offers/offers_backdrop2.png" class="special-offer__backdrop")
        img(src="~assets/img/offers/offers_img2.png" class="special-offer__img")
      swiper-slide.special-offer
        p.card_heading.special-offer__title Акция на удаление зуба
        p.card_desc.special-offer__desc Компьютерная томография бесплатно
        a.special-offer__more(href="#").card_desc Подробнее
        img(src="~assets/img/offers/offers_backdrop2.png" class="special-offer__backdrop")
        img(src="~assets/img/offers/offers_img2.png" class="special-offer__img")
</template>

<script>
export default {
  data() {
    return {
      isStart: true,
      isEnd: false,
      totalPages: 1,
      currSlide: 0,
      swiperOptions: {
        spaceBetween: 24,
        totalPages: 2,
        slidesPerView: 'auto',
        preventInteractionOnTransition: true,
        grab: true,
        navigation: {
          nextEl: '.swiper-button--next',
          prevEl: '.swiper-button--prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.offersSwiper.$swiper
    }
  },
  methods: {
    inc: function () {
      this.currSlide++;
    },
    onSwipe: function(elem) {
      this.isStart = elem.swiper.isBeginning;
      this.isEnd = elem.swiper.isEnd;
    }
  },
  mounted() {
    this.swiper.on('transitionStart', () => this.onSwipe(this))
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/components/swipe_button.scss";

  .special-offers {
    padding: 96px 0 calc(96px - 40px);

    &__title {
      margin: 0;
      font-family: 'MontserratSemiBold';
      font-size: 48px;
      line-height: 48px;
      font-weight: 600;
    }
  }

  .special-offers__controls {
    float: right;
  }

  .special-offers__list {
    padding: 40px;
    display: flex;
    overflow: scroll;
    margin-left: -40px;
    & > .special-offer + .special-offer {
      margin-left: 24px;
    }
  }

  .special-offer {
    cursor: pointer;
    min-width: 524px;
    line-height: 32px;
    box-sizing: border-box;
    height: 246px;
    width: initial;
    padding: 32px 0 24px 32px;
    position: relative;
    flex-shrink: 1;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px 2px 6px rgba(0, 0, 0, 0.04), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    transition: transform 100ms linear;
    &:hover {
      transform: translateY(-5px);
    }
  }

  .special-offer__title {
    line-height: 29px;
    margin: 0 0 4px 0;
    font-size: 18px;
    font-style: normal;
    color: $primary-black;
  }

  .special-offer__desc {
    margin: 0 0 83px 0;
    line-height: 21px;
    font-size: 14px;
    height: 42px;
    opacity: 0.64;
    max-width: 207px;
    color: $primary-black;
  }

  .special-offer__more {
    line-height: 32px;
    font-size: 14px;
    color: rgba(35, 58, 70, 0.64);

    &::after {
      content: url('~assets/img/arrow_right.svg');
      margin-left: 13px;
      vertical-align: middle;
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }

  .special-offer__backdrop {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .special-offer__img {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 35px;
  }

  @media only screen and (max-width: 768px) {
    .special-offer {
      flex-shrink: 0;
      min-width: 100%;
      width: 100%;
    }
  }
</style>