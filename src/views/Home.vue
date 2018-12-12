<template>
  <main>
    <app-fpb/>
    <app-gallery/>
    <app-services/>
    <app-portfolio/>
  </main>
</template>

<script>
import AppFpb from "./../components/full-page-banner/fullPageBannerComponent"
import AppGallery from "./../components/gallery/galleryComponent"
import AppServices from "./../components/services/servicesComponent"
import AppPortfolio from "./../components/portfolio/portfolioComponent"

export default {
  name: "app-home",
  components: {
    AppFpb,
    AppGallery,
    AppServices,
    AppPortfolio
  }
};
</script>

<style scoped lang="scss">
@import "./page.scss";
</style>