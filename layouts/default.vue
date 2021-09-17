<template>
  <v-app>
    <nav-bar />
    <nuxt></nuxt>
  </v-app>
</template>

<script>
import NavBar from '../components/globals/NavBar.vue'
export default {
  components: { NavBar },
  data() {
    return {}
  }
}
</script>
