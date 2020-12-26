<template lang="pug">
footer(id="footer")
  .clinics-info--mobile
    h2.clinics-info--mobile__title West Dental Clinic
    address.wdc-address.clinics-info--mobile__address: a Москва, ул. Крылатская, дом 19
    .clinics-info--mobile__work-hours
      p.clinics-info--mobile__work-hours__title Время работы
      P.clinics-info--mobile__work-hours__content пн - пт 9:00 - 21:00
        br
        | суббота 10:00 - 18:00
        br
        | воскресенье выходной
  #map
    .map__navigation
      p.map__navigation__invite West Dental Clinic
        .address-input
          div#geocoder-desktop
          button.map__navigation__action(@click="routed") Проложить маршрут
        hr(style="margin: 0 -48px 26px -48px;")
        address.wdc-address.clinics-info__address: a Москва, ул. Крылатская, дом 19
        .map__navigation__info
        p.clinics-info__work-hours__title Время работы
          p.map__navigation__info__text пн - пт&nbsp;
            time(datetime="9:00") 9:00&nbsp;
            | -&nbsp;
            time(datetime="21:00") 21:00
            br
            | суббота&nbsp;
            time(datetime="9:00") 9:00&nbsp;
            | -&nbsp;
            time(datetime="18:00") 18:00
            br
            | воскресенье - выходной
  .address-input--mobile
    div#geocoder-mobile
    button.address-input--mobile__btn(@click="routedMobile") Проложить маршрут
  .footer
    .footer__nav
      img(src="~/assets/img/logo.svg")
      a.footer__button.footer__nav__arrow-up(href="#top", v-smooth-scroll)
        svg(
          width="56",
          height="56",
          viewbox="0 0 56 56",
          fill="none",
          xmlns="http://www.w3.org/2000/svg"
        )
          circle(
            cx="28",
            cy="28",
            r="27.3",
            stroke="white",
            stroke-opacity="0.48",
            stroke-width="1.4"
          )
          path(
            d='M28.5303 17.4697C28.2374 17.1768 27.7626 17.1768 27.4697 17.4697L22.6967 \
                          22.2426C22.4038 22.5355 22.4038 23.0104 22.6967 23.3033C22.9896 23.5962 23.4645 \
                          23.5962 23.7574 23.3033L28 19.0607L32.2426 23.3033C32.5355 23.5962 33.0104 23.5962 \
                          33.3033 23.3033C33.5962 23.0104 33.5962 22.5355 33.3033 22.2426L28.5303 17.4697ZM28.75\
                          38L28.75 18H27.25L27.25 38H28.75Z',
            fill="white"
          )
      .footer__nav__social
        a.footer__button(href="#")
          svg(
            width="56",
            height="56",
            viewbox="0 0 56 56",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              d='M33.7551 22.2449C32.3075 20.7972 30.3828 20 28.3355 20C26.2883 20 24.3635 20.7972\
                              22.9159 22.2449C21.4682 23.6925 20.671 25.6172 20.671 27.6645C20.671 28.9613 20.9993\
                              30.2357 21.6224 31.3645L20 36L24.6354 34.3776C25.7643 35.0007 27.0387 35.329 28.3355\
                              35.329C30.3827 35.329 32.3075 34.5317 33.7551 33.0841C35.2028 31.6365 36 29.7118 36 \
                              27.6645C36 25.6172 35.2028 23.6925 33.7551 22.2449ZM32.1245 30.5117L31.2397 \
                              31.3966C30.5067 32.1296 28.4268 31.2382 26.5943 29.4057C24.7618 27.5731 23.8704 \
                              25.4933 24.6034 24.7603L25.4882 23.8755C25.6715 23.6923 25.9686 23.6923 26.1519 \
                              23.8755L27.2579 24.9815C27.4412 25.1648 27.4412 25.4619 27.2579 25.6452L26.5943 \
                              26.3088C27.238 27.6677 28.3322 28.762 29.6912 29.4057L30.3548 28.7421C30.5381 \
                              28.5588 30.8352 28.5588 31.0185 28.7421L32.1245 29.8481C32.3078 30.0314 32.3078 \
                              30.3285 32.1245 30.5117Z',
              fill="white"
            )
            circle(
              cx="28",
              cy="28",
              r="27.3",
              stroke="white",
              stroke-opacity="0.48",
              stroke-width="1.4"
            )
        a.footer__button(href="#")
          svg(
            width="56",
            height="56",
            viewbox="0 0 56 56",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              d='M35.1831 24.2508C35.0102 23.6082 34.5036 23.1016 33.8611 22.9286C32.6873 22.6074\
                              27.992 22.6074 27.992 22.6074C27.992 22.6074 23.2969 22.6074 22.1231 22.9164C21.493\
                              23.0893 20.9739 23.6083 20.8011 24.2508C20.4922 25.4245 20.4922 27.8586 20.4922\
                              27.8586C20.4922 27.8586 20.4922 30.305 20.8011 31.4664C20.9741 32.1089 21.4806\
                              32.6155 22.1232 32.7885C23.3093 33.1098 27.9922 33.1098 27.9922 33.1098C27.9922\
                              33.1098 32.6873 33.1098 33.8611 32.8008C34.5037 32.6279 35.0102 32.1213 35.1833\
                              31.4788C35.4921 30.305 35.4921 27.871 35.4921 27.871C35.4921 27.871 35.5045 25.4245\
                              35.1831 24.2508ZM26.4971 30.1073V25.6099L30.4015 27.8586L26.4971 30.1073Z',
              fill="white"
            )
            circle(
              cx="28",
              cy="28",
              r="27.3",
              stroke="white",
              stroke-opacity="0.48",
              stroke-width="1.4"
            )
        a.footer__button(href="https://www.instagram.com/wdc_dental_clinic/")
          svg(
            width="56",
            height="56",
            viewbox="0 0 56 56",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              d='M35.9906 24.7036C35.9531 23.8534 35.8156 23.2689 35.6186 22.7625C35.4154 22.2249\
                              35.1028 21.7436 34.6932 21.3435C34.293 20.9372 33.8085 20.6215 33.277 20.4215C32.7675\
                              20.2245 32.186 20.0871 31.3357 20.0496C30.479 20.0089 30.2071 19.9995 28.0344 19.9995C25.8616\
                              19.9995 25.5897 20.0089 24.7362 20.0464C23.8859 20.0839 23.3013 20.2215 22.7949 20.4183C22.2571\
                              20.6215 21.7757 20.934 21.3755 21.3435C20.9691 21.7436 20.6534 22.2281 20.4533 22.7595C20.2563\
                              23.2689 20.1188 23.8502 20.0813 24.7004C20.0407 25.5569 20.0312 25.8288 20.0312 28.0011C20.0312\
                              30.1734 20.0407 30.4453 20.0781 31.2986C20.1156 32.1487 20.2533 32.7332 20.4502 33.2396C20.6534\
                              33.7772 20.9691 34.2585 21.3755 34.6586C21.7757 35.065 22.2603 35.3807 22.7917 35.5807C23.3013\
                              35.7776 23.8827 35.9151 24.7332 35.9526C25.5865 35.9902 25.8586 35.9995 28.0313 35.9995C30.204\
                              35.9995 30.476 35.9902 31.3295 35.9526C32.1798 35.9151 32.7644 35.7776 33.2708 35.5807C34.3463\
                              35.165 35.1966 34.3148 35.6124 33.2396C35.8092 32.7301 35.9469 32.1487 35.9844 31.2986C36.0218\
                              30.4453 36.0312 30.1734 36.0312 28.0011C36.0312 25.8288 36.0281 25.5569 35.9906 24.7036ZM34.5495\
                              31.2361C34.515 32.0175 34.3838 32.4394 34.2743 32.7207C34.0054 33.4178 33.4521 33.971 32.7549\
                              34.2398C32.4736 34.3492 32.0485 34.4805 31.27 34.5148C30.4259 34.5524 30.1728 34.5617 28.0375\
                              34.5617C25.9023 34.5617 25.646 34.5524 24.805 34.5148C24.0234 34.4805 23.6014 34.3492 23.32\
                              34.2398C22.9731 34.1116 22.6573 33.9085 22.4009 33.6428C22.1352 33.3834 21.932 33.0708 21.8038\
                              32.7239C21.6944 32.4426 21.5631 32.0175 21.5288 31.2393C21.4912 30.3953 21.4819 30.1421 21.4819\
                              28.0073C21.4819 25.8725 21.4912 25.6162 21.5288 24.7755C21.5631 23.9941 21.6944 23.5721 21.8038\
                              23.2908C21.932 22.9438 22.1352 22.6282 22.4041 22.3718C22.6635 22.1061 22.9761 21.903 23.3232\
                              21.7749C23.6045 21.6655 24.0298 21.5342 24.8081 21.4998C25.6522 21.4623 25.9055 21.4529 28.0406\
                              21.4529C30.179 21.4529 30.4321 21.4623 31.2732 21.4998C32.0547 21.5342 32.4768 21.6655 32.7581\
                              21.7749C33.1051 21.903 33.4209 22.1061 33.6772 22.3718C33.9429 22.6313 34.1461 22.9438 34.2743\
                              23.2908C34.3838 23.5721 34.515 23.9971 34.5495 24.7755C34.587 25.6194 34.5964 25.8725 34.5964\
                              28.0073C34.5964 30.1421 34.587 30.3922 34.5495 31.2361Z',
              fill="white"
            )
            path(
              d='M28.0344 23.8911C25.7649 23.8911 23.9235 25.732 23.9235 28.0013C23.9235 30.2705 25.7649 \
                              32.1115 28.0344 32.1115C30.3041 32.1115 32.1454 30.2705 32.1454 28.0013C32.1454 25.732 \
                              30.3041 23.8911 28.0344 23.8911ZM28.0344 30.6675C26.5621 30.6675 25.3677 29.4735 25.3677\
                              28.0013C25.3677 26.5291 26.5621 25.3351 28.0344 25.3351C29.5069 25.3351 30.7011 26.5291\
                              30.7011 28.0013C30.7011 29.4735 29.5069 30.6675 28.0344 30.6675Z',
              fill="white"
            )
            path(
              d='M33.2688 23.7286C33.2688 24.2585 32.8391 24.6881 32.309 24.6881C31.779 24.6881 31.3492\
                              24.2585 31.3492 23.7286C31.3492 23.1986 31.779 22.769 32.309 22.769C32.8391 22.769 33.2688\
                              23.1986 33.2688 23.7286Z',
              fill="white"
            )
            circle(
              cx="28",
              cy="28",
              r="27.3",
              stroke="white",
              stroke-opacity="0.48",
              stroke-width="1.4"
            )
    hr.footer__separate
    .footer__info
      .footer__links
        .footer__links__nav
          NuxtLink(to="/services/detskaya_stomatologiya") Услуги и цены
          a(href="#") О клинике
          a(href="#") Наши врачи
          a(href="#") Статьи
          a(href="#") Контакты
        hr.footer__separate.footer__separate--mobile
        .footer__links__policy
          a(href="#") Политика конфиденциальности
      .footer__copyright
        span West Dental Clinic
        span Copyright &copy; 2017-2020
