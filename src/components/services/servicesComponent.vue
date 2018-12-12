<template>
  <section class="services">
    <div class="container">
      <h2 class="title-section">{{title}}</h2>
      <div class="service-container">
        <div v-for="item in serviceItems" :key="item.id" class="service-item">
          <h3 class="title">
            <font-awesome-icon :icon="item.icon" class="title-icon"/>
            {{item.text}}
          </h3>
          <p class="description">{{item.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "app-services",
  data: function() {
    return {
      title: "Services",
      serviceItems: [
        {
          icon: "journal-whills",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "hands-helping",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "moon",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "swatchbook",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "syringe",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>