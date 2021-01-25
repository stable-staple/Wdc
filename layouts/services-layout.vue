<template lang="pug">
div
  ServiceModal(v-model="modalOpened" :modalTitle="selectedService" :serviceSectionTitle="sectionName.toLowerCase()")
  .service-info
    span.service-info__breadcrumbs
      NuxtLink.breadcrumbs__link(to="/") Главная&nbsp;&nbsp;
      | / &nbsp;Детская стоматология
    h1.services-block__title {{ sectionName }}
    .services-block__title-wrapper
      select.services-block__select(v-model="selected" :onchange="this.$router.push({ path: selected })")
        option(:value="selected" selected="selected") {{ sectionName }}
        option(v-for="(section, ind) in this.filteredSidebar" :value="section.href") {{ section.title }}
    ul.services-list
      li.services-list__landing-link
        span(class="service__desc service-desc--sleep") &nbsp;–&nbsp;&nbsp;Данную процедуру можно провести во сне
        span(class="service__price service__landing-more") Подробнее
      li.services-list__elem(
        v-for="service in this.servicesList"
        @click="modalOpened = true; selectedService = service.name;"
      )
        span(class="service__desc") {{ service.name }}
        span(class="service__price") {{ service.price }}
    .services-sections-apply
      p.services-sections-apply__desc
        | Вы можете записаться на прием конкретной услуги или же просто оставить заявку.
        | Мы с Вами свяжемся для уточнения деталей. Также Вы можете позвонить по номеру&nbsp;
        a(href="tel:+7(499) 372 94 90") +7 499 372 94 90
        |  для записи.
    hr.service-section__sep
    h1.service-info__title Об услуге
    div
      img.service-info__img(:src="this.imgUrl")
      p.service-section__desc: slot
    hr.service-section__sep
</template>

<script>
import ServicesMixins from '@/mixins/servicesMixins'

export default {
  name: "services-layout",
  head() {
    return {
      title: this.sectionName
    };
  },
  computed: {
    filteredSidebar: function() {
      let self = this;
      return this.sidebar.filter(function (obj) {
        return obj.href !== self.$route.path;
      });
    }
  },
  data: function () {
    return {
      selectedService: null,
      modalOpened: false,
      selected: this.$route.path,
      sidebar: (this.getSidebar()).sidebar
    }
  },
  mixins: [ServicesMixins],
  props: {
    sectionName: String,
    servicesList: Array,
    imgUrl: String,
  }
}
</script>


<style lang="scss">
.services-list__landing-link {
  font-family: 'MontserratRegular', serif;
  cursor: pointer;
  min-height: 24px;
  max-height: 84px;
  padding: 20px 32px 20px 20px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(17, 80, 125, 0.04);

  & > span {
    color: $primary-black;
    align-self: center;
    line-height: 24px;
  }

  .service__price:after {
    opacity: 1;
  }
}

.service__desc {
  font-size: 14px;
}

@media only screen and (max-width: 768px) {
  .services-list__landing-link {
    font-family: 'MontserratMedium',serif;
    height: auto;
    padding: 12px;
    min-height: initial;
    max-height: initial;
    display: block;
    line-height: 18px;
    & > span {
      font-size: 12px;
      display: block;
      line-height: 18px;
    }
    box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.01),
    0px 10px 40px rgba(0, 0, 0, 0.04),
    0px -2px 6px rgba(0, 0, 0, 0.02),
    0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;

    & > .service__desc {
      font-size: 12px;
    }
  }
}

</style>