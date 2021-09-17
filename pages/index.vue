<template>
  <v-container fluid class="pa-0 container__wrapper">
    <v-overlay v-if="!isProductsLoaded">
      <v-progress-circular
        indeterminate
        size="64"
        color="deep-orange lighten-2"
      ></v-progress-circular>
    </v-overlay>
    <products-cards />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import ProductsCards from '@/components/sections/ProductsCards'
export default {
  components: { ProductsCards },
  computed: { ...mapGetters(['isProductsLoaded']) },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>
<style lang="scss" scoped>
.container__wrapper {
  background-color: #2f224d;
  width: 100%;
  height: 100%;
}
</style>
