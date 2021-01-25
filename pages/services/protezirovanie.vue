<template>
  <services-layout section-name="Протезирование" :services-list="servicesList"
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
          name: "Изготовление металлокерамической коронки",
          price: "от 25 000 ₽"
        },
        {
          name: "Изготовление коронки из диоксида циркония",
          price: "от 32 000 ₽"
        },
        {
          name: "Изготовление керамической коронки E.max",
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