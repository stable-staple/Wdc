<template>
  <services-layout section-name="Лечение зубов"
                   :services-list="servicesList"
                   :imgUrl="require(`../../assets/img/services_page/lechenie.jpg`)">
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
  data: function () {
    return {
      servicesList: [
        {
          name: "Восстановление зуба пломбой с использованием материалов из фотополимеров",
          price: "4 900 ₽"
        },
        {
          name: "Эндодонтическое лечение (лечение корневого канала зуба)",
          price: "10 000 ₽"
        },
        {
          name: "Лечение периодонтита",
          price: "14 000 ₽"
        },
        {
          name: "Эстетическая реставрация",
          price: "19 000 ₽"
        },
        {
          name: "Нехирургическое лечение при заболеваниях пародонта",
          price: "4 900 ₽"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>