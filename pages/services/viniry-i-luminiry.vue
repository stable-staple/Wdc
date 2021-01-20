<template>
  <services-layout section-name="Виниры и люминиры" :services-list="servicesList"
                   :imgUrl="require(`../../assets/img/services_page/lechenie.jpg`)">
    Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов
    детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают
    различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания
    и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы
    и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.
  </services-layout>
</template>

<script>
export default {
  transition: 'slide-bottom',
  data: function () {
    return {
      servicesList: [
        {
          name: "Изготовление керамического винира E.max",
          price: "39 000 ₽"
        },
        {
          name: "Изготовление композитного винира ультратонкого (на рефракторе)",
          price: "49 000 ₽"
        }
      ]
    }
  }
}
</script>
