<template>
  <v-row class="d-flex justify-center">
    <div v-for="item in products" :key="item.sk">
      <v-card class="mx-5 my-12" max-width="350">
        <v-img height="250" :src="item.image" contain />
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>
          <div class="display-1 mb-3 green--text">
            {{ formatCurrency(item.price) }}
          </div>
          <v-rating
            class="mx-0 mb-2"
            :value="item.sk"
            color="amber"
            dense
            half-increments
            readonly
            size="19"
          />
          <v-chip
            v-for="(benefit, index) in item.benefits"
            :key="index"
            class="my-1 mr-1"
            default
          >
            {{ benefit }}
          </v-chip>
        </v-card-text>
        <v-divider class="mx-4" />
        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            text
            block
            @click="openBuyDialog(item.sk)"
          >
            Comprar
          </v-btn>
        </v-card-actions>
      </v-card>
      <product-dialog :visible.sync="isDialogOpen" :product="selectedProduct" />
    </div>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import ProductDialog from '@/components/sections/ProductDialog'
export default {
  components: {
    ProductDialog
  },
  data() {
    return {
      isDialogOpen: false,
      selectedProduct: null
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.getProducts()
  },

  methods: {
    ...mapActions(['getProducts']),
    formatCurrency(value) {
      return 'R$ ' + (Math.round(value * 100) / 100).toFixed(2)
    },
    openBuyDialog(itemId) {
      this.selectedProduct = itemId
      this.isDialogOpen = true
    }
  }
}
</script>
<style scoped></style>
