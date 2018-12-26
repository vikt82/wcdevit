<template>
  <main class="contact-page">
    <section class="map-container">
      <div class="container">
        <h2 class="title-section">How to Reach Us?</h2>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.39850132436203!2d38.97462901968479!3d45.050427877158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f7ea7e05f5f%3A0xcc83c52582c50f53!2z0YPQuy4g0J7QtNC10YHRgdC60LDRjywgMjYsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUwMDIw!5e0!3m2!1sru!2sde!4v1545829161497" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>
    <section class="contact">
      <div class="container">
        <h2 class="title-section">Drop Your Message</h2>
        <form action="" method="post" class="contact-form">
          <div class="grid-container-message">
            <div class="input-left">
            <label for="name" class="important">Name</label>
            <input type="text" name="" id="name">
            <label for="email" class="important">Email</label>
            <input type="text" name="" id="email">
            <label for="phone">Phone</label>
            <input type="text" name="" id="phone">
            <label for="company-name">Company Name</label>
            <input type="text" name="" id="company-name">
          </div>
          <div class="input-right">
            <label for="subject" class="important">Subject</label>
            <input type="text" name="" id="subject">
            <label for="message" class="important">Message</label>
            <textarea name="" id="" cols="30" rows="10" id="message"></textarea>
          </div>
          </div>
          <!-- <button type="submit" class="submit-message">Submit Message</button> -->
          <input type="submit" class="submit-message" value="Submit Message">
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "app-contact"
};
</script>

<style src="./page.scss" scoped lang="scss"></style>