<template lang="pug">
  div
    nav.nav__hidden
    nav(class="nav")
      div(class="nav__inner")
        div(class="nav__container medium_header nav__mobile-logo")
          NuxtLink(to="/"): img.nav__logo(src="~/assets/img/logo.svg")
          .nav__elem: |
            NuxtLink(to="/services/detskaya_stomatologiya" class="nav__link nav__link--underlined") Услуги и цены
          .nav__elem: |
            NuxtLink(to="/services" class="nav__link nav__link--underlined") О клинике
          .nav__elem: |
            NuxtLink(to="/services" class="nav__link nav__link--underlined") Врачи
          .nav__elem: |
            NuxtLink(to="/services" class="nav__link nav__link--underlined") Статьи
          .nav__elem: |
            NuxtLink(to="/services" class="nav__link nav__link--underlined") Контакты
        div(class="nav__container medium_header nav__mobile-actions")
          .nav__elem: |
            a(class="nav__link nav__link--phone-icon" href="tel:+7 (499) 372-94-90") +7 (499) 372-94-90
            button.nav__dropdown
              svg(width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                rect(y="4" width="28" height="1.4" rx="0.7" fill="white")
                rect(y="10" width="28" height="1.4" rx="0.7" fill="white")
          .nav__elem: button(class="nav__appointment-btn card_desc") Записаться на прием
</template>

<style lang="scss">
  .nav {
    top: 0;
    padding: 12px 0;
    background-color: $primary-black;
    position: fixed;
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

  .nav__hidden {
    height: 64px;
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

  .nav__dropdown {
    display: inline-block;
    vertical-align: sub;
    margin-left: 16px;
    cursor: pointer;
    display: none;
  }

  .nav__appointment-btn {
    display: block;
    width: 212px;
    height: 37px;
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
    .nav {
      padding: 8px 0 32px 0;
      height: 48px;
    }

    .nav__inner {
      max-width: initial;
      padding: 0 16px;
      height: 32px;
    }

    .nav__hidden {
      height: 80px;
    }

    .nav__link:not(.nav__link--phone-icon), .nav__appointment-btn {
      display: none;
    }

    .nav__dropdown {
      display: initial;
    }

    .nav__logo {
      height: 32px;
    }

    .nav__mobile-logo {
      width: 10%;
    }

    .nav__mobile-actions {
      flex-direction: row-reverse;
    }
}
</style>