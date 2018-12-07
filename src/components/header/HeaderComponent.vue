<template>
  <header>
    <div class="container">
      <a href="#" class="logo">
        <img src="./../../assets/logo.svg" alt="logo">
      </a>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>|
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
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