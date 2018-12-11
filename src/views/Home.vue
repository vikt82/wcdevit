<template>
  <transition name="fade-">
    <dir>
      <app-fpb/>
      <app-gallery/>
    </dir>
  </transition>
</template>

<script>
import AppFpb from "./../components/full-page-banner/fullPageBannerComponent"
import AppGallery from "./../components/gallery/galleryComponent"

export default {
  name: "app-home",
  components: {
    AppFpb,
    AppGallery
  }
};
</script>

<style scoped lang="scss">
@import "./page.scss";
</style>