<template>
  <div class="d-flex container justify-content-center mx-auto">
    <div class="container d-flex justify-content-center">
      <div class="card" v-for="(item, id) in items" :key="id">
        <h2>{{ item.title }}</h2>
        <div class="card-body">
          <p>{{ item.text }}</p>
          <router-link
            :to="`/icerik/${item.id}`"
            class="container d-flex justify-content-center routerButton"
            >İNCELE</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  grid-gap: 20px;
  justify-content: center;
}
.card {
  width: 100%;
  height: 400px;
  display: flex;
  border-radius: 10px;
  background: rgb(35, 35, 35);
  color: white;
  overflow: hidden;
  position: relative;

  transition: background 0.8s linear;
  /* background-size: 400px; */
  /* text-align: center; */
}
.card {
  background-size: 400px;
  background: url("../assets/backgrounds/galaksi.jpg") center center no-repeat;
}

.card:hover {
  background-size: 650px;
  background-position: left center;
}

.card:hover .card-body {
  right: 0;
}
.card-body {
  height: 90%;
  position: relative;
  /* right: -500px; */
  /* transition: right 0.8s linear; */
  padding: 30px;
  margin: 30px;
}
.buton {
  margin: 30px;
}
.routerButton {
  color: white;
  text-decoration: none;
  font-size: 20px;
  position: relative;
  top: 180px;
}
h2 {
  font-family: Aboreto;
}
p {
  color: transparent;
}
@media only screen and (max-width: 992px) {
  .container {
    flex-wrap: wrap;
  }
  .card {
    width: 60%;
  }
}
@media only screen and (max-width: 475px) {
  .card {
    font-size: 10px;
  }
}
</style>
