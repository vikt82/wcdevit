<template>
  <div id="app">
    <app-header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">About</router-link>
    </div>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/HeaderComponent'
import AppFooter from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>



<style lang="scss">
  @import 'base.scss'
</style>
