<template>
  <div id="movimiento">
    <router-link to="/">
      <img alt="Logo Filmoteca" src="../assets/LogoFilmoteca00.png" />
    </router-link>
    <router-link to="/" id="btnSalir">Salir de la aplicación</router-link>
    <router-link to="/cuentaUsuario" id="btnCuenta">Tu cuenta</router-link>
    <div v-if="email" id="usuario01">Hola! {{ email }}</div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "movimientoG",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
};
</script>
<style scope>
#movimiento {
  position: relative;
  background-color: rgb(8, 8, 8);
  height: 120px;
}
img {
  margin-top: 15px;

  width: 25%;
  margin-right: 70%;
}
#usuario01 {
  position: absolute;
  top: 28px;
  left: 46%;

  color: aliceblue;
  border: 1px solid red;
  border-radius: 10px;
  padding: 15px;
}
#usuario {
  right: 6.5%;
  margin-top: 15px;
  color: white;
}
#btnSalir {
  position: absolute;
  top: 37px;
  right: 50px;
  text-decoration: none;
  background-color: rgb(194, 61, 61);
  padding: 10px;
  border-radius: 10px;
  color: white;
}
#btnSalir:hover {
  background-color: rgb(90, 43, 43);
  border: 1px solid rgb(253, 251, 251);
}
#btnCuenta {
  position: absolute;
  top: 37px;
  right: 250px;
  text-decoration: none;
  background-color: rgb(194, 61, 61);
  padding: 10px;
  border-radius: 10px;
  color: white;
}
#btnCuenta:hover {
  background-color: rgb(90, 43, 43);
  border: 1px solid rgb(253, 251, 251);
}
</style>