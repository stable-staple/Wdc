<template lang="pug">
.services-block
  .services-block__modal(
      v-if="modalOpened"
      @click.self="modalOpened = false"
    )
    .services-block__modal__inner
      .close-modal(@click="modalOpened = false")
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          rect(x='0.75' y='1.81055' width='1.4' height='30.0003' transform='rotate(-45 0.75 1.81055)' fill='#272727')
          rect(x='21.9641' y='0.75' width='1.4' height='30.0003' transform='rotate(45 21.9641 0.75)' fill='#272727')
      h3.services-block__modal__title {{ modalTitle }}
      h4.services-block__modal__desc Записаться на прием
      form(service-block__modal__form)
        div(style="display: inline-block;")
          label.services-block__modal__label(for="name") Имя
          input.services-block__modal__field(type="text" name="name" spellcheck="false" required)
        div(style="display: inline-block;")
          label.services-block__modal__label(for="phone") Телефон
          input.services-block__modal__field.margin-right-del(type="text" name="phone" required)
        div(style="display: inline-block;")
          label.services-block__modal__label(for="phone") Дата
          input.services-block__modal__field(type="date" name="date")
        div(style="display: inline-block;")
          label.services-block__modal__label(for="phone") Время
          input.services-block__modal__field.margin-right-del(type="time")
        input(
          class="services-block__modal__field \
                services-block__modal__field--full-width"
          type="text" 
          placeholder="Ваше сообщение..."
          autocomplete="off"
        )
        button(class="services-sections-apply__apply-btn") Записаться на прием
        p(class="services-block__modal__confidential") Нажимая кнопку «Записаться на прием», вы соглашаетесь с конфиденциальностью персональной информации
  NuxtChild
  .services__right
    div.services__right__title Другие услуги
    .services-sections-list
      NuxtLink.services-sections-list__elem(
        v-for="(section, ind) in sidebar"
        :to="section.href"
        :class="{'services-sections-list__elem--active': currentSection == ind}"
        :key="section.title"
        ) {{ section.title}}
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
          title: "Детская стоматология",
          href: "/services/detskaya_stomatologiya"
        },
        {
          title: "Лечение зубов",
          href: "/services/lechenie_zubov"
        },
        {
          title: "Удаление и реставрация",
          href: "/services/udalenie_i_restavratsiya"
        },
        {
          title: "Виниры и люминиры",
          href: "/services/viniry_i_luminiry"
        },
        {
          title: "Отбеливание и гигиена",
          href: "/services/otbelivanie_i_gigiena"
        },
        {
          title: "Исправление прикуса",
          href: "/services/ispravlenie_prikusa"
        },
        {
          title: "Осмотр и консультация",
          href: "/services/osmotr_i_konsultatsiya"
        }
      ],
      servicesSection: [
        {
          name: "Детская стоматология",
          description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                        детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                        различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
          servicesList: [
            {
              name: "Психологическая адаптация к стоматологическому приему детей",
              price: "1 500 руб"
            },
            {
              name: "Постановка пломбы светового отверждения (молочный зуб)",
              price: "1 500 руб"
            },
            {
              name: "Постановка пломбы светового отверждения (коренной зуб)",
              price: "1 500 руб"
            },
            {
              name: "Удаление зубных отложений щеткой с профилактической пастой",
              price: "1 500 руб"
            },
            {
              name: "Неинвазивный метод лечения Icon",
              price: "1 500 руб"
            },
            {
              name: "Удаление молочного зуба 2-3 степени подвижности",
              price: "1 500 руб"
            },
            {
              name: "Удаление молочного зуба с сохраненными корнями",
              price: "1 500 руб"
            }
          ]
        },
        {
          name: "Лечение зубов",
          description: "",
          servicesList: [
            {
              name: "Восстановление зуба пломбой с использованием материалов из фотоп.",
              price: "4 900 руб"
            },
            {
              name: "Эндодонтическое лечение (лечение корневого канала зуба)",
              price: "1 500 руб"
            },
            {
              name: "Лечение периодонтита",
              price: "1 500 руб"
            },
            {
              name: "Эстетическая реставрация",
              price: "1 500 руб"
            },
            {
              name: "Нехирургическое лечение при заболеваниях пародонта",
              price: "1 500 руб"
            }
          ]
        },
        {
          name: "Импланты и протезы",
          description: "",
          servicesList: [
            {
              name: "Установка имплантата Straumann",
              price: "55 000 руб"
            },
            {
              name: "Установка мини-имплатата MDI",
              price: "25 000 руб"
            },
            {
              name: "Операция направленной регенерации кости (НРК)",
              price: "48 000 руб"
            },
            {
              name: "Операция открытого синус-лифтинга",
              price: "47 000 руб"
            },
            {
              name: "Операция закрытого синус-лифтинга",
              price: "22 000 руб"
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
  }
}
</script>

<style lang="scss">
.services-block {
  margin-top: 80px;
  margin-bottom: 96px;
  display: flex;
}

.services-block__modal {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; 
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__inner {
    position: absolute;
    padding: 56px 196px 102px 80px;
    width: 1050px;
    height: 674px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px 2px 6px rgba(0, 0, 0, 0.04), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    left: 50%;
    top: 50%;
    z-index: 6;
    transform: translate(-50%, -50%);
  }
  &__title {
    margin: 0 0 12px 0;
    color: $primary-black;
    font-family: 'MontserratMedium';
    font-weight: 500;
    font-size: 22px;
    line-height: 48px;
  }
  &__desc {
    font-family: 'MontserratRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 40px 0;
    color: #747376;
  }
  &__field {
    display: block;
    width: 331px;
    margin: 0 80px 24px 0;
    height: 41px;
    padding-bottom: 20px;
    border-style: none none solid none;
    border-bottom: solid 1px;
    // $primary-grey with applied opacity
    border-bottom-color: rgba(116, 115, 118, 0.32);
    &--full-width {
      width: 100%;
      margin-bottom: 56px;
    }
  }
  &__label {
    font-family: 'MontserratRegular';
    font-size: 12px;
    line-height: 24px;
    color: $primary-black;
  }
  &__confidential {
    color: $primary-grey;
    margin: 16px 0 0 0;
    opacity: 0.8;
    font-family: 'MontserratRegular';
    font-size: 12px;
    line-height: 24px;
  }
  input[type="text"] {
    font-family: 'MontserratMedium';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $primary-black;
  }
}

.close-modal {
  position: absolute;
  top: 40px;
  right: 48px;
  cursor: pointer;
}

.service-info {
  width: 100%;
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
  }
  &__more {
    display: inline-block;
    color: $primary-black;
    font-family: 'MontserratBold';
    height: 37px;
    width: 198px;
    border-radius: 2px;
    background-color: $primary-grey-light;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.56;
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
  margin: 0 0 40px 0;

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
  padding-left: 66px;
  line-height: 4.5em;
  cursor: pointer;
  font-family: 'MontserratSemiBold';
  color: $primary-black;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
              0px 10px 40px rgba(0, 0, 0, 0.04), 
              0px 2px 6px rgba(0, 0, 0, 0.04), 
              0px 0px 1px rgba(0, 0, 0, 0.04);
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

.margin-right-del {
  margin-right: -80px;
}

@media only screen and (max-width: 768px) {
  .services-block {
    display: block;
    margin: 0;
  }

  .services-block__select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: $primary-black;
    font-size: 16px;
    padding: 20px 15px;
    font-family: 'MontserratSemiBold';
    color: #ffffff;
    border: none;
    width: calc(100% + 30px);
    background-image: url("~assets/img/arrow_down_white.svg");
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 16px top 40%, 0 0;
    background-size: 14px auto, 100%;
    margin: 0 -15px;
  }


  .services__right {
    display: none;
  }

  .service__price {
    float: none;
    display: block;
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
    box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.01), 0px 10px 40px rgba(0, 0, 0, 0.04), 0px -2px 6px rgba(0, 0, 0, 0.02), 0px 0px 1px rgba(0, 0, 0, 0.04);
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
}

</style>