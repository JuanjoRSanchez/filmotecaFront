<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/LogoFilmoteca00.png" />
    <cabeceraEntrada />
  </div>
</template>
<script>
import cabeceraEntrada from "../components/cabeceraEntrada.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
  components: {
    cabeceraEntrada,
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
.home{
  height: 100%;
}
img {
  margin-top: 50px;
  width: 60%;
  min-width: 340px;
  margin-left: auto;
  margin-right: auto;
}
</style>