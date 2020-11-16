<template lang="pug">
  div
    Navbar
    div(class="container--main")
      Nuxt
    Footer
</template>

<style lang="scss">
  body {
    margin: 0 !important;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
  
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
 
  @font-face {
    font-family: 'MontserratRegular';
    src: url('~assets/fonts/Montserrat-Regular.woff2') format('woff2'),
         url('~assets/fonts/Montserrat-Regular.woff') format('woff'),
         url('~assets/fonts/Montserrat-Regular.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MontserratMedium';
    src: url('~assets/fonts/Montserrat-Medium.woff2') format('woff2'),
         url('~assets/fonts/Montserrat-Medium.woff') format('woff'),
         url('~assets/fonts/Montserrat-Medium.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'MontserratBold';
    src: url('~assets/fonts/Montserrat-Bold.woff2') format('woff2'),
         url('~assets/fonts/Montserrat-Bold.woff') format('woff'),
         url('~assets/fonts/Montserrat-Bold.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MontserratSemiBold';
    src: url('~assets/fonts/Montserrat-SemiBold.woff2') format('woff2'),
         url('~assets/fonts/Montserrat-SemiBold.woff') format('woff'),
         url('~assets/fonts/Montserrat-SemiBold.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  button {
    border: none;
    background: none;
    padding: 0;
  }

  button:focus, input:focus {
    outline: 0;
  }

  hr {
    opacity: 0.32;
    height: 2px;
    color: #DDDBDB;
    background-color: #DDDBDB;
  }

  //* {
  //  outline: 1px solid red;
  //}

  .container--main {
    margin: 0 auto;
    max-width: $container--main-width;
  }

  @media only screen and (max-width: 768px) {
    .container--main {
      margin: 0 15px;
      width: auto;
    }
  }

  .full-bleed {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin: 0 -50vw;
  }

  .primary_heading {
    font-family: 'MontserratMedium';
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
  }

  .secondary_heading {
    font-family: 'MontserratSemiBold';
    font-size: 48px;
    line-height: 52px;
    font-weight: 600;
  }

  .primary_desc {
    font-family: 'MontserratRegular';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .medium_header {
    font-family: 'MontserratMedium';
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
  }

  .card_heading {
    font-family: 'MontserratBold';
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
  }

  .card_desc {
    font-family: 'MontserratRegular';
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
  }

  .button--more {
    font-family: 'MontserratSemiBold';
    font-size: 14px;
    margin: 0;
    height: 44px;
    width: 247px;
    border: 1px solid rgba(255, 255, 255, 0.64);
    border-radius: 2px;
    color: #ffffff;
    background: transparent;
    transition: background-color 180ms;
    cursor: pointer;

    &:hover {
      color: $primary-black;
      background-color: #ffffff;
    }
  }

  .glightbox-open {
    overflow: auto;
  }
</style>