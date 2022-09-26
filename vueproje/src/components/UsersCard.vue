<template>
    <div class="col-xs-5 col-sm-6 col-lg-4">
        <HeaderComponent></HeaderComponent>
      <div class="card ">
        <img src="https://i.pinimg.com/564x/00/da/18/00da1892683c9e75308a1e83523eded1.jpg" alt="">
        <div class="card-body">
          <h5 class="card-title">
            <router-link
                :to="{name:'User',params:{id: user.id}}">
              {{user.name}}
            </router-link>
          </h5>
          <strong>{{user.email}}</strong>
          <p class="card-text">{{user.website}}</p>
        </div>
      
      </div>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
  
  export default {
    name: "UsersCard",
    props: ["user"],
    components: { HeaderComponent, FooterComponent }
}
  </script>
  
  <style scoped>
  .card{
    margin-top:150px;
    margin-bottom: 100px;
    background-color: transparent;
    box-shadow: 20px 20px 20px 10px #ac7d88;
    margin-inline: 15px;
    
    
  }

  </style>