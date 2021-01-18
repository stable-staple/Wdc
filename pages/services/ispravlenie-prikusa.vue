<template>
  <services-layout section-name="Исправление прикуса"
                   :services-list="servicesList"
                   :imgUrl="require(`../../assets/img/services_page/ispravlenie.jpg`)">
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
          name: "Сапфировая брекет-система inspire ice ormco 1 зубной ряд",
          price: "40 000 ₽",
        },
        {
          name: "Комбинированная безлигатурная система Damon clear",
          price: "60 000 ₽",
        },
        {
          name: "Лечение на элайнерах",
          price: "от 80 000 ₽",
        },
        {
          name: "Изготовление пластинки",
          price: "от 12 000 ₽",
        },
        {
          name: "Изготовление и фиксация ретейнера на 1 зуб",
          price: "1 500 ₽",
        },
        {
          name: "Хранитель места под зуб",
          price: "5 000 ₽",
        },
      ],
    };
  },
};
</script>
