<template>
  <services-layout section-name="Реставрация зубов" :services-list="servicesList"
                   :imgUrl="require(`../../assets/img/services_page/restavratsia.jpg`)">
    Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов
    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают
    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания
    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы
    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.
  </services-layout>
</template>

<script>
import ServicesLayout from "@/layouts/services-layout";
export default {
  components: {ServicesLayout},
  transition: 'slide-bottom',
  data: function () {
    return {
      servicesList: [
        {
          name: "Художественная реставрация в эстетической зоне",
          price: "15 000 ₽"
        },
        {
          name: "Изготовление композитного винира",
          price: "30 000 ₽"
        },
        {
          name: "Изготовление композитного винира ультратонкого (на рефракторе)",
          price: "40 000 ₽"
        },
        {
          name: "Эстетическая реставрация",
          price: "50 000 ₽"
        },
        {
          name: "Изготовление восстановительной цельнокерамической вкладки E.max",
          price: "30 000 ₽"
        }
      ]
    }
  }
}
</script>