<template>
  <header>
    <div class="container">
      <router-link to="/" tag="a" class="logo">
        <img src="./../../assets/image/nav-logo.svg" alt="logo">
      </router-link>
      <app-navigation/>
    </div>
  </header>
</template>

<script>
import AppNavigation from "./../navigation/navigationComponent"

export default {
  name: "app-header",
  components: {
    AppNavigation
  }
};
</script>

<style scoped lang="scss" src="./header.scss"></style>