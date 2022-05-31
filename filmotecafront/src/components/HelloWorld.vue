<template>
  <div id="hello">
    <h1>Bienvenido a Filmoteca!</h1>
    <div class="caja">
      <p>Si ya tienes cuenta con nosotros, identificate</p>
      <router-link to="/login">Identificación</router-link>
    </div>
    <div class="caja01">
      <p>Si no tienes cuenta, registra una</p>
      <router-link to="/newcount">Crear nueva cuenta</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    localStorage.clear();
  },
  mounted() {
    localStorage.clear();
  },
};
</script>
<style scoped>
#hello {
  top: 150px;
  margin: auto;
  height: 100%;
  width: 60%;
  padding: 30px;
}
h3 {
  margin: 40px 0 0;
}
p {
  /*
    margin-top: 20px;

  */
}
a {
  color: #edf8c6;
  border: 1px solid red;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-decoration: none;
}
.caja01{
  margin-top: 50px;
}
</style>
