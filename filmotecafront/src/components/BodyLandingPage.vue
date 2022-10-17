<template>
  <div id="BodyLandingPage">
    <h2>Bienvenido a Filmoteca!</h2>
    <div id="presentacion">
      Si eres un cinefilo esta es tu aplicación de gestión de peliculas. Guarda
      información de tus películas, comentarios, notas, etc... Marca las que has
      visto, las que tienes pendientes para poder disfrutar más de tu amor al
      cine.
    </div>
    <hr />
    <div id="cajaEnlaces">
      <ul>
        <li>
          <p>Si ya tienes cuenta con nosotros, identificate</p>
          <hr />
          <router-link id="botones" to="/loginPage">Identificación</router-link>
        </li>
        <li>
          <p>Si no tienes cuenta, registra una</p>
          <hr />
          <router-link id="botones" to="/registrationPage"
            >Crear nueva cuenta</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "bodyLandingPage",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
};
</script>
<style scope>
#BodyLandingPage {
  color: white;
  height: 250px;
  padding-top: 50px;
}
#presentacion {
  width: 95%;
  margin: auto;
}
#cajaEnlaces {
  width: 70%;
  min-width: 330px;
  margin: auto;
  padding-top: 10px;
}
li {
  display: inline-block;
  margin-bottom: 30px;
  margin-right: 30px;
  list-style: none;
}
hr {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: rgb(111, 145, 255);
}
#cajaUsuario {
  width: 250px;
  margin-left: 70%;
  margin-top: 15px;
}
#botones {
  text-decoration: none;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(69, 122, 235);
  border-radius: 10px;
}
a:hover {
  color: rgb(158, 192, 207);
}
@media (min-width: 501) and (max-width: 950px) {
  #BodyLandingPage {
    height: 550px;
  }
  #presentacion {
    font-size: 12px;
  }
}
@media (max-width: 500px) {
  #presentacion {
    font-size: 12px;
  }
}
</style>