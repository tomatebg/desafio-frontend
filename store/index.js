export const state = () => ({
  products: []
})

export const getters = {
  products: (state) => state.products,
  isProductsLoaded: (state) => state.products.length > 0
}

export const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  }
}

export const actions = {
  async getProducts({ commit, dispatch }) {
    try {
      const data = await this.$axios.get('products')
      commit('SET_PRODUCTS', data.data.Items)
      commit('SET_PRODUCTS', data.data.Items)
    } catch (e) {
      this.$toast.success(e, {
        duration: 5000
      })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
