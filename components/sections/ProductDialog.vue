<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="visible"
        max-width="600"
        :retain-focus="false"
        @click:outside="concludeBuy()"
      >
        <v-card>
          <v-toolbar color="purple darken-3" dark>
            Seu pedido na Ticto
          </v-toolbar>
          <v-row
            v-if="selectedProduct"
            class="my-3 d-flex align-center"
            no-gutters
          >
            <v-col cols="3">
              <v-img height="80" :src="selectedProduct.image" contain />
            </v-col>
            <v-col cols="6">
              <span class="text-h5">{{ selectedProduct.name }}</span>
            </v-col>
            <v-col cols="3">
              <span class="text-h6 green--text">
                {{ formatCurrency(selectedProduct.price) }}
              </span>
            </v-col>
          </v-row>
          <v-card-actions class="justify-end">
            <v-btn text @click="concludeBuy()">Confirmar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    product: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['products']),
    selectedProduct() {
      return this.products.find((item) => item.sk === this.product)
    }
  },
  methods: {
    concludeBuy() {
      this.$toast.success('Obrigado por comprar na Ticto!', {
        duration: 5000
      })
      this.$emit('update:visible', false)
    },
    openBuyDialog(itemId) {
      this.selectedProduct = itemId
      this.isDialogOpen = true
    },
    formatCurrency(value) {
      return 'R$ ' + (Math.round(value * 100) / 100).toFixed(2)
    }
  }
}
</script>

<style></style>
