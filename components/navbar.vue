<template lang="pug">
  nav(class="nav")
    div(class="nav__inner")
      div(class="nav__container medium_header")
        NuxtLink(to="/"): img.nav__logo(src="~/assets/img/logo.svg")
        .nav__elem: |
          NuxtLink(to="services" class="nav__link nav__link--underlined") Услуги и цены
        .nav__elem: |
          NuxtLink(to="services" class="nav__link nav__link--underlined") О нас
        .nav__elem: |
          NuxtLink(to="services" class="nav__link nav__link--underlined") Наши врачи
        .nav__elem: |
          NuxtLink(to="services" class="nav__link nav__link--underlined") Контакты
      div(class="nav__container medium_header")
        .nav__elem: |
          a(class="nav__link nav__link--phone-icon" href="tel:+7 (499) 372-94-90") +7 (499) 372-94-90
        .nav__elem: button(class="nav__appointment-btn card_desc") Записаться на прием
</template>

<style lang="scss">
  .nav {
    top: 0;
    padding: 12px 0;
    background-color: $primary-black;
    position: sticky;
    z-index: 3;
    width: 100%;

    &--transparent {
      background-color: $primary-black;
    }
  }

  .nav__container {
    display: flex;

    & > * + * {
      margin-left: 32px;
    }
  }
  
  .nav__inner {
    max-width: $container--main-width;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .nav__elem {
    align-self: center;
  }
  
  .nav__link {
    color: white;
    position: relative;

    &--phone-icon:before {
      margin-right: 4px;
      position: relative;
      content: url('~assets/img/contact_phone.svg');
      top: 2.5px;
    }
    &--underlined {
      padding-bottom: 23.5px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 38px;
        width: 100%;
        height: 2px;
        background-color: white;
        transition: transform .3s ease;
        border-radius: 40px;
        transform: scaleX(0);
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
  }

  .nav__appointment-btn {
    display: block;
    width: 175px;
    height: 33px;
    background: transparent;
    border-radius: 2px;
    border: 1px solid #FFFFFF;
    color: white;
    transition: background-color 180ms;
    &:hover {
      color: $primary_black;
      background-color: white;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
  .nav__link:not(.nav__link--phone-icon), .nav__appointment-btn {
    display: none;
  }
  .nav__logo {
    margin-left: 16px;
  }
}
</style>