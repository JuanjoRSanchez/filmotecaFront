<template>
  <div id="newCount">
    <movimiento />
    <section class="h-100 gradient-form">
      <div id="cajaRegistro">
        <form v-on:submit.prevent="registrar">
          <h2>Crear una nueva cuenta</h2>
          <hr style="color: white" />
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example11">Email</label>
            <input
              type="email"
              id="form2Example11"
              class="form-control"
              placeholder="nombre"
              v-model="email"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example12">Nombre</label>
            <input
              type="text"
              id="form2Example12"
              class="form-control"
              placeholder="nombre"
              v-model="usuario"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example13">Contraseña</label>
            <input
              type="password"
              id="form2Example13"
              class="form-control"
              placeholder="contraseña"
              minlength="5"
              v-model="password"
            />
          </div>
          <div class="text-center pt-1 mb-5 pb-1">
            <button class="btn btn-primary btn-block fa-lg mb-3" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
        <div id="mensaje">
          <input v-model="mensaje" type="text" />
        </div>
      </div>
    </section>
    <footerComponent />
  </div>
</template>

<script >
import axios from "axios";
import router from "../router/index.js";
import "bootstrap/dist/css/bootstrap.css";
import movimiento from "../components/Header.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "registrationPage",
  components: {
    movimiento,
    FooterComponent,
  },
  data: function () {
    return {
      usuario: "",
      password: "",
      email: "",
      mensaje: "",
    };
  },
  methods: {
    registrar() {
      let usuario = {
        email: this.email,
        name: this.usuario,
        password: this.password,
        roles: [{ id: 1, nombre: this.name }],
      };
      localStorage.mail = usuario.email;
      localStorage.name = usuario.name;
      axios
        .post("http://localhost:9012/filmoteca/v1/usuario", usuario)
        .then((response) => {
          if (response.data == 0) {
            this.mensaje =
              "Lo sentimos pero ya existe un usuario con este Email";
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          } else {
            document.getElementById("mensaje").style.display = "block";
            this.mensaje = "";
            router.push("homePage");
          }
        });
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
    },
  },
};
</script>
<style scope>
section {
  padding-top: 10px;
  background-color: black;
}
h2 {
  color: white;
}
form {
  padding: 50px;
}
#newCount {
  height: 550px;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #3f3f3f;
  background-color: rgb(0, 0, 0);
}
#cajaRegistro {
  margin: auto;
  width: 35%;
  min-width: 350px;
  height: 500px;
  background-color: rgb(46, 11, 92);
  border-radius: 20px;
  color: white;
}
#cajaRegistro input {
  width: 80%;
  min-width: 270px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
#logo {
  position: relative;
  width: 20%;
  right: 500px;
  bottom: 350px;
}
.form-control {
  text-align: center;
  width: 400px;
  margin: auto;
}
#mensaje {
  position: absolute;
  top: 50%;
  bottom: 50%;
  width: 35%;
  height: 30%;
  border: 3px solid rgb(255, 253, 253);
  border-radius: 20px;
  background-color: rgb(179, 23, 23);
  display: none;
  padding-top: 50px;
  text-align: center;
}
#mensaje input {
  width: 100%;
  background-color: rgb(179, 23, 23);
  text-align: center;
  border: none;
  color: white;
}
</style>