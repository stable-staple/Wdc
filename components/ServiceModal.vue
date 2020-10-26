<template lang="pug">
  .service-modal(v-if="opened" @click.self="opened = false")
    .service-modal__inner
      h2.service-modal__title {{  }}
      .close-modal(@click="opened = false")
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          rect(x='0.75' y='1.81055' width='1.4' height='30.0003' transform='rotate(-45 0.75 1.81055)' fill='#272727')
          rect(x='21.9641' y='0.75' width='1.4' height='30.0003' transform='rotate(45 21.9641 0.75)' fill='#272727')
</template>

<script>
export default {
  props: {
    'title': String,
    'opened': Boolean
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="scss">
  .service-modal {
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
      padding: 56px 64px;
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
  }

  .close-modal {
    position: absolute;
    top: 40px;
    right: 48px;
    cursor: pointer;
  }
</style>