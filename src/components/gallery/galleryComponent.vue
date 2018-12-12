<template>
  <section class="gallery">
    <div class="container">
      <h2 class="title-section">{{titleBlock}}</h2>
    </div>

    <div class="flex">
      <div v-for="(item, index) in gBlock" :key="index" class="item-gallery">
        <img :src="getPic(index)" :alt="item.imgAlt">
        <div class="wrapper-item">
          <h2>
            <font-awesome-icon :icon="item.titleIcon" class="icon-title"/>
            {{item.titleItem}}
          </h2>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "app-gallery",
  data: function() {
    return {
      titleBlock: "Balanced Software Solutions",

      gBlock: [
        {
          imgSrc: "g1.jpg",
          imgAlt: "alt-1",
          titleItem: "Ipsum dolor.",
          titleIcon: "hippo"
        },
        {
          imgSrc: "g2.jpg",
          imgAlt: "alt-2",
          titleItem: "Sit amet.",
          titleIcon: "campground"
        },
        {
          imgSrc: "g3.jpg",
          imgAlt: "alt-3",
          titleItem: " Consectetur.",
          titleIcon: "box-open"
        },
        {
          imgSrc: "g4.jpg",
          imgAlt: "alt-4",
          titleItem: "Adipisicing.",
          titleIcon: "bomb"
        }
      ]
    };
  },
  methods: {
    getPic(index) {
      return require("@/assets/" + this.gBlock[index].imgSrc);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>