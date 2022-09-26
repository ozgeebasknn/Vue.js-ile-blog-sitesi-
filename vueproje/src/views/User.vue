<template>
  <div class="container text-center">
    <HeaderComponent></HeaderComponent>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.pinimg.com/564x/00/da/18/00da1892683c9e75308a1e83523eded1.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">NAME: {{ user.name }}</h5>
            <p class="card-text">EMAIL: {{ user.email }}</p>
            <p class="card-text">
              ADDRESS: {{ userAddress.street }} Suite:
              {{ user.address.suite }} City: {{ user.address.city }} Zipcode:
              {{ user.address.zipcode }} Lat: {{ user.address.geo.lat }} Lng:
              {{ user.address.geo.lng }}
            </p>
            <p class="card-text">PHONE: {{ user.phone }}</p>
            <p class="card-text">
              COMPANY: {{ user.company.name }} Catch Phrase:
              {{ user.company.catchPhrase }} Bs: {{ user.company.bs }}
            </p>
            <p class="card-text">
              <a href="" class="text-muted">{{ user.website }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    userAddress() {
      return this.$store.state.user.address;
    },
  },
  mounted() {
    this.$store.dispatch("getUser", this.id);
  },
  components: { HeaderComponent, FooterComponent },
};
</script>
<style scoped>
.card-text {
  font-size: 20px;
  font-family: Aboreto;
}
.card {
  margin-top: 240px;
  background-color: #2a2a2a;
  color: white;
  max-width: 1080px;
  justify-content: center;
  position: relative;
}
a:hover {
  color: #fff338 !important;
}
</style>
