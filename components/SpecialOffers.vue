<template lang="pug">
  .special-offers
    .special-offer
      h4.card_heading.special-offer__title Акция на импланты
      p.special-offer__desc.card_desc Прицельный снимок бесплатно
      a.special-offer__more(href="#").card_desc Подробнее
      img(src="~assets/img/offers/offers_backdrop1.png" class="special-offer__backdrop")
      img(src="~assets/img/offers/offers_img1.png" class="special-offer__img")
    .special-offer
      h4.card_heading.special-offer__title Акция на удаление зуба
      p.card_desc.special-offer__desc Компьютерная томография бесплатно
      a.special-offer__more(href="#").card_desc Подробнее
      img(src="~assets/img/offers/offers_backdrop2.png" class="special-offer__backdrop")
      img(src="~assets/img/offers/offers_img2.png" class="special-offer__img")
    .special-offer
      h4.card_heading.special-offer__title Акция на удаление зуба
      p.special-offer__desc.card_desc Компьютерная томография бесплатно
      a.special-offer__more(href="#").card_desc Подробнее
      img(src="~assets/img/offers/offers_backdrop1.png" class="special-offer__backdrop")
      img(src="~assets/img/offers/offers_img1.png" class="special-offer__img")
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
  .special-offers {
    padding: 96px 40px;
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
    height: 246px;
    padding: 32px 0 24px 32px;
    position: relative;
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
    font-size: 20px;
    font-weight: 700;
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
</style>