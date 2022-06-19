<template>
  <div id="header">
    <router-link id="link" to="/homePage">
      <img alt="Logo Filmoteca" src="../assets/LogoFilmoteca00.png" />
    </router-link>
    <div id="cajabtn">
      <button class="btnHeader">
        <router-link
          to="/userAcount"
          style="text-decoration: none; color: white"
          >Accede a tu cuenta</router-link
        >
      </button>
      <button class="btnHeader" @click="salirAplicacion">
        Salir de la aplicación
      </button>
    </div>
    <div v-if="email" id="usuario01">Hola! {{ name }}</div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import router from "../router/index.js";

export default {
  name: "headerMain",
  data: function () {
    return {
      email: localStorage.mail,
      name: localStorage.name,
    };
  },
  mounted() {
    if (!localStorage.mail) {
      document.getElementById("cajabtn").style.display = "none";
    }
  },
  methods: {
    salirAplicacion() {
      localStorage.clear();
      router.push("/");
    },
  },
};
</script>
<style scope>
#header {
  position: relative;
  background-color: rgb(6, 0, 59);
  height: 130px;
  margin-bottom: 25px;
  display: flex;
}
#link {
  width: 30%;
  min-width: 350px;
}
img {
  margin-top: 15px;
  width: 20%;
  min-width: 320px;
}
#usuario01 {
  position: relative;
  top: 20px;
  margin-left: 17%;
  color: aliceblue;
  border: 1px solid red;
  border-radius: 10px;
  padding: 15px;
  height: 55px;
}
#cajabtn {
  position: absolute;
  width: 300p;
  top: 35px;
  right: 10px;
  display: block;
  padding-right: 30px;
}
#btnSalir:hover {
  background-color: rgb(90, 43, 43);
  border: 1px solid rgb(253, 251, 251);
}
.btnHeader {
  text-decoration: none;
  background-color: rgb(194, 61, 61);
  padding: 10px;
  border-radius: 10px;
  color: white;
  margin-right: 20px;
  border-style: none;
}
.btnHeader:hover {
  background-color: rgb(90, 43, 43);
  border: 1px solid rgb(253, 251, 251);
  color: white;
}
@media (max-width: 750px) {
  #header {
    height: 180px;
  }
  #link {
    width: 30%;
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    margin: auto;
    margin-top: 95px;
    padding-right: 10px;
  }
  #cajabtn {
    position: absolute;
    top: 25px;
    right: auto;
    left: auto;
    width: 100%;
    height: 50px;
    padding-left: 20px;
  }
  .btnHeader {
    text-decoration: none;
    background-color: rgb(194, 61, 61);
    padding: 5px;
    border-radius: 10px;
    color: white;
    margin-right: 20px;
    border-style: none;
    font-size: 15px;
  }
}
@media (min-width: 720px) and (max-width: 1100px) {
  #usuario01 {
    display: none;
  }
  img {
    margin: auto;
  }
}
@media (min-width: 381px) and (max-width: 752px) {
  #usuario01 {
    display: none;
  }
  img {
    margin: auto;
    margin-top: 100px;
  }
}
@media (max-width: 370px) {
  #usuario01 {
    display: none;
  }
  #header {
    height: 230px;
     font-size: 10px;
  }
  #cajabtn {
    height: 100px;
   
  }
  .btnHeader {
    margin-bottom: 10px;
    margin-right: 10px;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
}
</style>