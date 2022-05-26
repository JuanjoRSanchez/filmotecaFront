<template>
  <div id="cabeceraEntrada">
    <h1>Bienvenido a Filmoteca!</h1>
    <div id="presentacion">
      Si eres un cinefilo esta es tu aplicación de gestión de peliculas. Guarda
      información de tus películas, comentarios, notas, etc... Marca las que has
      visto, las que tienes pendientes para poder disfrutar más de tu amor al
      cine.
    </div>
    <hr />
    <div id="cajaEnlaces">
      <ul id="cont">
        <li>
          <p>Si ya tienes cuenta con nosotros, identificate</p>
          <hr />
          <router-link id="botones" to="/login">Identificación</router-link>
        </li>
        <li>
          <p>Si no tienes cuenta, registra una</p>
          <hr />
          <router-link id="botones" to="/newcount"
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
  name: "cabeceraEntrada",
  data: function () {
    return {
      email: localStorage.mail,
    };
  },
};
</script>
<style scope>
#presentacion {
  width: 80%;
  margin: auto;
}
#cajaEnlaces {
  width: 60%;
  margin: auto;
}
#cont {
  padding: 50px;
}
li {
  display: inline-block;
  margin-right: 50px;
}
hr {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: rgb(111, 145, 255);
}
#cabeceraEntrada {
  color: white;
  height: 350px;
  padding-top: 50px;
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
</style>