</template>

<style lang="scss">
footer {
  background-color: $primary-black;
}

#map {
  position: relative;
  width: 100%;
  height: 768px;
  outline: #ffffff;
}

.map__navigation {
  position: relative;
  top: 164px;
  left: 48px;
  width: 389px;
  height: 438px;
  padding: 48px;
  border-radius: 10px;
  box-shadow: 40px;
  box-sizing: border-box;
  background-color: #ffffff;
  z-index: 2;
}

.map__navigation__invite {
  max-width: 277px;
  font-family: "MontserratBold";
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 20px 0;
  color: #272727;
}

.map__navigation__input {
  position: relative;
  padding-bottom: 20px;
  width: 100%;
  margin: 0 0 32px 0;
  border-bottom: 1px solid rgba(39, 39, 39, 0.24);
  border-top: none;
  border-left: none;
  border-right: none;
}

.map__navigation__action {
  display: block;
  width: 100%;
  height: 46px;
  border: 1px solid rgba(39, 39, 39, 0.24);
  border-radius: 4px;
  font-family: "MontserratSemiBold";
  background-color: #ffffff;
  transition: background-color 120ms;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 40px 0;
  cursor: pointer;
  color: $primary-black;
  margin-bottom: 33px;

  &:hover {
    background-color: $primary-black;
    color: #ffffff;
  }
}

