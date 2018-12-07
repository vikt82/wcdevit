<template>
  <transition name="fade">
    <div>
      <div class="container">
        <h1>Contact</h1>
        <h2>Contact</h2>
        <h3>Contact</h3>
        <h4>Contact</h4>
        <h5>Contact</h5>
        <h6>Contact</h6>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "app-contact"
};
</script>

<style scoped>
div {
  background: rgba(255, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>