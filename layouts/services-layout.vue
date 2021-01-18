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
      li.services-list__elem(
        v-for="service in this.servicesList"
        @click="modalOpened = true; selectedService = service.name;"
      )
        span {{ service.name }}
          span(class="service__price") {{ service.price }}
    .services-sections-apply
      p.services-sections-apply__desc
        | Вы можете записаться на прием конкретной услуги или же просто оставить заявку.
        | Мы с Вами свяжемся для уточнения деталей. Также Вы можете позвонить по номеру
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


<style scoped>

</style>