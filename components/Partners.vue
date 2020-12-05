<template lang="pug">
.partners.full-bleed
  .partners__inner
    picture
      source(
        srcset="~assets/img/sponsors/sponsors_ankylos_mobile.png",
        media="(max-width: 768px)"
      )
      img.partners__elem(src="~assets/img/sponsors/sponsors_ankylos.png")
    picture
      source(
        srcset="~assets/img/sponsors/sponsors_astratech_mobile.png",
        media="(max-width: 768px)"
      )
      img.partners__elem(src="~assets/img/sponsors/sponsors_astratech.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_biohorizons.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_dentium.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_impro.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_nobel.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_osstem.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_straumann.png")
    img.partners__elem(src="~assets/img/sponsors/sponsors_xive.png")
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {};
  },
  methods: {
    setAnimValues() {
      let cards = document.querySelectorAll(".partners__elem");

      innerWidth = 3000;

      const cardWidth = innerWidth / (cards.length / 2);

      cards.forEach((card, i) =>
        gsap.set(card, {
          x: () => i * cardWidth,
          overwrite: "auto",
        })
      );

      gsap.to(cards, {
        duration: 21,
        ease: "none",
        x: `+=${innerWidth}`,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(
            gsap.utils.wrap(-cardWidth, innerWidth * 2 - cardWidth),
            "px"
          ),
        },
      });
    },
  },
  mounted() {
    const cardsContainer = document.querySelector(".partners__inner");
    cardsContainer.innerHTML += cardsContainer.innerHTML;

    this.setAnimValues();
  },
};
</script>

<style lang="scss">
.partners {
  height: 131px;
  position: relative;
  padding: 120px 0;
  margin-bottom: 120px;
  overflow: hidden;
}

.partners__inner {
  position: relative;
}

.partners__elem {
  display: block;
  height: 131px;
  position: absolute;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 768px) {
  .partners {
    padding: 48px 0;
    margin-bottom: 20px;
  }
  .partners__elem {
    height: 52px;
  }
}
</style>