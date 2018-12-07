<template>
  <header>
    <div class="container">
      <a href="#" class="logo">
        <img src="./../../assets/nav-logo.svg" alt="logo">
      </a>
      <nav>
        <ul>
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <router-link to="/contact">CONTACTO</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style scoped lang="scss">
@import "./header.scss";
</style>