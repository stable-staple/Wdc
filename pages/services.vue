<template lang="pug">
div
  .services-block
    NuxtChild
    .services__right
      div.services__right__title Другие услуги
      .services-sections-list
        .services-sections-list__elem(
          v-for="(section, ind) in this.filteredSidebar"
          :key="section.title"
          )
            img.services-sections-list__elem__img(:src="section.img", width="36", height="36") 
            NuxtLink(:to="section.href" class="services-sections-list__elem__link") {{ section.title }}
</template>

<script>
export default {
  scrollToTop: true,
  data: function() {
    return {
      modalOpened: false,
      modalTitle: null,
      currentSection: 0,
      sidebar: [
        {
          title: "Имплантация",
          href: "/services/implantacija",
          img: '/img/services/implanty.png'
        },
        {
          title: "Детская стоматология",
          href: "/services/detskaya-stomatologiya",
          img: '/img/services/children_dent.png'
        },
        {
          title: "Лечение зубов",
          href: "/services/lechenie-zubov",
          img: '/img/services/treatment.png'
        },
        {
          title: "Реставрация зубов",
          href: "/services/restavracija-zubov",
          img: '/img/services/restavracija.png'
        },
        {
          title: "Виниры и люминиры",
          href: "/services/viniry-i-luminiry",
          img: '/img/services/viniry.png'
        },
        {
          title: "Отбеливание и гигиена",
          href: "/services/otbelivanie-i-gigiena",
          img: '/img/services/otbelivanie.png'
        },
        {
          title: "Исправление прикуса",
          href: "/services/ispravlenie-prikusa",
          img: '/img/services/overbite_fix.png'
        },
        {
          title: "Осмотр и консультация",
          href: "/services/osmotr-i-konsultatsiya",
          img: '/img/services/consulting.png'
        },
        {
          title: "Удаление зубов",
          href: "/services/udalenie-zubov",
          img: '/img/services/udalenie_zubov.png'
        },
        {
          title: "Протезирование",
          href: "/services/protezirovanie",
          img: '/img/services/protezirovanie.png'
        },
      ]
    }
  },
  computed: {
    filteredSidebar: function() {
      let self = this;
      return this.sidebar.filter(function (obj) {
        return obj.href !== self.$route.path;
      });
    }
  }
}
</script>

<style lang="scss">
.services-block {
  margin-top: 80px;
  margin-bottom: 96px;
  display: flex;
}

.service-info {
  width: auto;
  margin-right: 65px;
  &__breadcrumbs {
    display: block;
    margin-bottom: 40px;
    color: $primary-black;
    font-family: 'MontserratRegular';
    font-size: 14px;
    line-height: 20px;
  }
  &__img {
    margin: 0 0 32px 0;
    max-width: 100%;
    max-height: 494px;
  }
  &__more {
    display: inline-block;
    color: $primary-black;
    font-family: 'MontserratBold';
    height: 45px;
    width: 198px;
    border-radius: 2px;
    background-color: $primary-grey-light;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.8;
    cursor: pointer;
    &:after {
      content: url('~assets/img/arrow_down_black.svg');
      margin-left: 8px;
    }
  }
  &__title {
    margin: 0 0 32px 0;
    color: $primary-black;
    font-family: 'MontserratSemiBold';
    font-size: 40px;
    line-height: 48px;
  }
}

.breadcrumbs__link {
  color: $primary-black;
  opacity: 0.48;
}

.services-block__title-wrapper {
  display: block;
}

