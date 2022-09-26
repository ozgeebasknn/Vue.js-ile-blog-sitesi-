<template>
  <div class="container ">
    <HeaderComponent></HeaderComponent>
    <div class=" d-flex align-items-stretch flex-wrap justify-content-center">
   <UsersCard v-for="user in users" :key="user.id" :user="user"/>
   <FooterComponent></FooterComponent>
  </div>
</div>

</template>
<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapState } from 'vuex';
import UsersCard from "@/components/UsersCard";

export default {
  data() {
    return {
  
    };
  },

  computed:{
    ...mapState({
      users:'users'
    })
  },
  mounted(){
    this.$store.dispatch('getUsers')
  },

  components: { HeaderComponent, FooterComponent, UsersCard,  },
};
</script>

<style>

.tumSayfa {
  padding: 75px;

}

</style>
