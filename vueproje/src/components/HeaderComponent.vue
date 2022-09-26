<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img
          src="../assets/icons/navbarIcon.png"
          width="50"
          height="50"
          alt=""
        />BLOG
        <!-- <h2 class="navbar-brand navbarBaslik ">BLOG</h2> -->
      </div>
      <button
        class="navbar-toggler"
        style="background-color: white"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style="background-color: #d7b2d2"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BLOG</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">ANASAYFA</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/icerik" class="nav-link active"
                >İÇERİKLER</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/iletisim" class="nav-link active"
                >İLETİŞİM</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/users" class="nav-link active"
                >USERS</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: solid black 5px; */
  display: block;
  /* margin-top: 10px; */
  background-color: #d7b2d2;

}
.nav-link:hover{
  color:#FFF338 !important;
}

.nav-link {
  color: purple !important;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  font-weight: bold;
}
.navbarBaslik {
  font-size: 30px;
  margin: 0;
}
.navbar-toggler {
  border: solid 5px black;
}
.navbar-brand {
  font-size: 35px;
  font-family: monospace;
}

</style>
