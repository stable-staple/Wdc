<template lang="pug">
.doctors__modal(v-show="value", @click.self="close")
  .doctors__modal__inner(v-scroll-lock="isMobile && value")
    img.doctors__modal__img-container(
      :src="doctorImgUrl"
    )
    .doctors__modal__content
      h2.doctors__modal__content__title {{ doctorFullName }}
      h5.doctors__modal__content__desc Врач - стоматолог, терапевт
      ul.doctors__modal__list
        li.doctors__modal__list-item Ведение дентального фотопротокола
        li.doctors__modal__list-item Эстетические прямые реставрации зубов
        li.doctors__modal__list-item Отбеливание зубов ZOOM
        li.doctors__modal__list-item Эндодонтическое лечение зубов, работа с ротационными инструментами
        li.doctors__modal__list-item
          | Пломбирование корневых каналов зубов методом латеральной компакции гуттаперчи
        li.doctors__modal__list-item Профессиональная гигиена полости рта
      button.doctors__modal__btn Записаться на прием
    .close-modal(@click="close")
      svg(
        width="24",
        height="24",
        viewbox="0 0 24 24",
        fill="none",
        xmlns="http://www.w3.org/2000/svg"
      )
        rect(
          x="0.75",
          y="1.81055",
          width="1.4",
          height="30.0003",
          transform="rotate(-45 0.75 1.81055)",
          fill="#272727"
        )
        rect(
          x="21.9641",
          y="0.75",
          width="1.4",
          height="30.0003",
          transform="rotate(45 21.9641 0.75)",
          fill="#272727"
        )
</template>

<script>
export default {
  props: {
    doctorFullName: String,
    doctorImgUrl: String,
    value: {
      required: true
    },
    opened: Boolean,
    modalTitle: String
  },
  data: function () {
    return {
      mobileViewQuery: null,
      isMobile: false
    };
  },
  methods: {
    close() {
      this.$emit("input", !this.value)
    }
  },
  mounted() {
    this.mobileViewQuery = window.matchMedia("(max-width: 768px)");
    this.isMobile = this.mobileViewQuery.matches;
    this.mobileViewQuery.addListener(() => {
      this.isMobile = this.mobileViewQuery.matches
    });
  }
};
</script>

<style lang="scss">
</style>