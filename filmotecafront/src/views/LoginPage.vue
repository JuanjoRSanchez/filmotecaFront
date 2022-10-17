<template>
  <div id="login">
    <headerMain />
    <section class="h-100 gradient-form">
      <div id="cajaLogin">
        <form v-on:submit.prevent="login">
          <h2>Introduce tus datos</h2>
          <hr style="color: white" />
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example11">Email</label>
            <input
              type="email"
              id="form2Example11"
              class="form-control inputText"
              placeholder="email"
              v-model="email"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example22">Contraseña</label>
            <input
              type="password"
              id="form2Example22"
              class="form-control inputText"
              placeholder="contraseña"
              v-model="password"
              minlength="5"
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
        </form>
        <div class="align-items-center justify-content-center pb-4" >
          <p>¿No estás registrado?</p>
          <p>
            <router-link
              to="/registrationPage"
              type="button"
              class="btn btn-primary"
              id="cuenta"
              >Crea una cuenta</router-link
            >
          </p>
        </div>
        <div id="mensaje">
          <input type="text" />
          <input v-model="mensaje" type="text" />
        </div>
      </div>
    </section>
    <div id="foot">
      <footerComponent />
    </div>
  </div>
</template>

<script >
import axios from "axios";
import router from "../router/index.js";
import "bootstrap/dist/css/bootstrap.css";
import headerMain from "../components/Header.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "LoginIni",
  components: {
    headerMain,
    FooterComponent,
  },
  data: function () {
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
      localStorage: "",
      email: "",
      mensaje: "",
      loginDTO: {},
    };
  },
  mounted() {},
  methods: {
    login() {
      console.log("entro a login");
      axios
        .get(
          "http://localhost:9012/filmoteca/v1/usuario/login?" +
            "email=" +
            this.email +
            "&" +
            "password=" +
            this.password
        )
        .then((response) => {
          //console.log(response.data);
          this.loginDTO = response.data;
          if (this.loginDTO.valor == 2) {
            localStorage.mail = this.email;
            localStorage.name = this.loginDTO.name;
            router.push("homePage");
          } else if (this.loginDTO.valor == 1) {
            console.log(this.loginDTO.name);
            this.mensaje = this.loginDTO.name;
            this.error = true;
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          } else if (this.loginDTO.valor == 3) {
            this.mensaje = this.loginDTO.name;
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
#login {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(0, 0, 0);
}
h2 {
  color: white;
}
.inputText {
  width: 150px;
  min-width: 300px;
}
form {
  padding: 50px;
}
#cajaLogin {
  margin: auto;
  width: 35%;
  min-width: 350px;
  height: 400px;
  background-color: rgb(46, 11, 92);
  border-radius: 20px;
}
#cajaLogin input {
  width: 80%;
  min-width: 270px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
label {
  color: white;
}
section {
  padding-top: 20px;
  background-color: black;
}
#logo {
  position: relative;
  width: 80%;
  left: 500px;
  bottom: 350px;
}
#alerta {
  width: 600px;
  margin: auto;
}
.btnAcceder {
  border: 0.5px solid white;
}
p {
  color: rgb(255, 255, 255);
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
  background-color: rgb(148, 22, 22);
  display: none;
}
#mensaje input {
  color: rgb(252, 252, 252);
  background-color: rgb(148, 22, 22);
  margin-top: 20px;
  width: 450px;
  text-align: center;
  border: none;
}
#foot{
  margin-top: 160px;
}
</style>