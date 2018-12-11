<template>
  <div>
    <div class="container-">
      <h1>{{titleBlock}}</h1>
      <div class="flex">
        <div v-for="image in images" :key="image.id" class="ddd">
          <img :src="image.imgSrc" :alt="image.imgAlt">
        </div>
      </div>
      <p style="text-align: center;margin-top: 20px;">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-gallery",
  data: function () {
    return {
      titleBlock: 'Gallery',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et accusantium a mollitia molestias praesentium voluptatum possimus, dicta assumenda veritatis, ut totam in provident reprehenderit repellendus placeat voluptatibus eaque quasi ipsum!',
      images: [
        {
          'imgSrc': '../../assets/assets/g1.jpg',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': './../../assets/g2.jpg',
          'imgAlt': 'comp'
        }
      ]
    }
  }
};
</script>

<style scoped>
@import "./style.scss";
</style>