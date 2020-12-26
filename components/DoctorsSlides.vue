<template lang="pug">
.doctors
  DoctorsModal(v-model="modalOpened", :doctorFullName="selectedDoctor", :doctorImgUrl="selectedImg")
  .doctors__content(:class="{ 'doctors__content--hide': hideDoctors }")
    .textgroup--mobile-controls
      .textgroup--mobile__title Наша работа — ваше здоровье
      .special-offers__controls.doctors__controls--mobile
        button.swipe-button.swiper-button--prev(
          @click="prevSlideMobile",
          :disabled="this.isStart"
        )
          svg(
            width="40",
            height="40",
            viewbox="0 0 40 40",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            circle(cx="20", cy="20", r="19.375", stroke-width="1.25")
            path(d="M22 25.2856L18 20.1428L22 14.9999", stroke-width="1.82857")
        button.swipe-button.swiper-button--next(
          @click="nextSlideMobile",
          :disabled="this.isEnd"
        )
          svg(
            width="40",
            height="40",
            viewbox="0 0 40 40",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            circle(cx="20", cy="20", r="19.3", stroke-width="1.4")
            path(d="M18 15L22 20.1429L18 25.2857", stroke-width="1.8")
    .textgroup
      h3.textgroup__title.primary_heading Наша работа — ваше здоровье
      p.textgroup__text.card_desc
        | В нашей клинике работают профессионалы своего дела.
        | Врачи регулярно повышают квалификацию и стажируются для того,
        | чтобы наши пациенты всегда были довольны результатом
  .doctors__controls
    button.swipe-button.swiper-button--prev(
      @click="prevSlide",
      :disabled="!this.hideDoctors"
    )
      svg(
        width="40",
        height="40",
        viewbox="0 0 40 40",
        fill="none",
        xmlns="http://www.w3.org/2000/svg"
      )
        circle(cx="20", cy="20", r="19.375", stroke-width="1.25")
        path(d="M22 25.2856L18 20.1428L22 14.9999", stroke-width="1.82857")
    button.swipe-button.swiper-button--next(
      @click="nextSlide",
      :disabled="this.isEnd && this.hideDoctors"
    )
      svg(
        width="40",
        height="40",
        viewbox="0 0 40 40",
        fill="none",
        xmlns="http://www.w3.org/2000/svg"
      )
        circle(cx="20", cy="20", r="19.3", stroke-width="1.4")
        path(d="M18 15L22 20.1429L18 25.2857", stroke-width="1.8")
  swiper.doctors__slides(ref="doctorsSwiper", :options="swiperOptions")
    swiper-slide.doctors__slide
      img.doctors__slide__img(
        src="~assets/img/doctors/romantsov.png",
        @click="selectedDoctor='Романцов Александр Валентинович'; selectedImg=require(`../assets/img/doctors/romantsov.png`); modalOpened =true;"
      )
      .doctors__slide__textgroup
        p.doctors__slide__full-name.card_heading Романцов А.В.
      img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
    swiper-slide.doctors__slide
      img.doctors__slide__img(
        src="~assets/img/doctors/doctor2.png",
        @click="selectedDoctor = 'Иваненко М.Д.';selectedImg=require(`../assets/img/doctors/doctor2.png`); modalOpened = true;"
      )
      .doctors__slide__textgroup
        p.doctors__slide__full-name.card_heading Иваненко М.Д.
      img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
    swiper-slide.doctors__slide
      img.doctors__slide__img(
        src="~assets/img/doctors/doctor4.png",
        @click="selectedDoctor = 'Дьячкова Яна Юрьевна';selectedImg=require(`../assets/img/doctors/doctor4.png`); modalOpened = true;"
      )
      .doctors__slide__textgroup
        p.doctors__slide__full-name.card_heading Дьячкова Я.Ю.
      img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
    swiper-slide.doctors__slide
      img.doctors__slide__img(
        src="~assets/img/doctors/romantsov.png",
        @click="selectedDoctor = 'Дьячкова Я.Ю.';selectedImg=require(`../assets/img/doctors/romantsov.png`); modalOpened = true;"
      )
      .doctors__slide__textgroup
        p.doctors__slide__full-name.card_heading Романцов А.В.
      img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
    swiper-slide.doctors__slide
      img.doctors__slide__img(
        src="~assets/img/doctors/romantsov.png",
        @click="modalOpened = true; selectedImg=require(`../assets/img/doctors/romantsov.png`);"
      )
      .doctors__slide__textgroup
        p.doctors__slide__full-name.card_heading Романцов А.В.
      img.doctors__slide__arrow(src="~assets/img/services/arrow_right.svg")
    swiper-slide.doctors__slide
  p.doctors__text--mobile
    | У нас работают профессионалы своего дела. Врачи регулярно повышают квалификацию
    | и стажируются для того, чтобы наши пациенты всегда были довольны результатом
</template>

<script>
export default {
  data() {
    return {
      isStart: true,
      isEnd: false,
      swiperOptions: {
        slidesPerView: "auto",
        speed: 400,
        grab: true,
      },
      hideDoctors: false,
      modalOpened: false,
      selectedDoctor: null,
      selectedImg: null
    };
  },
  computed: {
    swiper() {
      return this.$refs.doctorsSwiper.$swiper;
    },
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
        this.swiper.slidePrev();
      } else {
        this.swiper.slidePrev();
      }
    },
    nextSlideMobile: function () {
      this.swiper.slideNext();
    },
    prevSlideMobile: function () {
      this.swiper.slidePrev();
    },
    onSwipe: function (elem) {
      this.isStart = elem.swiper.isBeginning;
      this.isEnd = elem.swiper.isEnd;
    },
  },
  mounted() {
    this.swiper.on("transitionStart", () => this.onSwipe(this));
  },
};
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
  width: 115%;
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

  &__title {
    font-family: "MontserratSemiBold";
    font-size: 48px;
    line-height: 52px;
  }
}

