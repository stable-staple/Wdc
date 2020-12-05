<template lang="pug">
.services-block__modal(v-show="value", @click.self="close")
  .services-block__modal__inner
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
    div(v-if="modalTitle !== null")
      h3.services-block__modal__title {{ modalTitle }}
      h3.services-block__modal__service-desc Записаться на прием, {{ serviceSectionTitle }}
    h4.services-block__modal__desc(v-if="modalTitle == null") Запись на прием
    form(service-block__modal__form)
      div(style="display: inline-block")
        label.services-block__modal__label(for="name") Имя
        input.services-block__modal__field(
          type="text",
          name="name",
          spellcheck="false",
          required
        )
      div(style="display: inline-block")
        label.services-block__modal__label(for="phone") Телефон
        input.services-block__modal__field.margin-right-del(
          type="text",
          name="phone",
          required
        )
      div(style="display: inline-block")
        label.services-block__modal__label(for="phone") Дата
        input.services-block__modal__field(type="date", name="date")
      div(style="display: inline-block")
        label.services-block__modal__label(for="phone") Время
        input.services-block__modal__field.margin-right-del(type="time")
      input(
        class='services-block__modal__field \
                      services-block__modal__field--full-width',
        type="text",
        placeholder="Ваше сообщение...",
        autocomplete="off"
      )
      button.services-block__modal__apply-btn Записаться на прием
      p.services-block__modal__confidential
        | Нажимая кнопку «Записаться на прием», вы соглашаетесь с #[u конфиденциальностью персональной информации]
</template>

<script>
export default {
  props: {
    serviceSectionTitle: String,
    value: {
      required: true
    },
    opened: Boolean,
    modalTitle: String
  },
  data: function () {
    return {};
  },
  methods: {
    close() {
      this.$emit("input", !this.value)
    }
  }
};
</script>

<style lang="scss">
.services-block__modal {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; 
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__inner {
    position: absolute;
    padding: 56px 196px 102px 80px;
    width: 1050px;
    height: 674px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.02), 
                0px 10px 40px rgba(0, 0, 0, 0.04), 
                0px 2px 6px rgba(0, 0, 0, 0.04), 
                0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    left: 50%;
    top: 50%;
    z-index: 6;
    transform: translate(-50%, -50%);
  }
  &__title {
    margin: 0 0 12px 0;
    color: $primary-black;
    font-family: 'MontserratMedium';
    font-weight: 500;
    font-size: 22px;
    white-space: nowrap;
    line-height: 48px;
  }
  &__desc {
    font-family: 'MontserratSemiBold';
    font-weight: 400;
    font-size: 32px;
    margin: 0 0 40px 0;
    color: $primary-black;
  }
  &__field {
    display: block;
    width: 331px; 
    margin: 8px 80px 24px 0;
    height: 41px;
    padding: 0 0 16px 0;
    border-style: none none solid none;
    border-bottom: solid 1px;
    // $primary-grey with applied opacity
    border-bottom-color: rgba(116, 115, 118, 0.32);
    &--full-width {
      width: 100%;
      margin-bottom: 56px;
    }
  }
  &__label {
    font-family: 'MontserratRegular';
    font-size: 12px;
    line-height: 24px;
    color: $primary-black;
  }
  &__confidential {
    color: $primary-grey;
    margin: 16px 0 0 0;
    opacity: 0.8;
    font-family: 'MontserratRegular';
    font-size: 12px;
    line-height: 24px;
  }
  input[type="text"] {
    font-family: 'MontserratMedium';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $primary-black;
  }
}

.services-block__modal__service-desc {
  color: $primary-grey;
  font-family: 'MontserratRegular';
  font-weight: normal;
  margin: 0 0 40px 0;
  font-size: 16px;
  line-height: 24px;
}

.services-block__modal__apply-btn {
  background: #272727;
  border-radius: 4px;
  padding: 20px 40px;
  height: 53px;
  font-family: 'MontserratSemiBold';
  color: #FFFFFF;
  cursor: pointer;
  width: 100%;
}

.close-modal {
  position: absolute;
  top: 40px;
  right: 48px;
  cursor: pointer;
}

.margin-right-del {
    margin-right: -80px;
}
</style>