<template>
  <div class="row tumSayfa ">
    <HeaderComponent></HeaderComponent>
    <div class="card w-100 iletisimCard ">
      <div class="row">
        <h5>Fikirlerini Paylaş!</h5>

        <div class="card-body">
          <form d-flex class="form">
            <br />
            <div class="row">
              <div class="col">
                <label for="InputName">Ad: </label>
                <input
                  @input="$v.ad.$touch()"
                  v-model="ad"
                  type="text"
                  class="form-control"
                  placeholder="Ad"
                  required
                />
                <small v-if="!$v.ad.required" class="form-text text-danger"
                  >Bu alan zorunludur.</small
                >
              </div>
              <div class="col">
                <label for="InputLastName">Soyad: </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Soyad"
                  @input="$v.soyad.$touch()"
                  v-model="soyad"
                />
                <small v-if="!$v.soyad.required" class="form-text text-danger"
                  >Bu alan zorunludur.</small
                >
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Adresi: </label>
              <input
                @input="$v.email.$touch()"
                v-model="email"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Email "
              />
              <small v-if="!$v.email.required" class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small v-if="!$v.email.email" class="form-text text-danger"
                >Lütfen geçerli bir e-posta adresi giriniz.</small
              >
            </div>
            <br />
            <br />
            <div class="form-group">
              <label for="exampleInput1"
                >Yazı Göndermek İstediğiniz Konu:
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Seçiniz...</option>
                <option value="1">Kitap</option>
                <option value="2">Film</option>
                <option value="3">Dizi</option>
              </select>
            </div>
            <div class="row">
              <label for="exampleInputUpload1">Dosyaları Yükleyiniz: </label>
              <div class="input-group mb-3">
                <input type="file" class="form-control"/>
                <!-- <small v-if="!$v.dosya.required" class="form-text text-danger"
                  >Bu alan zorunludur.</small
                > -->
              </div>
            </div>
            <br />
          </form>

          <button @click="submitButton()" class="btn btn-success" :disabled="$v.$invalid">
            Gönder!
          </button>
        </div>
      </div>
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: null,
      ad: null,
      soyad: null,
      dosya: null,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  validations: {
    email: {
      required,
      email,
    },
    ad: {
      required,
    },
    soyad: {
      required,
    },
  },

  methods: {
    submitButton() {
      swal({
        title: "İşlem başarılı.",
        text: "İletişim bilgileriniz bize ulaşmıştır. En kısa sürede size dönüş yapacağız.",
        icon: "success",
        buttons: "Tamam",
      });
    },
  },
};
</script>

<style scoped>
form {
  padding-left: 20px;
  font-size: 20px;
}

.card {
  margin: 30px;
}
.card-text {
  text-align: center;
  margin: 160px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}

h5 {
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  border-radius: 10px;
  background-color: #824fb2;
  color: white;
}
h5:hover {
  animation: tilt-shaking 0.7s;
}
@keyframes tilt-shaking {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0eg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.btn {
  margin-left: 19px;
}
.iletisimCard {
  margin-left: 95px;
  border-radius: 16px;
  max-width: 820px;
  background-color: transparent;
  text-align: center;

  box-shadow: 20px 20px 20px 10px #ac7d88;
}
.tumSayfa {
  padding: 150px;
}
@media only screen and (max-width: 992px) {
  .tumSayfa {
    flex-wrap: wrap;
  }

}
small {
  float: left;
}
input {
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  font-size: 20px;
}
@media only screen and (max-width: 920px) {
 
.card-body{
  flex-wrap: wrap;
  flex-direction: column;

}
}
@media only screen and (max-width: 680px) {

.iletisimCard{
  flex-wrap: wrap !important;
  display: flex !important;

}
}
</style>
