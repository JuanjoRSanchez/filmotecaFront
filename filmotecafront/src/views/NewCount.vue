<template>
  <div id="newCount">
    <movimiento />
    <section class="h-100 gradient-form" style="background-color: #eee">
      <div id="caja00">
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
          <input
            type="text"
            style="
              margin-top: 20px;
              width: 450px;
              text-align: center;
              border: none;
              color: red;
            "
            placeholder="Lo sentimos pero"
          />
          <input v-model="mensaje" type="text" />
        </div>
      </div>
    </section>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error_msg }}
    </div>
  </div>
</template>

<script >
import axios from "axios";
import router from "../router/index.js";
import "bootstrap/dist/css/bootstrap.css";
import movimiento from "../components/movimiento.vue";

export default {
  name: "new-count",
  components: {
    movimiento,
  },
  data: function () {
    return {
      usuario: "",
      password: "",
      email: "",
      error: false,
      error_msg: "",
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
            this.error = true;
            this.error_msg = response.data.result.error_msg;
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          } else {
            document.getElementById("mensaje").style.display = "block";
            this.mensaje = this.response;
            router.push("inicio");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
    },
  },
};
</script>
<style scope>
h2 {
  color: white;
}
form {
  padding: 50px;
}
#newCount {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f3f;
  background-color: rgb(255, 255, 255);
}
section {
  padding-top: 50px;
}
#caja00 {
  margin: auto;
  width: 35%;
  height: 500px;
  background-color: rgb(60, 203, 228);
  border-radius: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  border: 1px solid red;
  border-radius: 20px;
  background-color: white;
  display: none;
}
#mensaje button {
  position: absolute;
  right: 45%;
  margin-top: 90px;
}
</style>