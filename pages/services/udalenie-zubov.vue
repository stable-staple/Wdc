<template>
  <services-layout section-name="Удаление зубов" :services-list="servicesList"
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
          name: "Анестезия",
          price: "450 ₽"
        },
        {
          name: "Электронная анестезия",
          price: "1000 ₽"
        },
        {
          name: "Удаление фрагмента зуба",
          price: "500 ₽"
        },
        {
          name: "Удаление зуба простое",
          price: "от 2 500 ₽"
        },
        {
          name: "Удаление зуба сложное",
          price: "от 6 000 ₽"
        },
        {
          name: "Удаление ретенированного дистопированного зуба 1 категории сложности (прорезавшийся зуб мудрости)",
          price: "от 10 000 ₽"
        },
      ]
    }
  }
}
</script>