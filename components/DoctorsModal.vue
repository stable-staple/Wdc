<template lang="pug">
.doctors__modal(v-show="value", @click.self="close")
  .doctors__modal__inner(v-scroll-lock="value && isMobile")
    img.doctors__modal__img-container(
      :src="doctorImgUrl"
    )
    .doctors__modal__content
      h2.doctors__modal__content__title {{ doctorFullName }}
      h5.doctors__modal__content__desc {{ subTitle }}
      ul.doctors__modal__list
        li.doctors__modal__list-item(v-for="(skill, ind) in skills") {{ skill.val }}
    .close-modal(@click="close")
      svg(h
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
    modalTitle: String,
    skills: Array,
    subTitle: String,
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
  @media only screen and (max-width: 768px) {
    .doctors__modal__content {
      width: auto;
    }

    .doctors__modal__content__title {
      font-size: 22px;
    }

    .doctors__modal__btn {
      width: 100%;
    }
  }
</style>