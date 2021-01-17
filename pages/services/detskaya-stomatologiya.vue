<template lang="pug">
  services-layout(
    sectionName="Детская стоматология",
    :servicesList="servicesList"
    ) Фырфырфырфыр
</template>

<script>
import ServicesLayout from "@/layouts/services-layout";

export default {
  components: {ServicesLayout},
  data: function () {
    return {
      servicesList: [
        {
          name: "Психологическая адаптация к стоматологическому приему детей",
          price: "1 500 ₽"
        },
        {
          name: "Постановка пломбы светового отверждения (молочный зуб)",
          price: "1 500 ₽"
        },
        {
          name: "Постановка пломбы светового отверждения (коренной зуб)",
          price: "1 500 ₽"
        },
        {
          name: "Удаление зубных отложений щеткой с профилактической пастой",
          price: "1 500 ₽"
        },
        {
          name: "Неинвазивный метод лечения Icon",
          price: "1 500 ₽"
        },
        {
          name: "Удаление молочного зуба 2-3 степени подвижности",
          price: "1 500 ₽"
        },
        {
          name: "Удаление молочного зуба с сохраненными корнями",
          price: "1 500 ₽"
        }
      ]
    }
  }
}
</script>