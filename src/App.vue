<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./components/header/HeaderComponent";
import AppFooter from "./components/footer/FooterComponent";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>



<style lang="scss">
@import "base.scss";
</style>
