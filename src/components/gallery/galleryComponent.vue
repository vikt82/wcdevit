<template>
  <div>
    <div class="container">
      <h1>{{titleBlock}}</h1>
    </div>
    <div class="flex">
      <div v-for="(item, index) in gBlock" :key="index" class="item-gallery">
        <img :src="getPic(index)" :alt="item.imgAlt">
        <div class="wrapper-item">
          <i class="fab fa-acquisitions-incorporated"></i>
          <h3>{{item.titleItem}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-gallery",
  data: function() {
    return {
      titleBlock: "Gallery",

      gBlock: [
        {
          imgSrc: "g1.jpg",
          imgAlt: "alt-1",
          titleItem: 'Ipsum dolor.',
          titleIcon: 'fas fa-address-card'
        },
        {
          imgSrc: "g2.jpg",
          imgAlt: "alt-2",
          titleItem: 'Sit amet.'
        },
        {
          imgSrc: "g1.jpg",
          imgAlt: "alt-3",
          titleItem: ' Consectetur.'
        },
        {
          imgSrc: "g2.jpg",
          imgAlt: "alt-4",
          titleItem: 'Adipisicing.'
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

<style scoped>
@import "./style.scss";
</style>