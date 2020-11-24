<template lang="pug">
  main
    MainSlideshow
    .main__services
      .main__services-row
        ServiceCard(desc="Импланты и протезы" price="от 25 000 руб" img="/img/services/implanty.png" route="implanty_i_protezy")
        ServiceCard(desc="Лечение зубов" price="от 8 000 руб" img="/img/services/treatment.png" route="lechenie_zubov")
        ServiceCard(desc="Удаление и реставрация" price="от 2 500 руб" img="/img/services/udalenie.png" route="udalenie_i_restavratsiya")
        ServiceCard(desc="Виниры и люминиры" price="от 39 000 руб" img="/img/services/implanty.png" route="viniry_i_luminiry")
      .main__services-row
        ServiceCard(desc="Отбеливание и гигиена" price="от 2 000 руб" img="/img/services/otbelivanie.png" route="otbelivanie_i_gigiena")
        ServiceCard(desc="Исправление прикуса" price="от 40 000 руб" img="/img/services/overbite_fix.png" route="ispravlenie_prikusa")
        ServiceCard(desc="Осмотр и консультация" price="от 2 500 руб" img="/img/services/consulting.png" route="osmotr_i_konsultatsiya")
        ServiceCard(desc="Детская стоматология" price="от 1 500 руб" img="/img/services/children_dent.png" route="detskaya_stomatologiya")
    hr.full-bleed
    SpecialOffers
    hr.full-bleed
    AboutUsSlideshow
    hr.full-bleed
    DoctorsSlides
    hr.full-bleed
    Reviews
    hr.full-bleed
    Partners
    hr.full-bleed
</template>

<script>

export default {
  data: function() {
    return {
      navSizeObserver: null
    }
  },
  beforeDestroy() {
    const navbar = document.querySelector('nav');
    this.navSizeObserver.unobserve(navbar);
    navbar.classList.remove('nav--transparent');
  },
  mounted() {
    const navbar = document.querySelector('nav');
    this.navSizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (window.innerWidth >= 768) {
          navbar.classList.add('nav--transparent');
        } else {
          navbar.classList.remove('nav--transparent');
        }
      }
    });
    this.navSizeObserver.observe(navbar);
  }
}
</script>

<style lang="scss">
  .main__services-row {
    position: relative;
    bottom: 37px;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    z-index: 1;

    & > .service-card + .service-card {
      margin-left: 24px;
    }

    &:last-child {
      margin-bottom: calc(24px + 37px);
    }
  }

  @media only screen and (max-width: 768px) {
    .main__services-row {
      flex-direction: column;
      align-items: center;
      margin-bottom: 12px;
      bottom: 23px;

      & > .service-card + .service-card {
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }
</style>