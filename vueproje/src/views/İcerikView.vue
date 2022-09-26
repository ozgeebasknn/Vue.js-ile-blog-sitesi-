<template>
  <div class="row">
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <br />
      <div class="justify-content-center d-flex mx-auto cardDiv">
        <CardComponent :items="items" />
      </div>

      <br />
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { mapState } from 'vuex';



export default {
  components: {
    HeaderComponent,
    CardComponent,
    FooterComponent,
   
},
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Kitaplar",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestias.",
          img: require("../assets/backgrounds/books.jpg"),

        },

        {
          id: 2,
          title: "Filmler",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestias.",
          img: require("../assets/backgrounds/movies.jpg"),
        },
        {
          id: 3,
          title: "Diziler",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestias.",
          img: require("../assets/backgrounds/tv.jpg"),
        },
      ],
    };
  },

  
};
</script>

<style scoped>
.container {
  margin-top: 150px;
}
</style>
