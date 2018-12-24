<template>
  <section class="portfolio portfolio-block">
    <div class="container">
      <h2 class="title-section">{{titleBlock}}</h2>
    </div>

    <div class="portfolio-container">
      <div v-for="(item, index) in portfolioBlock" :key="index" class="portfolio-item">
        <figure>
          <img :src="getPortfolioImg(index)" :srcset="item.thumbnailSrcset" :alt="item.thumbnailAlt">
          <a v-bind:href="item.linkPortfolio" class="case-studies" data="Case Studies" target="_blank"></a>
        </figure>
      </div>

      <!-- <div class="portfolio-item">
        <figure>
          <img src="./../../assets/image/portfolio/exim_flowers.png" alt>
          <a href="https://exim.flowers" class="case-studies" data="Case Studies" target="_blank"></a>
        </figure>
      </div>
      <div class="portfolio-item">
        <figure>
          <img src="./../../assets/image/portfolio/adoptanagent.png" alt>
          <a href="https://www.adoptanagent.com" class="case-studies" target="_blank"></a>
        </figure>
      </div>
      <div class="portfolio-item">
        <figure>
          <img src="./../../assets/image/portfolio/cargo_flowers.png" alt>
          <a href="https://cargo.flowers" class="case-studies" target="_blank"></a>
        </figure>
      </div>
      <div class="portfolio-item">
        <figure>
          <img src="./../../assets/image/portfolio/accuscore.png" alt>
          <a href="http://accuscore.com" class="case-studies" target="_blank"></a>
        </figure>
      </div>
      <div class="portfolio-item">
        <figure>
          <img src="./../../assets/image/portfolio/vessage.png" alt>
          <a href="http://vessage.com" class="case-studies" target="_blank"></a>
        </figure>
      </div> -->

    </div>
  </section>
</template>

<script>
export default {
  name: "app-portfolio",
  data: function() {
    return {
      titleBlock: "Portfolio",

      portfolioBlock: [
        {
          thumbnailSrc: "exim_flowers.webp",
          thumbnailAlt: "exim flowers",
          linkPortfolio: "https://exim.flowers",
          thumbnailSrcset: "exim_flowers@2x.png 2x"
        },
        {
          thumbnailSrc: "vessage.png",
          thumbnailAlt: "vessage",
          linkPortfolio: "http://vessage.com",
          thumbnailSrcset: "exim_flowers@2x.png 2x"
        },
        {
          thumbnailSrc: "cargo_flowers.png",
          thumbnailAlt: "cargo flowers",
          linkPortfolio: "https://cargo.flowers",
          thumbnailSrcset: "exim_flowers@2x.png 2x"
        },
        {
          thumbnailSrc: "accuscore.png",
          thumbnailAlt: "accuscore",
          linkPortfolio: "http://accuscore.com",
          thumbnailSrcset: "exim_flowers@2x.png 2x"
        },
        {
          thumbnailSrc: "adoptanagent.png",
          thumbnailAlt: "adoptanagent",
          linkPortfolio: "https://www.adoptanagent.com",
          thumbnailSrcset: "exim_flowers@2x.png 2x"
        }
      ]
    };
  },

  methods: {
    getPortfolioImg(index) {
      return require("@/assets/image/portfolio/" + this.portfolioBlock[index].thumbnailSrc);
    }
  }

};
</script>

<style src="./style.scss" scoped lang="scss"></style>