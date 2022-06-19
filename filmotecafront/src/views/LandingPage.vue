<template>
  <div class="LandingPage">
    <img alt="Vue logo" src="../assets/LogoFilmoteca00.png" />
    <bodyLandingPage />
    <div id="foot">
          <footerComponent />

    </div>
  </div>
</template>
<script>
import bodyLandingPage from "../components/BodyLandingPage.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "LandingPage",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
  components: {
    bodyLandingPage,
    FooterComponent
  },
  created() {
    this.actualizarLocalStorage();
  },
  methods: {
    actualizarLocalStorage() {
      localStorage.clear();
    },
  },
};
</script>
<style scoped>
.LandingPage{
  background-color: black;
}
img {
  margin-top: 50px;
  width: 40%;
  min-width: 340px;
  margin-left: auto;
  margin-right: auto;
}
 #foot{
   margin-top: 70px ;
 }
@media (min-width: 650px) and (max-width: 925px ){
 #foot{
   margin-top: 180px ;
 }
}
@media (max-width: 650px ){
 #foot{
   margin-top: 190px ;
 }
}
</style>