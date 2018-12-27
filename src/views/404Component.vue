<template>
  <main>
    <div class="oops">
      <h1>Oops !</h1>
      <h3>404 Page Not Found</h3>
      <a @click="$router.go(-1)" class="back-link"><font-awesome-icon icon="arrow-left" /> Back</a>
    </div>
  </main>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss" src="./page.scss"></style>