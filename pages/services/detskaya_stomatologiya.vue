<template lang="pug">
  .service-info
    span.service-info__breadcrumbs
      NuxtLink.breadcrumbs__link(to="/") Главная&nbsp;&nbsp;
      | / &nbsp;Детская стоматология
    h1.services-block__title Детская стоматология
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
  name: "detskaya_stomatologiya",
  data: function () {
    return {
      description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
      services: [
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
    }
  }
}
</script>

<style scoped>

</style>