<template lang="pug">
  .service-card
    img(:src='this.img' class="service-card__img")
    .service-card__textgroup
      p(class="service-card__desc card_heading") {{ this.desc }}
      p(class="service-card__price card_desc") {{ this.price }}
    img(class="service-card__arrow" src="~/assets/img/services/arrow_right.svg")
</template>

<script>
export default {
  props: {
    'desc': String,
    'price': String,
    'img': String
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss">
  .service-card {
    width: 310px;
    max-height: 304px;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    transition: transform 100ms linear;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.02), 
                0 10px 40px rgba(0, 0, 0, 0.04), 
                0 2px 6px rgba(0, 0, 0, 0.04), 
                0 0 1px rgba(0, 0, 0, 0.04);  

    &:hover {
      transform: translateY(-5px);
    }

    &:hover &__arrow {
      opacity: 1;
    }
  }

  .service-card__desc {
    margin: 0 0 6px 0;
    color: $primary-color;
  }

  .service-card__price {
    margin: 0;
    color: $primary-color;
    opacity: 0.64;
  }

  .service-card__arrow {
    display: block;
    left: 80%;
    bottom: 20%;  
    position: relative;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .service-card__textgroup {
    margin-left: 32px;
    margin-bottom: 20px;
  }

  .service-card__img {
    display: block;
    margin: 24px auto 22px;
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 768px) {
    .service-card {
      width: 100%;
      line-height: 76px;

      &:hover {
        transform: translateY(0);
      }
    }

    .service-card__img {
      display: inline;
      height: 51px;
      width: 51px;
      margin: 0 16px;
      vertical-align: middle;
    }

    .service-card__arrow {
      display: none;
    }

    .service-card__textgroup {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
    }
  }
</style>