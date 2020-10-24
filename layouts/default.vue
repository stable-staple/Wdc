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
    font-family: 'LitteraTextMedium';
    src: url('~assets/fonts/LitteraTextMedium.ttf') format("truetype");
  }

  @font-face {
    font-family: 'LitteraTextRegular';
    src: url('~assets/fonts/LitteraTextRegular.ttf') format("truetype");
  }

  @font-face {
    font-family: 'LitteraTextBold';
    src: url('~assets/fonts/LitteraTextBold.ttf') format("truetype");
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background: none;
    padding: 0;
  }

  button:focus {
    outline: 0;
  }

  hr {
    opacity: 0.3;
  }

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
    font-family: 'LitteraTextMedium';
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
  }

  .primary_desc {
    font-family: 'LitteraTextRegular';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .medium_header {
    font-family: 'LitteraTextMedium';
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
  }

  .card_heading {
    font-family: 'LitteraTextBold';
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
  }

  .card_desc {
    font-family: 'LitteraTextRegular';
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
  }

  .button--more {
    margin: 0;
    height: 45px;
    width: 215px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    background: white;
    cursor: pointer;
  }
</style>