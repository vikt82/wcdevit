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
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },{
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        }
        ,{
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'imgAlt': 'comp'
        },
        {
          'imgSrc': 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
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