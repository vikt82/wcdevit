<template>
  <header>
    <div class="container">
      <router-link to="/" tag="a" class="logo">
        <img src="./../../assets/nav-logo.svg" alt="logo">
      </router-link>
      <nav>
        <ul>
          <li v-for="(item, i) in menuItems" :key="`menuItems${i}`">
            <router-link tag="a" :to="item.route">{{item.title}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data: function() {
    return {};
  },
  computed: {
    menuItems() {
      return [
        {
          title: "Home",
          route: "/"
        },
        {
          title: "contacto",
          route: "/contact"
        },
      ];
    }
  }
};
</script>

<style scoped lang="scss">
@import "./header.scss";
</style>