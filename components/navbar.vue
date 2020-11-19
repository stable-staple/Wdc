<template lang="pug">
  div
    nav.nav__hidden
    nav(class="nav")
      div(class="nav__inner")
        div(class="nav__container medium_header nav__mobile-logo")
          NuxtLink(to="/"): img.nav__logo(src="~/assets/img/logo.svg" @click="toggleDropdown = false")
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
            button.nav__dropdown(@click="toggleDropdown = !toggleDropdown")
              .nav__dropdown__icon
                div(v-if="!toggleDropdown")
                  svg(width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                    rect(y="4" width="28" height="1.4" rx="0.7" fill="white")
                    rect(y="10" width="28" height="1.4" rx="0.7" fill="white")
                div(v-if="toggleDropdown")
                  svg(width="28" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg")
                    rect(x="6" y="20.1418" width="20" height="1.4" rx="0.7" transform="rotate(-45 6 20.1418)" fill="white")
                    rect(x="6.98999" y="5.99976" width="20" height="1.4" rx="0.7" transform="rotate(45 6.98999 5.99976)" fill="white")
          .nav__elem: button(class="card_desc nav__appointment-btn") Записаться на прием
    .nav__dropdown-menu(:class="{'nav__dropdown-menu--active': toggleDropdown}")
      .nav__dropdown-menu__inner
        ul.nav__dropdown-menu__list
          NuxtLink.nav__dropdown-menu__list-item(to="/services/detskaya_stomatologiya") Услуги и цены
          a.nav__dropdown-menu__list-item(href="#") О клинике
          a.nav__dropdown-menu__list-item(href="#") Врачи
          a.nav__dropdown-menu__list-item(href="#") Статьи
          a.nav__dropdown-menu__list-item(href="#") Контакты
        hr(style="margin-bottom:24px;margin-top: 28px;")
        address.wdc-address: a(href="https://yandex.ru/maps/?rtext=~55.737923%2C37.424905") Москва, ул. Крылатская, дом 19
      button.button--more.nav__appointment-btn--mobile.card_desc Записаться на прием
</template>

<script>
export default {
  data() {
    return {
      toggleDropdown: false
    }
  }
}
</script>

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
  
  .nav__appointment-btn--mobile {
    position: absolute;
    bottom: 24px;
    width: calc(100% - 32px);
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
    overflow: hidden;
    &__icon {
      vertical-align: sub;
    }
  }

  .nav__dropdown-menu {
    display: none;
    top: 40px;
    position: fixed;
    right: 0;
    width: 100%;
    overflow: hidden;
    background: $primary-black;
    z-index: 12;
    height: 0;
    transition: height 500ms;
    padding: 0 26px 0 16px;

    &__inner {
      position: relative;
      top: 35px;
    }

    &--active {
      height: calc(100% - 40px);
    }
  }

  .nav__dropdown-menu__list {
    position: relative;
    top: 0px;
    overflow: hidden;
    list-style: none;
    padding: 0;
    & > * + * {
      padding-top: 24px;
    }
    margin: 0 0 28px 0;
  }

  .nav__dropdown-menu__list-item {
    display: block;
    color: #FFFFFF;
    font-family: 'MontserratRegular';
    font-size: 14px;
    line-height: 14px;
    &:after {
      content: url('~assets/img/menu_arrow_right.svg');
      float: right;
    }
  }

  .nav__appointment-btn {
    font-family: 'MontserratSemiBold';
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

  .wdc-address {
    font-family: 'MontserratSemiBold';
    font-style: normal;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 38px;

    &:before {
      content: url('~assets/img/map_marker.svg');
      margin-right: 13px;
      vertical-align: sub;
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

    .nav__dropdown,
    .nav__dropdown-menu {
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