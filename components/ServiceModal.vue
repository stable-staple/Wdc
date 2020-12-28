<template lang="pug">
.services-block__modal(v-show="value", @click.self="isSubmitted = false; close()")
  .services-block__modal__inner(v-scroll-lock="isMobile && value")
    .close-modal(@click="isSubmitted = false; close()")
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

    div(v-if="isSubmitted === false")
      div(v-if="modalTitle !== null")
        h3.services-block__modal__title {{ modalTitle }}
        h3.services-block__modal__service-desc(v-if="specialOfferSubtitle == null") Записаться на прием, {{ serviceSectionTitle }}
        h3.services-block__modal__offer-title {{ specialOfferSubtitle }}
      h4.services-block__modal__desc(v-if="modalTitle == null") Запись на прием
      form(@submit.prevent)
        div.services-block__modal__field-wrap(style="position: relative;")
          input.services-block__modal__field(
            type="text",
            name="name",
            spellcheck="false",
            autocomplete="off",
            placeholder=" ",
            v-model="letter.name"
            required
          )
          label.services-block__modal__label(for="name") Имя
        div.services-block__modal__field-wrap(style="position: relative;")
          input.services-block__modal__field.margin-right-del(
            type="text",
            name="phone",
            placeholder=" ",
            v-model="letter.phone"
            required
          )
          label.services-block__modal__label(for="phone") Телефон
        div.services-block__modal__field-wrap(style="position: relative;")
          input.services-block__modal__field(type="date", name="date", v-model="letter.date" required)
          label.services-block__modal__label(for="date") Дата
        div.services-block__modal__field-wrap.services__field__time(style="position: relative;")
          input.services-block__modal__field.margin-right-del(type="time", name="time", v-model="letter.time" required)
          label.services-block__modal__label(for="time") Время
        div.services-block__modal__field-wrap.services-block__modal__field__message(style="position: relative; width: 100%;")
          input(
            class='services-block__modal__field',
            type="text",
            name="message",
            placeholder=" ",
            autocomplete="off",
            v-model="letter.message",
            style="width: 100%; margin-bottom: 56px;"
          )
          label.services-block__modal__label(for="message") Ваше сообщение
        button.services-block__modal__apply-btn(@click="sendLetter") Записаться на прием
        p.services-block__modal__confidential
          | Нажимая кнопку «Записаться на прием», вы соглашаетесь с #[u конфиденциальностью персональной информации]
    div(v-else)
      h2.apply-success__title Заявка успешно отправлена
      h3.apply-success__subtitle Мы скоро вам перезвоним
      img.apply-success__img(src="/img/services/implanty.png")
      button.apply-success__btn Вернуться на главную
</template>

<script>
export default {
  props: {
    serviceSectionTitle: String,
    specialOfferSubtitle: String,
    value: {
      required: true
    },
    opened: Boolean,
    modalTitle: String
  },
  data: function () {
    return {
      mobileViewQuery: null,
      isMobile: false,
      isSubmitted: false,
      letter: {
        name: null,
        phone: null,
        date: null,
        time: null,
        message: null
      }
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value)
    },
    sendLetter() {
      this.$axios.$post('/api/appointment', this.letter);
      this.isSubmitted = true;
    }
  },
  mounted () {
    this.mobileViewQuery = window.matchMedia("(max-width: 768px)");
    this.isMobile = this.mobileViewQuery.matches;
    this.mobileViewQuery.addListener(() => {
      this.isMobile = this.mobileViewQuery.matches
    });
  }
};
</script>

<style lang="scss">

.apply-success__title {
  font-family: 'MontserratSemiBold', serif;
  font-size: 22px;
  line-height: 28px;
  color: $primary-black;
  margin: 0 0 12px 0;
}

.apply-success__subtitle {
  font-family: 'MontserratMedium', sans-serif;
  font-size: 14px;
  color: $primary-grey;
}

.apply-success__btn {
  background: #272727;
  border-radius: 4px;
  height: 53px;
  font-family: 'MontserratSemiBold';
  color: #FFFFFF;
  cursor: pointer;
  width: 100%;
}

.apply-success__img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  margin-bottom: 32px;
}

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
    margin: 8px 80px 48px 0;
    height: auto;
    padding: 0 0 16px 0;
    border-style: none none solid none;
    border-bottom: solid 1px;
    // $primary-grey with applied opacity
    border-bottom-color: rgba(116, 115, 118, 0.32);
    // &::-webkit-calendar-picker-indicator {
      // display: none;
      // -webkit-appearance: none;
    // }
    &:placeholder-shown[type="text"] + label {
      top: 8px;
      font-size: 16px;
    }
    &:focus[type="text"] + label,
    &:focus[type="date"] + label, &:valid[type="date"] + label,
    &:focus[type="time"] + label, &:valid[type="time"] + label
    {
      top: -20px;
      font-size: 12px;
    }
  }
  &__label {
    font-family: 'MontserratRegular';
    font-size: 16px;
    transition: 0.2s ease all;
    line-height: 24px;
    pointer-events: none;
    top: -20px;
    font-size: 12px;
    position: absolute;
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
  &__field {
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
  margin: 0 0 60px 0;
  font-size: 16px;
  line-height: 24px;
}

.services-block__modal__offer-title {
  color: $primary-black;
  font-family: 'MontserratRegular';
  margin: 0 0 60px 0;
  font-size: 16px;
  line-height: 24px;
}

.services-block__modal__apply-btn {
  background: #272727;
  border-radius: 4px;
  height: 53px;
  font-family: 'MontserratSemiBold';
  color: #FFFFFF;
  cursor: pointer;
  width: 100%;
}

.margin-right-del {
    margin-right: -80px;
}

.services-block__modal__field-wrap {
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  .services-block__modal {
    overflow: hidden;
  }

  .services-block__modal__apply-btn {
    height: 45px;
    margin-top: -16px;
  }

  .services-block__modal__inner {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 52px 15px;
    overflow: hidden;
    border-radius: 0;
  }

  .services-block__modal__title {
    white-space: normal;
    display: none;
  }

  .services-block__modal__label {
    top: -28px;
  }

  .services-block__modal__field {
    width: 100%;
    margin: 8px 80px 56px 0;

    &:focus[type="text"] + label,
    &:focus[type="date"] + label, &:valid[type="date"] + label,
    &:focus[type="time"] + label, &:valid[type="time"] + label
    {
      top: -28px;
      font-size: 12px;
    }
  }

  .services-block__modal__field-wrap {
    display: block;
  }

  .services-block__modal__field__message,
  .services__field__time {
    display: none;
  }
} 
</style>