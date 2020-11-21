<template lang="pug">
.reviews
  .reviews__content
    .textgroup--mobile-controls
      .textgroup--mobile__title Отзывы
      .special-offers__controls.doctors__controls--mobile
        button.swipe-button.swiper-button--prev
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            circle(cx='20' cy='20' r='19.375' stroke-width='1.25')
            path(d='M22 25.2856L18 20.1428L22 14.9999' stroke-width='1.82857')
        button.swipe-button.swiper-button--next
          svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            circle(cx='20' cy='20' r='19.3' stroke-width='1.4')
            path(d='M18 15L22 20.1429L18 25.2857' stroke-width='1.8')
    .textgroup
      h3(class="textgroup__title primary_heading reviews__title") Отзывы
      p(class="reviews__content__text card_desc") 
        | Действия представителей оппозиции представляют собой 
        | не что иное, как квинтэссенцию победы
  .reviews__img
    .play-button
      svg(width='64' height='64' viewbox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg')
        circle(cx='32' cy='32' r='32' fill='#272727')
        path(d='M39.7727 31.2914C40.3182 31.6064 40.3182 32.3936 39.7727 32.7086L28.7273 39.0857C28.1818 39.4006 27.5 39.0069 27.5 38.3771L27.5 25.6229C27.5 24.9931 28.1818 24.5994 28.7273 24.9143L39.7727 31.2914Z' fill='white')
    img.reviews__img__inner(src="~assets/img/reviews__image.png")

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "~/assets/scss/components/textgroup.scss";

.reviews {
  position: relative;
  padding: 96px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.reviews__title {
  max-width: 459px;
}

.reviews__content__text {
  font-family: 'MontserratRegular';
  font-size: 16px;
  line-height: 24px;
  max-width: 400px;
  color: $primary-color;
  opacity: 0.64;
}

.play-button {
  position: absolute;
  width: 64px;
  left: 50%;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 120ms;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.reviews__img__inner {
  position: relative;
  border-radius: 6px;
  display: block;
  cursor: pointer;
  width: 100%;
  z-index: 1;
}

.reviews__img {
  position: relative;
}

@media only screen and (max-width: 768px) {
  .reviews {
    display: block;
    padding: 48px 0;
  }

  .play-button {
    transform: translate(-50%, -50%) scale(0.63);

    &:hover {
      transform: translate(-50%, -50%) scale(0.83);
    }
  }
}

</style>