.map__navigation__info {
  width: 251px;
  margin: 0 auto;
  color: $primary-grey;
}

.map__navigation__info__text {
  margin: 0;
  line-height: 24px;
  font-size: 14px;
  font-family: "MontserratRegular";
  color: $primary-grey;
}

.map__navigation__input:focus {
  outline: none;
}

.map__marker {
  background-image: url("~assets/img/map_marker_big.svg");
  background-size: cover;
  width: 80px;
  height: 87px;
}

.footer {
  height: 269px;
  max-width: $container--main-width;
  margin: 0 auto;
}

.clinics-info {
  &__address {
    & > a {
      color: $primary-black;
    }
    &:before {
      position: relative;
      bottom: 1px;
      content: url("~assets/img/map_marker_footer.svg");
      margin-right: 8px;
    }
  }
  &__work-hours__title {
    line-height: 24px;
    font-size: 14px;
    color: $primary-black;
    font-family: "MontserratMedium";
    margin: 0;
  }
}

.clinics-info--mobile {
  background-color: #ffffff;
  display: none;
  padding: 48px 0 20px;
  font-family: "MontserratRegular";
  font-size: 14px;

  &__title {
    margin: 0 0 16px 12px;
    line-height: 24px;
    font-family: "MontserratSemiBold";
  }

  &__address {
    margin-left: 12px;
    & > a {
      color: $primary-black;
    }
    &:before {
      position: relative;
      bottom: 1px;
      content: url("~assets/img/map_marker_footer.svg");
    }
  }
}

