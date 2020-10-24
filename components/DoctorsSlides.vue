<template lang="pug">
  .doctors
    .doctors__modal(v-if="modalOpened" @click.self="modalOpened = false")
      .doctors__modal__inner
        .doctors__modal__img-container
        .doctors__modal__content
          h2.doctors__modal__content__title Иванчина Татьяна Александровна
          h5.doctors__modal__content__desc Врач - стоматолог, терапевт
          ul.doctors__modal__list
            li.doctors__modal__list-item Ведение дентального фотопротокола
            li.doctors__modal__list-item Эстетические прямые реставрации зубов
            li.doctors__modal__list-item Отбеливание зубов ZOOM
            li.doctors__modal__list-item Эндодонтическое лечение зубов, работа с ротационными инструментами
            li.doctors__modal__list-item
              | Пломбирование корневых каналов зубов методом латеральной компакции гуттаперчи
            li.doctors__modal__list-item Профессиональная гигиена полости рта
          button Записаться на прием
        .close-modal(@click="modalOpened = false")
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            rect(x='0.75' y='1.81055' width='1.4' height='30.0003' transform='rotate(-45 0.75 1.81055)' fill='#272727')
            rect(x='21.9641' y='0.75' width='1.4' height='30.0003' transform='rotate(45 21.9641 0.75)' fill='#272727')
    .doctors__content(:class="{'doctors__content--hide': hideDoctors}")
      .textgroup
        h3.textgroup__title.primary_heading Наша работа — ваше здоровье
        p.textgroup__text.card_desc
          | В нашей клинике работают профессионалы своего дела. 
          | Врачи регулярно повышают квалификацию и стажируются для того, 
          | чтобы наши пациенты всегда были довольны результатом
    .doctors__controls
      button.swipe-button.swiper-button--prev(@click="prevSlide")
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
          path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
      button.swipe-button.swiper-button--next(@click="nextSlide")
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
          path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
    swiper.doctors__slides(ref="doctorsSwiper" :options="swiperOptions")
      swiper-slide.doctors__slide
        img.doctors__slide__img(src="~assets/img/doctors/doctor1.jpg" @click="modalOpened = true")
        .doctors__slide__textgroup
          p.doctors__slide__full-name.card_heading Иванчина Т.А.
          p.doctors__slide__description Врач стоматолог-терапевт
        img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
      swiper-slide.doctors__slide
        img.doctors__slide__img(src="~assets/img/doctors/doctor2.jpg")
        .doctors__slide__textgroup
          p.doctors__slide__full-name.card_heading Иваненко М.А.
          p.doctors__slide__description Врач стоматолог-терапевт
        img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
      swiper-slide.doctors__slide
      swiper-slide.doctors__slide
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        speed: 400,
        grab: true
      },
      hideDoctors: false,
      modalOpened: false
    }
  },
  computed: {
    swiper() {
      return this.$refs.doctorsSwiper.$swiper
    }
  },
  methods: {
    nextSlide: function () {
      if (this.swiper.isBeginning && !this.hideDoctors) {
        this.hideDoctors = true;
      } else {
        this.swiper.slideNext();
      }
    },
    prevSlide: function () {
      if (this.swiper.isBeginning && this.hideDoctors) {
        this.hideDoctors = false;
      } else {
        this.swiper.slidePrev();
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/components/textgroup.scss";
  @import "~/assets/scss/components/swipe_button.scss";

  .doctors {
    padding: 96px 0 16px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .doctors__content {
    overflow: hidden;
    opacity: 1;
    width: 60%;
    margin-right: 155px;
    transition-delay: 0s, 0s, 0.35s;
    transition-duration: 0.5s, 0.5s, 0.3s;
    transition-property: width, margin-right, opacity;

    &--hide {
      width: 0;
      opacity: 0;
      margin-right: 0;
      transition-delay: 0.3s, 0.3s, 0s;
      transition-duration: 0.5s, 0.5s, 0.3s;
      transition-property: width, margin-right, opacity;
    }
  }

  .doctors__slides {
    position: relative;
    padding: 40px;
    bottom: 40px;
  }

  .doctors__controls {
    position: absolute;
    top: 388px;
    z-index: 2;
  }

  .doctors__slide {
    box-shadow: 0 10px 10px rgba(136, 113, 113, 0.02), 
              0 10px 40px rgba(0, 0, 0, 0.04), 
              0 2px 6px rgba(0, 0, 0, 0.04),
              0 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    background-color: #FFFFFF;
    width: 310px;
    height: 456px;
    cursor: pointer;
    position: relative;
    transition: transform 100ms linear;
    overflow: hidden;
    margin-right: 24px;
    
    &:hover {
      transform: translateY(-5px);
    }

    &:hover &__arrow {
      visibility: visible;
      opacity: 1;
    }
  }

  .doctors__slide__img {
    display: block;
    margin: 63px auto 0;
    margin-top: 63px;
  }

  .doctors__slide__textgroup {
    width: 262px;
    margin: 0 auto;
  }

  .doctors__slide__full-name {
    margin: 0 0 5px;
    color: $primary-black;
  }

  .doctors__slide__arrow {
    display: block;
    position: absolute;
    opacity: 0;
    right: 24px;
    bottom: 20px;
    transition: opacity 300ms ease-in-out;
  }

  .doctors__slide__description {
    font-family: 'LitteraTextRegular';
    opacity: 0.64;
    font-size: 14px;
    line-height: 14px;
    margin: 0;
    color: var(--primary-color);
  }

  .doctors__modal {
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh; 
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .doctors__modal__inner {
    position: absolute;
    padding: 56px 64px;
    width: 1050px;
    height: 674px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px 2px 6px rgba(0, 0, 0, 0.04), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    left: 50%;
    top: 50%;
    z-index: 6;
    transform: translate(-50%, -50%);
  }

  .doctors__modal__list-item {
    &::marker {
      color: $primary-green;
    }
  }

  .close-modal {
    position: absolute;
    top: 40px;
    right: 48px;
    cursor: pointer;
  }

  .doctors__modal__img-container {
    display: inline-block;
    height: 100%;
    width: 359px;
    margin-right: 75px;
    background-color: #F4F4F9;
  }
  
  .doctors__modal__content {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 450px;

    &__title {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .doctors {
      display: block;
    }
    .doctors__content {
      transition: none;
      width: auto;
      margin: 0
    }
  }
</style>