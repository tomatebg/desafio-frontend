<template>
  <div class="navbar-wrapper d-flex justify-center py-5">
    <div class="navbar-content d-flex justify-space-between align-center">
      <v-img height="60" class="navbar-logo" src="/img/ticto.svg" contain />
    </div>
  </div>
</template>

<style lang="scss">
.navbar-wrapper {
  background-color: $ticto-purple;
}
.navbar-content {
  max-width: 1100px;
  background-color: $ticto-purple;
  width: 100%;
}
.navbar-logo {
  color: white;
}
</style>