.clinics-info--mobile__work-hours {
  position: relative;
  margin-left: 39px;
  &__title {
    color: $primary-black;
    font-family: "MontserratMedium";
    margin: 0;
    line-height: 24px;
  }
  &__content {
    line-height: 24px;
    color: $primary-grey;
    margin: 0;
  }
}

.address-input {
  position: relative;
  &__label {
    position: absolute;
    left: 0;
    font-size: 14px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
    opacity: 0.56;
    font-family: "MontserratRegular";
  }
  &__field {
    height: 32px;
    width: 100%;
    &:focus + .address-input__label {
      transform: translate3d(0, -12px, 0);
    }
    border: 1px solid rgba(39, 39, 39, 0.24);
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 32px;
  }
}

.address-input--mobile {
  display: none;
  position: relative;
  padding: 32px 16px;
  background-color: #ffffff;

  &__label {
    position: absolute;
    left: 16px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
    opacity: 0.56;
    font-family: "MontserratRegular";
  }
  &__field {
    height: 32px;
    width: 100%;
    &:focus + .address-input--mobile__label {
      transform: translate3d(0, -10px, 0);
    }
    border: 1px solid rgba(39, 39, 39, 0.24);
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 32px;
  }
  &__btn {
    display: block;
    color: $primary_black;
    font-family: "MontserratSemiBold";
    background-color: white;
    cursor: pointer;
    transition: background-color 180ms;
    border-radius: 2px;
    border: 1px solid rgba(39, 39, 39, 0.56);
    width: 100%;
    height: 48px;

    &:hover {
      color: #ffffff;
      background-color: $primary-black;
    }
  }
}

.footer__nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 152px;
  padding: 48px 0;
}

.footer__button {
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  color: initial;
  border: initial;
  height: 56px;
  border-radius: 27.3px;
  transition-property: background-color;
  transition-duration: 180ms;
  cursor: pointer;
  overflow: hidden;
  &:hover > svg > path {
    fill: $primary-color;
  }
  &:hover {
    background-color: #ffffff;
  }
}

.footer__nav__social {
  & > * + * {
    margin-left: 12px;
  }
}

.footer__nav__arrow-up {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.footer__separate {
  margin: 0 0 32px 0;

  &--mobile {
    display: none;
  }
}

.footer__links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  & > div > a {
    color: rgba(255, 255, 255, 0.56);
    font-family: "MontserratRegular";
    font-size: 14px;
    line-height: 20px;
  }
}

.footer__links__nav {
  & > * + * {
    margin-left: 32px;
  }
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
  font-family: "MontserratRegular";
  font-size: 14px;

  & > span {
    color: rgba(255, 255, 255, 0.64);
    font-size: 14px;
    line-height: 20px;
  }
}

.mapbox-form-label {
  display: none;
}

.mapboxgl-ctrl-geocoder {
  font: initial;
  font-family: 'MontserratRegular';
  font-size: 14px;
  margin-bottom: 32px;
  margin-left: 0;
  margin-right: 0;
  min-width: 100%;

  input[type='text'] {
    font-family: 'MontserratRegular';
    border: none;
    border-bottom: 1px solid rgba(39,39,39,.24);
    color: $primary-black;
    opacity: 0.64;
    font-size: 14px;
    padding: 0;
  }
}

.mapboxgl-ctrl-geocoder ul > li > a {
  color: $primary-black;
}

.geocoder-icon-close {
  background-image: url("~assets/img/mapbox_close.svg");
}

.mapboxgl-ctrl-geocoder .geocoder-pin-right * {
  right: 0;
}

.directions-icon {
  display: none;
}

#mapbox-directions-destination-input {
  display: none;
}

