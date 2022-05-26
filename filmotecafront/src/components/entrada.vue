<template>
  <div id="entrada">
    <div id="cajaUsuario">
      <router-link to="/" style="margin-left: 70%"
        >Salir de la aplicación</router-link
      >
      <div id="usuario">Hola! {{ email }}</div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "entradaPrincipal",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
};
</script>
<style scope>
#entrada {
  height: 150px;
  border: 2px solid red;
}
#cajaUsuario {
  width: 250px;
  border: 2px solid red;
  margin-left: 70%;
  margin-top: 15px;
}
</style>