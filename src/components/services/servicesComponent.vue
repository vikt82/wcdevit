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
          icon: "envelope",
          text: "EMAIL MARKETING",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni."
        },
        {
          icon: "thumbs-up",
          text: "SOCIAL MEDIA",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "comment",
          text: "PUBLICIDAD ONLINE",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "edit",
          text: "PENSAMIENTO ESTRATÉGICO",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "star",
          text: "PERFORMANCE",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "user",
          text: "CUSTOMER CARE",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "laptop-code",
          text: "RESPONSIVE WEBSITES",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "tablet-alt",
          text: "MOBILE APPS",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "user-friends",
          text: "LEAD GENERATION",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "heart",
          text: "FORTALECIMIENTO DE VÍNCULOS",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "lightbulb",
          text: "CONTENIDO CREATIVO",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis unde exercitationem consectetur magni cumque repellendus dolore pariatur vero recusandae tempora."
        },
        {
          icon: "microphone",
          text: "ACTIVACIONES",
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