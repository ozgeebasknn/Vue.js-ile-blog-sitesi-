<template>
  <div class="row">
    <HeaderComponent></HeaderComponent>
    <div class="container-fluid">
      <div class="container">
        <div class="text-center">
          <!-- <h1 class="display-4 baslik">Hoşgeldin!</h1>
          <img class="img-fluid" src="../assets/backgrounds/micheal.jpg" /> -->
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,

    FooterComponent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
  font-style: bold;
  text-shadow: 2px 2px rgba(251, 230, 183, 1);
}
.baslik {
  text-align: center;
  padding: 290px;
  align-content: center;
  justify-content: center;
  margin-left: 100px;
}
@media only screen and (max-width: 600px) {
  .baslik {
    text-align: center;
  }
}
@media only screen and (min-width: 600px) {
  .baslik {
    text-align: center;
  }
}
@media only screen and (max-width: 766px) {
  .baslik {
    position: relative;

    left: -130px;
  }
}
@media only screen and (max-width: 992px) {
  .baslik {
    margin-left: 1px !important;
  }
}
@media only screen and (max-width: 580px) {
  .baslik {
    position: relative;

    left: -1px;
  }
}
</style>
