<template>
  <div id="movimiento">
    <router-link to="/">
      <img alt="Logo Filmoteca" src="../assets/LogoFilmoteca00.png" />
    </router-link>
    <button id="btnSalir" @click="salirAplicacion">Salir de la aplicación</button>
    <!-- <router-link to="/" id="btnSalir" @click="salirAplicacion">Salir de la aplicación</router-link> -->
    <router-link to="/cuentaUsuario" id="btnCuenta">Tu cuenta</router-link>
    <div v-if="email" id="usuario01">Hola! {{ name }}</div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import router from "../router/index.js";

export default {
  name: "movimientoG",
  data: function () {
    return {
      email: localStorage.mail,
      name: localStorage.name
    };
  },
  mounted() {
    if(!localStorage.mail){
       document.getElementById("btnCuenta").style.display = "none";
       document.getElementById("btnSalir").style.display = "none";
    }
  
    
  },
   methods: {
     salirAplicacion(){
       localStorage.clear();
       router.push('/');
     }
   },
};
</script>
<style scope>
#movimiento {
  position: relative;
  background-color: rgb(8, 8, 8);
  height: 120px;
  margin-bottom: 20px;
}
img {
  margin-top: 15px;

  width: 25%;
  min-width: 320px;
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
  top: 34px;
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
@media (max-width: 750px ){
#movimiento{
  height: 180px;
}
img{
  margin: auto;
  margin-top: 95px;
}

}
@media (max-width: 900px){
  #usuario01{
    display: none;
  }
}
</style>