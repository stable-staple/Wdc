<template lang="pug">
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
        @click="modalTitle = service.name; modalOpened = true;"
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
  name: "otbelivanie_i_gigiena",
  data: function () {
    return {
      title: "Отбеливание и гигиена",
      selected: this.$route.path,
      description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
        {
          name: "Восстановление зуба пломбой с использованием материалов из фотополимеров",
          price: "4 900 руб"
        },
        {
          name: "Эндодонтическое лечение (лечение корневого канала зуба)",
          price: "10 000 руб"
        },
        {
          name: "Лечение периодонтита",
          price: "14 000 руб"
        },
        {
          name: "Эстетическая реставрация",
          price: "19 000 руб"
        },
        {
          name: "Нехирургическое лечение при заболеваниях пародонта",
          price: "4 900 руб"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>