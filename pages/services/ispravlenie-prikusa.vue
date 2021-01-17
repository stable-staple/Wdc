<template lang="pug">
div
  ServiceModal(v-model="modalOpened" :modalTitle="selectedService" :serviceSectionTitle="title.toLowerCase()")
  .service-info
    span.service-info__breadcrumbs
      NuxtLink.breadcrumbs__link(to="/") Главная&nbsp;&nbsp;
      | / &nbsp;{{ title }}
    h1.services-block__title {{ title }}
    .services-block__title-wrapper
      select.services-block__select(
        v-model="selected",
        :onchange="this.$router.push({ path: selected })"
      )
        option(:value="selected", selected="selected") {{ title }}
        option(
          v-for="(section, ind) in this.$parent.filteredSidebar",
          :value="section.href"
        ) {{ section.title }}
    ul.services-list
      li.services-list__elem(
        v-for="service in services",
        @click="modalOpened = true; selectedService = service.name"
      )
        span {{ service.name }}
          span.service__price {{ service.price }}
    .services-sections-apply
      p.services-sections-apply__desc
        | Вы можете записаться на прием конкретной услуги или же просто оставить заявку.
        | Мы с Вами свяжемся для уточнения деталей. Также Вы можете позвонить по номеру
        a(href="tel:+7(499) 372 94 90") +7 499 372 94 90
        |
        | для записи.
    hr.service-section__sep
    h1.service-info__title Об услуге
    div
      img.service-info__img(
        src="~assets/img/services_page/ispravlenie.jpg"
      )
      p.service-section__desc {{ description }}
      p.service-section__desc(:class="{'service-section__desc--open': fullDesc }") {{ description }}
    button.service-info__more(@click="fullDesc = !fullDesc") Читать полностью
</template>

<script>
export default {
  name: "ispravlenie-prikusa",
  transition: 'slide-bottom',
  head() {
    return {
      title: "Исправление прикуса"
    };
  },
  data: function () {
    return {
      title: "Исправление прикуса",
      modalOpened: false,
      selectedService: null,
      fullDesc: false,
      selected: this.$route.path,
      description:
        "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
        {
          name: "Сапфировая брекет-система inspire ice ormco 1 зубной ряд",
          price: "40 000 ₽",
        },
        {
          name: "Комбинированная безлигатурная система Damon clear",
          price: "60 000 ₽",
        },
        {
          name: "Лечение на элайнерах",
          price: "от 80 000 ₽",
        },
        {
          name: "Изготовление пластинки",
          price: "от 12 000 ₽",
        },
        {
          name: "Изготовление и фиксация ретейнера на 1 зуб",
          price: "1 500 ₽",
        },
        {
          name: "Хранитель места под зуб",
          price: "5 000 ₽",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>