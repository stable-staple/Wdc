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
      width="853px"
      height="524px"
      )
      p.service-section__desc {{ description }}
    button.service-info__more Читать полностью
    hr.service-section__sep
</template>

<script>
export default {
  name: "lechenie_zubov",
  data: function () {
    return {
      title: "Удаление и реставрация",
      selected: this.$route.path,
      modalOpened: false,
      modalTitle: null,
      selectedService: null,
      description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
        {
          name: "Художественная реставрация в эстетической зоне",
          price: "15 000 руб"
        },
        {
          name: "Изготовление композитного винира",
          price: "30 000 руб"
        },
        {
          name: "Изготовление композитного винира ультратонкого (на рефракторе)",
          price: "40 000 руб"
        },
        {
          name: "Эстетическая реставрация",
          price: "50 000 руб"
        },
        {
          name: "Изготовление восстановительной цельнокерамической вкладки E.max",
          price: "30 000 руб"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>