@media only screen and (max-width: 768px) {
  #map {
    height: 229px;
  }

  .map__marker {
    width: 41px;
    height: 45px;
  }

  .footer {
    height: auto;
    margin: 0 16px;
  }

  .footer__nav {
    height: 88px;
    margin: 0;
    padding: 24px 0;
  }

  .clinics-info--mobile,
  .address-input--mobile {
    display: block;
  }

  .footer__nav__social {
    transform-origin: top right;
    // scale button from 56px to 40px size
    transform: scale(0.7143);
    & > * + * {
      margin-left: 8px;
    }
  }

  .footer__separate {
    margin: 0 0 24px 0;

    &--mobile {
      display: block;
    }
  }

  .footer__links {
    display: block;

    & > div > a {
      display: block;
    }
  }

  .footer__links__policy {
    margin-bottom: 16px;
  }

  .footer__links__nav {
    display: block;
    margin-bottom: 24px;

    & > a {
      display: block;
      margin-left: 0;
    }

    & > a + a {
      margin-top: 16px;
    }
  }

  .footer__nav__arrow-up,
  .map__navigation {
    display: none;
  }

  .footer__copyright {
    padding-bottom: 32px;

    & > span {
      color: rgba(255, 255, 255, 0.4);
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      map: null,
      mapboxDirections: null,
      mobileViewQuery: null,
      isMobile: true,
    }
  },
  methods: {
    routed() {
      let htmlGeocoderInput = document.querySelector('#geocoder-desktop > .mapboxgl-ctrl-geocoder > input');
      this.mapboxDirections.actions.queryOrigin(htmlGeocoderInput.value);
    },
    routedMobile() {
      let htmlGeocoderInput = document.querySelector('#geocoder-mobile > .mapboxgl-ctrl-geocoder > input');
      this.mapboxDirections.actions.queryOrigin(htmlGeocoderInput.value);
    }
  },
  mounted() {
    var self = this;
    this.mobileViewQuery = window.matchMedia("(max-width: 768px)");
    this.isMobile = this.mobileViewQuery.matches;
    this.mobileViewQuery.addListener(() => {
      this.isMobile = this.mobileViewQuery.matches
    });
    setTimeout(function () {
      let mapbox = document.createElement("script");
      let mapboxDirections = document.createElement("script");
      mapboxDirections.setAttribute("defer", "true");
      mapbox.setAttribute("defer", "true");

      mapbox.src = "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";
      mapboxDirections.src =
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js";

      document.head.append(mapbox);
      document.head.append(mapboxDirections);

      mapbox.onload = function () {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiZXdld2UiLCJhIjoiY2tmcGh0a3A1MGk1bTJxcGExdnk5cTJueSJ9.OefbX4ZLtzl9fYi25uHVGw";

        var map = new mapboxgl.Map({
          language: "ru",
          container: "map",
          center: [37.424905, 55.737923],
          zoom: 16,
          style: "mapbox://styles/ewewe/ckfv0xc350aqx1as79qa4had3",
        });
        map.scrollZoom.disable();

        var markerEl = document.createElement("div");
        markerEl.className = "map__marker";

        var mapDirections = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric",
          interactive: false,
          controls: {
            instructions: false,
            profileSwitcher: false,
          },
          geocoder: {
            language: "ru",
            country: "ru",
            bbox: ['33.495123','54.241851','40.570318','58.244515']
          },
        });
        mapDirections.setDestination([37.424905, 55.737923]);
        self.mapboxDirections = mapDirections;

        self.mapControls = new mapboxgl.NavigationControl();

        map.addControl(self.mapControls);
        map.addControl(mapDirections, "top-left");

        let htmlGeocoder = document.querySelector('.mapboxgl-ctrl-geocoder');

        if (self.isMobile === true) {
          document.querySelector('#geocoder-mobile').appendChild(htmlGeocoder);
          let htmlGeocoderInputMobile = document.querySelector('#geocoder-mobile > .mapboxgl-ctrl-geocoder > input');
          htmlGeocoderInputMobile.setAttribute('spellcheck', 'false');
          htmlGeocoderInputMobile.setAttribute('placeholder', 'Введите адрес');
        } else {
          document.querySelector('#geocoder-desktop').appendChild(htmlGeocoder);
          let htmlGeocoderInput = document.querySelector('#geocoder-desktop > .mapboxgl-ctrl-geocoder > input');
          htmlGeocoderInput.setAttribute('placeholder', 'Введите адрес');
          htmlGeocoderInput.setAttribute('spellcheck', 'false');
        }

        let mapButton = document.querySelector('.map__navigation__action');

        var marker = new mapboxgl.Marker(markerEl)
          .setLngLat([37.424905, 55.737923])
          .addTo(map);
        self.map = map;
      };
    }, 3500);
  },
};
</script>