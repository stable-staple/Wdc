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
          title: "Импланты и протезы",
          href: "/services/implanty_i_protezy",
          img: '/img/services/implanty.png'
        },
        {
          title: "Детская стоматология",
          href: "/services/detskaya_stomatologiya",
          img: '/img/services/children_dent.png'
        },
        {
          title: "Лечение зубов",
          href: "/services/lechenie_zubov",
          img: '/img/services/treatment.png'
        },
        {
          title: "Удаление и реставрация",
          href: "/services/udalenie_i_restavratsiya",
          img: '/img/services/udalenie.png'
        },
        {
          title: "Виниры и люминиры",
          href: "/services/viniry_i_luminiry",
          img: '/img/services/viniry.png'
        },
        {
          title: "Отбеливание и гигиена",
          href: "/services/otbelivanie_i_gigiena",
          img: '/img/services/otbelivanie.png'
        },
        {
          title: "Исправление прикуса",
          href: "/services/ispravlenie_prikusa",
          img: '/img/services/overbite_fix.png'
        },
        {
          title: "Осмотр и консультация",
          href: "/services/osmotr_i_konsultatsiya",
          img: '/img/services/consulting.png'
        }
      ],
      servicesSection: [
        {
          name: "Детская стоматология",
          description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                        детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                        различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
          servicesList: [
            {
              name: "Психологическая адаптация к стоматологическому приему детей",
              price: "1 500 ₽"
            },
            {
              name: "Постановка пломбы светового отверждения (молочный зуб)",
              price: "1 500 ₽"
            },
            {
              name: "Постановка пломбы светового отверждения (коренной зуб)",
              price: "1 500 ₽"
            },
            {
              name: "Удаление зубных отложений щеткой с профилактической пастой",
              price: "1 500 ₽"
            },
            {
              name: "Неинвазивный метод лечения Icon",
              price: "1 500 ₽"
            },
            {
              name: "Удаление молочного зуба 2-3 степени подвижности",
              price: "1 500 ₽"
            },
            {
              name: "Удаление молочного зуба с сохраненными корнями",
              price: "1 500 ₽"
            }
          ]
        },
        {
          name: "Лечение зубов",
          description: "",
          servicesList: [
            {
              name: "Восстановление зуба пломбой с использованием материалов из фотоп.",
              price: "4 900 ₽"
            },
            {
              name: "Эндодонтическое лечение (лечение корневого канала зуба)",
              price: "1 500 ₽"
            },
            {
              name: "Лечение периодонтита",
              price: "1 500 ₽"
            },
            {
              name: "Эстетическая реставрация",
              price: "1 500 ₽"
            },
            {
              name: "Нехирургическое лечение при заболеваниях пародонта",
              price: "1 500 ₽"
            }
          ]
        },
        {
          name: "Импланты и протезы",
          description: "",
          servicesList: [
            {
              name: "Установка имплантата Straumann",
              price: "55 000 ₽",
            },
            {
              name: "Установка мини-имплатата MDI",
              price: "25 000 ₽"
            },
            {
              name: "Операция направленной регенерации кости (НРК)",
              price: "48 000 ₽"
            },
            {
              name: "Операция открытого синус-лифтинга",
              price: "47 000 ₽"
            },
            {
              name: "Операция закрытого синус-лифтинга",
              price: "22 000 ₽"
            }
          ]
        },
        {
          name: "Удаление и реставрация"
        },
        {
          name: "Виниры и люминиры"
        },
        {
          name: "Отбеливание и гигиена"
        },
        {
          name: "Исправление прикуса"
        },
        {
          name: "Осмотр и консультация"
        }
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
    margin-bottom: 48px;
    color: $primary-black;
    font-family: 'MontserratRegular';
    font-size: 14px;
    line-height: 20px;
  }
  &__img {
    margin: 0 0 32px 0;
    max-width: 100%;
    height: 494px;
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
  font-family: 'MontserratRegular';
  font-size: 48px;
  line-height: 56px;
  color: $primary-black;
  margin: 0 0 24px 0;

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
  padding-right: 49px;
  cursor: pointer;
  height: 72px;
  border-radius: 6px;
  display: flex;

  & > span {
    color: $primary-black;
    width: 100%;
    align-self: center;
    font-size: 16px;
  }
  &:hover {
    background: #F8F8F8;
  }
  &:hover .service__price:after {
    opacity: 1;
  }
}

li {
  position: relative;
}

.service__price {
  float: right;
  font-family: 'MontserratBold';
  font-style: normal;
  &:after {
    content: url('~assets/img/arrow_right_black.svg');
    fill: $primary-black;
    margin-left: 16px;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }
}

.services__right {
  position: sticky;
  align-self: flex-start;
  top: 80px;
}

.services__right__title {
  font-family: 'MontserratSemiBold';
  font-size: 20px;
  margin-bottom: 20px;
  color: $primary-black;
}

.service-section__desc {
  margin: 0 0 40px 0;
  font-family: 'MontserratRegular';
  font-size: 16px;
  line-height: 32px;
  max-height: 159px;
  transition: max-height 300ms;
  overflow: hidden;
  color: $primary-black;
}

.service-section__desc--open {
  max-height: 320px;
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
  font-size: 14px;
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
    background: #F8F8F8;
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
 padding: 14px 20px;
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

@media only screen and (max-width: 768px) {
  .service-section__sep {
    margin: 40px 0;
  }

  .service-section__desc {
    margin: 0 0 24px 0;
    font-size: 13px;
    line-height: 24px;
    opacity: 0.72;
    max-height: 69px;
    overflow: hidden;
    transition: max-height 300ms;
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
    line-height: 18px;
    & > span {
      font-size: 12px;
    }
    box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.01),
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px -2px 6px rgba(0, 0, 0, 0.02), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
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
}

</style>