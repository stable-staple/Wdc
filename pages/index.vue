<template lang="pug">
  main
    MainSlideshow
    .main__services
      .main__services-row
        ServiceCard(desc="Имплантация" price="от 25 000 ₽" img="/img/services/implanty.png" route="implantacija")
        ServiceCard(desc="Лечение зубов" price="от 8 000 ₽" img="/img/services/treatment.png" route="lechenie-zubov")
        ServiceCard(desc="Реставрация зубов" price="от 2 500 ₽" img="/img/services/restavracija.png" route="restavracija-zubov")
        ServiceCard(desc="Виниры и люминиры" price="от 39 000 ₽" img="/img/services/viniry.png" route="viniry-i-luminiry")
      .main__services-row
        ServiceCard(desc="Отбеливание и гигиена" price="от 2 000 ₽" img="/img/services/otbelivanie.png" route="otbelivanie-i-gigiena")
        ServiceCard(desc="Исправление прикуса" price="от 40 000 ₽" img="/img/services/overbite_fix.png" route="ispravlenie-prikusa")
        ServiceCard(desc="Осмотр и диагностика" price="от 2 500 ₽" img="/img/services/consulting.png" route="osmotr-i-konsultatsiya")
        ServiceCard(desc="Детская стоматология" price="от 1 500 ₽" img="/img/services/children_dent.png" route="detskaya-stomatologiya")
      .main__services-row
        ServiceCard(desc="Удаление зубов" price="от 2 500 ₽" img="/img/services/consulting.png" route="udalenie-zubov")
        ServiceCard(desc="Протезирование" price="от 25 000 ₽" img="/img/services/protezirovanie.png" route="osmotr-i-konsultatsiya")
    hr.full-bleed
    AboutUsSlideshow(id="about_us")
    hr.full-bleed
    DoctorsSlides(id="doctors")
    hr.full-bleed
    Reviews(id="reviews")
    hr.full-bleed
    Partners
    hr.full-bleed
</template>

<script>

export default {
  name: 'index',
  head() {
    return {
      title: "Центр стоматологии и имплантологии в Москве"
    };
  },
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