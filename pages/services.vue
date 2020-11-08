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
  .service-info
    span.service-info__breadcrumbs
      NuxtLink.breadcrumbs__link(to="/") Главная&nbsp;&nbsp;
      | / &nbsp;Детская стоматология
    h1.services-block__title {{ servicesSection[currentSection].name }}
    ul.services-list
      li.services-list__elem(
        v-for="service in servicesSection[currentSection].servicesList"
        @click="modalTitle = service.name; modalOpened = true;"
      )
        span {{ service.name }}
          span(class="service__price") {{ service.price }}
    hr.service-section__sep
    img.service-info__img(
      src="~assets/img/services_page/child_dent1.jpg"
      width="853px" 
      height="524px"
      )
    p.service-section__desc {{ servicesSection[currentSection].description }}
    span.service-info__more Читать полностью
    hr.service-section__sep

  .services__right
    .services-sections-list
      a.services-sections-list__elem(
        href="#"
        v-for="(section, ind) in servicesSection" 
        @click="currentSection = ind"
        :class="{'services-sections-list__elem--active': currentSection == ind}"
        ) {{ section.name}}
    .services-sections-apply
      p.services-sections-apply__desc Вы можете записаться на прием по телефону или оставить заявку
      a.services-sections-apply__tel(href="tel:+7(499) 372 94 90") +7 (499) 372 94 90
      button.services-sections-apply__apply-btn Оставить заявку
</template>

<script>
export default {
  data: function() {
    return {
      modalOpened: false,
      modalTitle: null,
      currentSection: 0,
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
          name: "Импланты и протезы"
        },
        {
          name: "Импланты и протезы"
        },
        {
          name: "Импланты и протезы"
        },
        {
          name: "Импланты и протезы"
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
  }
  &__more {
    display: inline-block;
    color: $primary-black;
    font-family: 'MontserratBold';
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    &:after {
      content: url('~assets/img/arrow_down.svg');
      margin-left: 8px;
    }
  }
}

.breadcrumbs__link {
  color: $primary-black;
  opacity: 0.48;
}

.services-block__title {
  font-family: 'MontserratRegular';
  font-size: 48px;
  line-height: 56px;
  color: $primary-black;
  margin: 0 0 40px 0;
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list__elem {
  font-family: 'MontserratRegular';
  padding-left: 41px;
  padding-right: 49px;
  cursor: pointer;
  height: 72px;
  border-radius: 6px;

  & > span {
    color: $primary-black;
    line-height: 72px;
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

.services-sections-list {
  padding: 0;
  top: 140px;
  list-style: none;
  min-width: 394px;
  font-size: 14px;
  margin: 0 0 32px 0;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
              0px 10px 40px rgba(0, 0, 0, 0.04),
              0px 2px 6px rgba(0, 0, 0, 0.04), 
              0px 0px 1px rgba(114, 110, 110, 0.04);
  border-radius: 10px;
}

.services-sections-list__elem {
  display: block;
  height: 4em;
  padding-left: 66px;
  line-height: 4em;
  cursor: pointer;
  font-family: 'MontserratRegular';
  color: #78797D;
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
    color: $primary-black;
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
  width: 394px;
  height: 217px;
  background: #FFFFFF;
  padding: 26px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
              0px 10px 40px rgba(0, 0, 0, 0.04), 
              0px 2px 6px rgba(0, 0, 0, 0.04), 
              0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  
  &__desc {
    font-family: 'MontserratRegular';
    font-size: 14px;
    line-height: 24px;
    margin: 0 0 16px 0;
    color: $primary-black;
  }
  &__tel {
    display: inline-block;
    font-family: 'MontserratRegular';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 20px 0;
    color: $primary-black;
  }
  &__apply-btn {
    height: 49px;
    width: 100%;
    font-family: 'MontserratBold';
    cursor: pointer;
    background: $primary-black;
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
  }
}

.margin-right-del {
  margin-right: -80px;
}
</style>