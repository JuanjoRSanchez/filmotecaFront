<template>
  <div id="login">
    <movimiento />
    <section class="h-100 gradient-form">
      <div id="caja00">
        <form v-on:submit.prevent="login">
          <h2>Introduce tus datos</h2>
          <hr style="color: white" />
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example11">Email</label>
            <input
              type="email"
              id="form2Example11"
              class="form-control"
              placeholder="email"
              v-model="email"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example22">Contraseña</label>
            <input
              type="password"
              id="form2Example22"
              class="form-control"
              placeholder="contraseña"
              v-model="password"
            />
          </div>
          <div class="text-center pt-1 mb-5 pb-1">
            <button
              class="btn btn-primary btn-block fa-lg mb-3 btnAcceder"
              type="submit"
            >
              Accede
            </button>
          </div>
          <div class="align-items-center justify-content-center pb-4">
            <p>¿No estás registrado?</p>
            <p>
              <router-link
                to="/NewCount"
                type="button"
                class="btn btn-primary"
                id="cuenta"
                >Crear una cuenta</router-link
              >
            </p>
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
          <input
            v-model="mensaje"
            type="text"
            style="
              margin-top: 30px;
              width: 450px;
              border: none;
              text-align: center;
              color: red;
            "
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import axios from "axios";
import router from "../router/index.js";
import "bootstrap/dist/css/bootstrap.css";
import movimiento from "../components/movimiento.vue";

export default {
  name: "LoginIni",
  components: {
    movimiento,
  },
  data: function () {
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
      alerta: "No encontramos un usuario con estos datos",
      localStorage: "",
      email: "",
      mensaje: "",
    };
  },
  mounted() {
  },
  methods: {
    login() {
      axios
        .get(
          "http://localhost:9012/filmania/v1/usuario/login?" +
            "email=" +
            this.email +
            "&" +
            "password=" +
            this.password
        )
        .then((response) => {
          if (response.data == 1) {
            localStorage.mail = this.email;
            router.push("inicio");
          } else {
            this.mensaje = this.alerta;
            this.error = true;
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          }
        })
        .catch((error) => {
          this.mensaje = error;
        });
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
    },
  },
};
</script>
<style scoped>
h2 {
  color: white;
}
input {
  border-radius: 10px;
}
form {
  padding: 50px;
}
#caja00 {
  margin: auto;
  width: 35%;
  height: 400px;
  background-color: rgb(60, 203, 228);
  border-radius: 20px;
}
#login {
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
#logo {
  position: relative;
  width: 80%;
  left: 500px;
  bottom: 350px;
}
.form-control {
  text-align: center;
  width: 400px;
  margin: auto;
}
#alerta {
  width: 600px;
  margin: auto;
}
.btnAcceder {
  border: 0.5px solid white;
}
p {
  color: rgb(0, 0, 0);
}
.btnAcceder:hover {
  border: 1px solid rgb(0, 145, 255);
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