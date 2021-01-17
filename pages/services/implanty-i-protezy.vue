<template lang="pug">
div
  ServiceModal(v-model="modalOpened" :modalTitle="selectedService" :serviceSectionTitle="title.toLowerCase()")
  .service-info
    span.service-info__breadcrumbs
      NuxtLink.breadcrumbs__link(to="/") Главная&nbsp;&nbsp;
      | / &nbsp;{{ title }}
    h1.services-block__title {{ title }}
    .services-block__title-wrapper
      select.services-block__select(v-model="selected" :onchange="this.$router.push({ path: selected })")
        option(:value="selected" selected="selected") {{ title }}
        option(v-for="(section, ind) in this.$parent.filteredSidebar" :value="section.href") {{ section.title }}
    ul.services-list
      li.services-list__elem(
        v-for="service in services"
        @click="modalOpened = true; selectedService = service.name"
      )
        span {{ service.name }}
          span(class="service__price") {{ service.price }}
    .services-sections-apply
      p.services-sections-apply__desc
        | Вы можете записаться на прием конкретной услуги или же просто оставить заявку.
        | Мы с Вами свяжемся для уточнения деталей. Также Вы можете позвонить по номеру 
        a(href="tel:+7(499) 372 94 90") +7 499 372 94 90
        |  для записи.
    hr.service-section__sep
    h1.service-info__title Об услуге
    div
      img.service-info__img(
      src="~assets/img/services_page/child_dent1.jpg"
      )
      p.service-section__desc(:class="{'service-section__desc--open': fullDesc }") {{ description }}
    button.service-info__more(@click="fullDesc = !fullDesc") Читать полностью
</template>

<script>
export default {
  name: "implanty-i-protezy",
  transition: 'slide-bottom',
  head() {
    return {
      title: "Импланты и протезы"
    };
  },
  data: function () {
    return {
      title: "Импланты и протезы",
      modalOpened: false,
      selectedService: null,
      fullDesc: false,
      selected: '/services/implanty-i-protezy',
      description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
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
        },
        {
          name: "Изготовление коронки из диоксида циркония",
          price: "от 32 000 ₽"
        },
        {
          name: "Изготовление керамического винира E.max",
          price: "от 32 000 ₽"
        },
        {
          name: "Изготовление металлокерамической коронки на имплантат",
          price: "от 30 000 ₽"
        },
        {
          name: "Изготовление полного съемного протеза",
          price: "от 55 000 ₽"
        },
        {
          name: "Изготовление частичного съемного протеза",
          price: "от 45 000 ₽"
        },
        {
          name: "Изготовление бюгельного протеза",
          price: "от 60 000 ₽"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>