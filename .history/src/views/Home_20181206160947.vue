<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore non necessitatibus minima odio incidunt accusantium possimus temporibus unde velit quidem deleniti maxime, laudantium distinctio doloribus amet laboriosam explicabo voluptatum sit!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
