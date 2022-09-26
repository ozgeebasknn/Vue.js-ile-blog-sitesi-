<template>
  <div class="row container d-flex justify-content-center mx-auto">
    <HeaderComponent></HeaderComponent>

    <div
      v-if="$route.params.id == 1"
      class="container d-flex justify-content-center mx-auto"
    >
      <div class="card" v-for="kitap in kitaplar" :key="kitap.id">
        <div class="card-body">
          <h2>{{ kitap.title }}</h2>
          <p class="col">{{ kitap.text }}</p>
        </div>
      </div>
    </div>

    <div
      v-else-if="$route.params.id == 2"
      class="container d-flex justify-content-center mx-auto"
    >
      <div class="card" v-for="film in filmler" :key="film.id">
        <div class="card-body">
          <h2>{{ film.title }}</h2>
          <p class="col">{{ film.text }}</p>
        </div>
      </div>
    </div>
    <div
      v-else-if="$route.params.id == 3"
      class="container d-flex justify-content-center mx-auto"
    >
      <div class="card" v-for="dizi in diziler" :key="dizi.id">
        <div class="card-body">
          <h2>{{ dizi.title }}</h2>
          <p class="col">{{ dizi.text }}</p>
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
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      kitaplar: [
        {
          id: 1,
          title: "Martin Eden",
          text: "Yazarı hakkında pek çok ipucu veren yarı otobiyografik romanlar ilginizi çeker mi? Öyleyse Amerikalı yazar Jack London'ın kaleme aldığı Martin Eden adlı romanı keyifle okuyacaksınız! Sınıf ayrımı, aşk, aile sevgisi, kardeşlik ve arkadaşlık gibi çeşitli konuların işlendiği eserde işçi sınıfından genç bir adamın hayatı anlatılıyor. Eserdeki olaylar ve karakterler ise yazarın yaşamıyla paralellik gösteriyor.",
        },
        {
          id: 2,
          title: "Dokunmadan",
          text: "Adalet, yirmi dokuz yaşında genç bir kadın. Hayata ve insanlara dokunmadan, ne mutlu ne mutsuz, öylesine yaşayıp gitmektedir. Ta ki doktoru, ölümcül bir hastalığa yakalandığını söyleyene dek... Hastalığı için kendini suçlayan Adalet, hayatını didik didik ederek, ilk günahını, masumiyetini kaybettiği ilk gerçek suçunu bulmaya çabalar. ",
        },
        {
          id: 3,
          title: "Sürgün",
          text: "Aytuğ Akdoğan bir itiraf edebiyatçısı. “Bir insan nasıl aynaya bakmak zorundaysa, ben de yazmak zorundayım” diyerek yola çıkıyor ve günah çıkartmaya başlıyor. Ancak yolda olmak onun için hem büyüleyici hem de pençesinden kurtulamadığı ölümcül bir hastalık gibi. Dolayısıyla yolda karşılaştığı yalnızları, uyumsuzları ya da mültecileri de tüm gerçeklikleriyle yazıyor ve bu sırada kendi yeraltına doğru düşmeye devam ediyor.",
        },
      ],
      filmler: [
        {
          id: 1,
          title: "303",
          text: "Jan insanların doğuştan bencil olduğundan emindir. Onun için de Berlin'den birlikte seyahat etmek için anlaştığı kişi onu ortada bıraktığında hiç şaşırmaz. Jule ise insanların özünde empatiye ve işbirliğine yatkın olduğuna inandığından, Jan'ı külüstür karavanı “303”e davet eder. İkisi de Atlantik kıyılarına doğru gitmek istemektedir. ",
        },
        {
          id: 2,
          title: "Harry Potter ve Felsefe Taşı",
          text: "Harry Potter adında öksüz bir çocuk, 11. doğum gününde, ölen ebeveynlerinin güçlü büyücüler olduğunu ve genç Harry için harikalar dünyasının kapılarını açan saygıdeğer ve gizemli Hogwarts Cadılık ve Büyücülük Okulu'na davet edildiğini keşfeder.",
        },
        {
          id: 3,
          title: "Incendies",
          text: "Annelerinin ölümünün ardından aile dostları olan bir avukatın çağırması üzerine bir vasiyet ile karşılaşan ikiz kardeşler annesinin istediğini yapmak için Lübnan'a giderler. Ailelerinin hakkında karmaşık şeyleri çözmeye çalışan kardeşler sonuça ulaşma konusunda kararlıdırlar. Yürek burkan geçmiş ve Orta Doğu'daki iç savaşın karanlık yüzü ile karşı karşıya kalacaklardır.",
        },
      ],
      diziler: [
        {
          id: 1,
          title: "The Office",
          text: "Çalışanlarının mutluluğunu gözeterek şirket kurallarını esnetmeye çalışan, ara sıra masumane oyunların kurbanı, kaba ve taş kalpli bir şef: Michael Scott. Hepsinin kendince takıntıları olan farklı yaş gruplarından personeliyle ile The Office çalışanlarının hayatlarına şöyle bir göz atıyor.",
        },
        {
          id: 2,
          title: "Modern Family",
          text: "Modern Family, Amerika ABC televizyonun da yayınlanan bir komedi dizisidir. Dizi, 3 aile ve 3 ayrı yaşamı ele almaktadır.",
        },
        {
          id: 3,
          title: "Death Note",
          text: "Yagami Light, üniversite giriş sınavlarına hazırlanan bir lise son sınıf öğrencisidir. Light, Japonya'nın belki de en yetenekli ve zeki öğrencisi olmasına rağmen, yaşadığı dünya ona tat vermemektedir. Her gün gittikçe artan suç oranı ve adalet sisteminin çökmüşlüğü, onun için bu dünyayı daha da anlamsız ve çürümüş kılmaktadır. Light, bu buhranlarını kendi içinde yaşarken, ders sırasında bir defterin gökten düştüğünü görür.",
        },
      ],
    };
  },
  // props: ["id"],
};
</script>
<style scoped>
.container {
  grid-gap: 20px;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
}
.card {
  width: 100%;
  height: 400px;
  display: flex;
  border-radius: 10px;
  /* color: #af7ab3; */
  overflow: hidden;
  position: relative;
  background-color: #af7ab3;
  background-size: 400px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.card:hover {
  background-color: rgba(255, 255, 255, 0);
  transition: 0.8s;
  color: black;
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

h2 {
  font-family: Bebas Neue;
  color: black;
}
p {
  font-family: Aboreto;
  font-size: 20px;
  float: right;
}
@media only screen and (max-width: 992px) {
  .container {
    flex-wrap: wrap;
  }
  .card {
    width: 60%;
  }
  p {
    font-size: 20px !important;
  }
}
@media only screen and (max-width: 1400px) {
  p {
    font-size: 18px;
  }
}
@media only screen and (max-width: 1200px) {
  p {
    font-size: 15px;
  }
  .card {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 769) {

 p {
    font-size: 5px !important;
    word-wrap:break-word;
    padding-bottom: 1rem;
  }
}
</style>
