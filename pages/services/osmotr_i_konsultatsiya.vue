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
      src="~assets/img/services_page/konsultation.jpg"
      )
      p.service-section__desc(:class="{'service-section__desc--open': fullDesc }") {{ description }}
    button.service-info__more(@click="fullDesc = !fullDesc") Читать полностью
    hr.service-section__sep
</template>

<script>
export default {
  name: "osmotr_i_konsultatsiya",
  transition: 'slide-bottom',
  head() {
    return {
      title: "Осмотр и консультация"
    };
  },
  data: function () {
    return {
      title: "Осмотр и консультация",
      selected: this.$route.path,
      modalOpened: false,
      selectedService: null,
      fullDesc: false,
      modalTitle: null,
      description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
        {
          name: "Консультация врача ортодонта",
          price: "3 000 ₽"
        },
        {
          name: "Консультация врача ортодонта высшей категории, к.м.н.",
          price: "5 000 ₽"
        },
        {
          name: "Ортопантомография",
          price: "1 500 ₽"
        },
        {
          name: "Компьютерная томография челюстно-лицевой области",
          price: "3 900 ₽"
        },
        {
          name: "Снятие диагностических слепков (одна челюсть)",
          price: "3 000 ₽"
        },
        {
          name: "Диагностика пародонтологическая (с помощью аппарата Florida Probe)",
          price: "5 000 ₽"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>