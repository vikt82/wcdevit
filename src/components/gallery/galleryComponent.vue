<template>
  <div>
    <div class="container">
      <h1>{{titleBlock}}</h1>
      <p>{{images.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-gallery",
  data: function () {
    return {
      titleBlock: 'sldkfjglsdkjfglsdjlfgkjsd',
      images: [
        {
          'imgSrc': 'falsjdflaskjdflk',
          'text': 'lorem  dlskajflkjasldjflasd asjdflas dasjdf asldfjas dflas dflas dfasldjf asdfhaskhdfa slsjkdf lasd'
        }
      ]
    }
  },
};
</script>

<style scoped>
@import "./style.scss";
</style>