.doctors__text--mobile {
  display: none;
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

  &--mobile {
    display: none;
  }
}

.doctors__slide {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.02), 0 10px 40px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  background-color: #ffffff;
  width: 310px;
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
  margin: 48px auto 0;
  height: 408px;
  width: auto;
}

.doctors__slide__textgroup {
  padding: 23px 32px;
}

.doctors__slide__full-name {
  margin: 0;
  color: $primary-black;
}

.doctors__slide__arrow {
  display: block;
  position: absolute;
  opacity: 0;
  right: 24px;
  bottom: 10px;
  transition: opacity 300ms ease-in-out;
}

.doctors__slide__description {
  font-family: "MontserratRegular";
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
  background-color: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02),
    0px 10px 40px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  left: 50%;
  top: 50%;
  z-index: 6;
  transform: translate(-50%, -50%);
}

.doctors__modal__list {
  padding-left: 16px;
  font-family: "MontserratRegular";
  font-size: 14px;
  line-height: 24px;
  margin: 0;

  & > * + * {
    margin-top: 16px;
    line-height: 20px;
  }
}

.doctors__modal__list-item {
  &::marker {
    color: $primary-green;
  }
}

.doctors__modal__btn {
  position: absolute;
  bottom: 0;
  width: 258px;
  height: 45px;
  cursor: pointer;
  background-color: $primary-black;
  font-family: "MontserratSemiBold";
  color: #ffffff;
  border-radius: 2px;
}

.doctors__modal__img-container {
  display: inline-block;
  height: 500px;
  max-width: 100%;
  margin-right: 75px;
  background-color: #f4f4f9;
}

.doctors__modal__content {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 450px;

  &__title {
    margin: 0 0 12px 0;
    font-family: "MontserratSemiBold";
    line-height: 40px;
    font-size: 32px;
    color: $primary-black;
  }

  &__desc {
    font-family: "MontserratRegular";
    font-size: 12px;
    line-height: 24px;
    color: $primary-grey;
    margin: 0 0 20px 0;
  }
}

@media only screen and (max-width: 768px) {
  .doctors {
    display: block;
    padding: 40px 0 40px;
  }

  .doctors__modal {
    overflow: hidden;
  }

  .doctors__modal__list-item {
    line-height: 20px;
  }

  .doctors__modal__inner {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 52px 15px;
    overflow: hidden;
    border-radius: 0;
  }

  .doctors__modal__img-container {
    display: none;
  }

  .doctors__slides {
    padding: 32px 40px 20px 40px;
    margin-left: -40px;
    margin-bottom: -40px;
  }

  .doctors__controls {
    display: none;
  }

  .doctors__controls--mobile {
    display: inline;
  }

  .doctors__content {
    transition: none;
    width: auto;
    height: 100%;
    margin: 0;

    &--hide {
      width: auto;
      opacity: 1;
      transition: none;
    }
  }

  .doctors__text--mobile {
    font-size: 14px;
    height: auto;
    font-family: "MontserratRegular";
    min-height: auto;
    line-height: 24px;
  }

  .doctors__slide {
    width: 180px;
    height: auto;
    padding-top: 14px;
    box-sizing: content-box;
    margin-right: 12px;

    &:hover {
      transform: translateY(0);
    }

    &__textgroup {
      width: auto;
      padding: 0;
      margin-left: 16px;
      margin-bottom: 13px;
    }

    &__full-name {
      font-size: 12px;
      margin: 0;
    }

    &__arrow {
      visibility: visible;
      opacity: 1;
      bottom: 1px;
      right: 5px;
      transform-origin: center left;
      transform: scale(0.8);
    }

    &__img {
      max-width: 100%;
      height: 200px;
      margin: 0 auto;
      margin-bottom: 12px;
    }
  }
}
</style>