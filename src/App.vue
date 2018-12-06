<template>
  <div id="app">
    <div class="page">
      <app-header/>
      <main>
        <router-view/>
      </main>
      <app-footer/>
    </div>
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
