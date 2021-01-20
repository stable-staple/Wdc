<template>
  <services-layout section-name="Осмотр и консультация"
                   :services-list="servicesList"
                   :imgUrl="require(`../../assets/img/services_page/konsultation.jpg`)">
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