.services-block__title {
  font-family: 'MontserratSemiBold';
  font-size: 40px;
  line-height: 48px;
  color: $primary-black;
  margin: 0 0 18px 0;

  &__img {
    position: relative;
    bottom: 5px;
  }
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list__elem {
  font-family: 'MontserratRegular';
  cursor: pointer;
  min-height: 24px;
  max-height: 84px;
  padding: 20px 32px 20px 24px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;

  & > span {
    color: $primary-black;
    align-self: center;
    line-height: 24px;
  }
  & > .service__desc {
    font-size: 14px;
  }
  &:hover {
    background: #F8F8F8;
  }
  &:hover .service__price:after {
    opacity: 1;
  }
}

.service-desc--sleep {
  &:before {
    position: relative;
    top: 3.5px;
    content: url('~assets/img/services/vo_sne.svg');
    fill: $primary-black;
    margin-right: 4px;
    vertical-align: middle;
  }
  line-height: 24px;
}

li {
  position: relative;
}

.service__price {
  font-size: 16px;
  font-family: 'MontserratBold', cursive;
  font-style: normal;
  &:after {
    content: url('~assets/img/arrow_right_black.svg');
    fill: $primary-black;
    margin-left: 24px;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }
}

.service__landing-more {
  font-family: 'MontserratSemiBold', serif;
  font-size: 14px;
}

.services__right {
  position: sticky;
  align-self: flex-start;
  top: 35px;
}

.services__right__title {
  font-family: 'MontserratSemiBold', serif;
  font-size: 20px;
  margin-bottom: 20px;
  color: $primary-black;
}

.service-section__desc {
  margin: 0 0 40px 0;
  font-family: 'MontserratRegular';
  font-size: 16px;
  line-height: 32px;
  overflow: hidden;
  color: $primary-black;
}

.service-section__sep {
  margin: 88px 0;
}

// Для десктопа
.services-sections-list {
  padding: 0;
  top: 140px;
  list-style: none;
  min-width: 394px;
  font-size: 13px;
  margin: 0 0 32px 0;
  border-radius: 10px;
  & > * + * {
    margin-top: 10px;    
  }
}

.services-sections-list__elem {
  display: block;
  height: 4.5em;
  padding-left: 20px;
  line-height: 4.5em;
  cursor: pointer;
  font-family: 'MontserratSemiBold';
  position: relative;
  color: $primary-black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.02),
              0 10px 40px rgba(0, 0, 0, 0.04),
              0 2px 6px rgba(0, 0, 0, 0.04),
              0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &--active {
    background: #F8F8F8;
    
    &:hover:after {
      opacity: 0;
    }
  }
  &:after {
    content: url('~assets/img/arrow_right.svg');
    float: right;
    margin-right: 50px;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }
}

.services-sections-list__elem__img {
  vertical-align: middle;
}

.services-sections-list__elem__link {
  color: $primary-black;
  padding-left: 16px;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }
}

.services-sections-apply {
 background: $primary-grey-light;
 border-radius: 2px;
 padding: 14px 60px;
 margin-top: 48px;

 &__desc {
   font-family: 'MontserratRegular';
   font-size: 14px;
   line-height: 24px;
   margin: 0;
   color: $primary-black;
   & > a {
     color: $primary-black;
     font-weight: bold;
   }
 }
}

.services-block__select {
  display: none;
}

.margin-right-del {
  margin-right: -80px;
}

.service__desc {
  width: 80%;
}

@media only screen and (max-width: 768px) {
  .services-sections-apply {
    padding: 16px;
  }
  .service-section__sep {
    margin: 40px 0;
  }

  .service-section__desc {
    margin: 0 0 24px 0;
    font-size: 13px;
    line-height: 24px;
    opacity: 0.72;
    overflow: hidden;
  }

  .service-section__desc--open {
    max-height: 600px;
  }

  .services-block {
    display: block;
    margin: 0;
  }

  .service-info {
    width: 100%;
  }

  .service-info__more {
    width: 100%;
  }

  .services-block__select {
    display: initial;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: $primary-black;
    font-size: 16px;
    padding: 20px 15px;
    font-family: 'MontserratSemiBold', serif;
    color: #ffffff;
    border: none;
    width: calc(100% + 30px);
    background-image: url("~assets/img/arrow_down_white.svg");
    background-repeat: no-repeat, repeat;
    background-position: right 16px top 40%, 0 0;
    background-size: 14px auto, 100%;
    margin: 0 -15px;
  }


  .services__right,
  .services-block__title {
    display: none;
  }

  .service__price {
    float: none;
    display: block;
    border-top: 1px solid;
    border-top-color: rgba(39, 39, 39, 0.08);
    margin: 10px -12px 0;
    padding: 10px 12px 0;
    font-size: 12px !important;
    &:after {
      float: right;
      opacity: 1;
    }
  }

  .services-list {
    & > * + * {
      margin-top: 12px;
    }
  }

  .services-list__elem {
    font-family: 'MontserratMedium';
    height: auto;
    padding: 12px;
    min-height: initial;
    max-height: initial;
    display: block;
    line-height: 18px;
    & > span {
      font-size: 12px;
      display: block;
      line-height: 18px;
    }
    box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.01),
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px -2px 6px rgba(0, 0, 0, 0.02), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    & > .service__desc {
      font-size: 12px;
    }
  }

  .services-block__title-wrapper {
    display: flex;
    justify-content: space-between;
    background: $primary-black;
    margin: 0 -15px;
    padding: 0 15px;
  }

  .services-block__title {
    font-size: 16px;
    background-color: $primary-black;
    line-height: 60px;
    margin: 0;
    color: #ffffff;
  }

  .service-info__breadcrumbs {
    display: none;
  }

  .service-info__title {
    font-size: 22px;
    line-height: 28px;
  }

  .service__desc {
    width: auto;
    font-size: 12px;
  }
}

</style>