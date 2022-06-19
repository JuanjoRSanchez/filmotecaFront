<template>
  <div id="cuentaUsuario">
    <section class="h-100 gradient-form">
      <headerMain />
      <returnToHome />
      <div class="col-lg-12" id="cajaUser">
        <form v-on:submit.prevent="updateUsuario">
          <h3>Estos son tus datos</h3>
          <div class="boxCampo">
            <label class="label01" for="form2Example21">Nombre</label>
            <input
              type="text"
              id="form2Example21"
              class="inputE"
              v-model="nombre"
              required
            />
          </div>
          <div class="boxCampo">
            <label class="label01" for="form2Example22">Password</label>
            <input
              type="text"
              id="form2Example22"
              class="inputE"
              minlength="5"
              v-model="password"
              required
            />
          </div>
          <div class="boxCampo">
            <label class="label01" for="form2Example23">Email</label>
            <input
              type="email"
              id="form2Example23"
              class="inputE"
              v-model="email"
              required
            />
          </div>
          <div class="boxCampo">
            <label class="label01" for="form2Example33">Fecha de alta</label>
            <input
              type="text"
              id="form2Example33"
              class="inputE readOnly"
              v-model="fechaAlta"
              readonly
            />
          </div>
          <div class="text-center pt-1 mb-5 pb-1">
            <button
              class="btn btn-primary btn-block fa-lg mb-3"
              type="submit"
              to="/home"
            >
              Actualizar datos
            </button>
          </div>
          <div class="text-center pt-1 mb-5 pb-1">
            <button
              class="btn btn-danger btn-block fa-lg mb-3"
              to="/home"
              @click="confirmar"
            >
              Eliminar cuenta
            </button>
          </div>
        </form>
      </div>
    </section>
    <div id="mensaje">
      <input v-model="mensaje" id="inp" type="text" />
    </div>
    <div id="mensajeConfirmacion">
      <input
        v-model="mensajeConfirmacion"
        type="text"
      />
      <div>
        <button
          class="btn btn-danger btn-block fa-lg mb-3"
          @click="eliminarUsuario"
        >
          Si
        </button>
        <button
          class="btn btn-primary btn-block fa-lg mb-3"
          @click="noEliminar"
        >
          No
        </button>
      </div>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import headerMain from "../components/Header.vue";
import returnToHome from "../components/ReturnToHome.vue";
import axios from "axios";
import router from "../router/index.js";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "userAcount",
  components: {
    headerMain,
    returnToHome,
    FooterComponent,
  },
  data: function () {
    return {
      email: "",
      password: "",
      usuario: {},
      emailusuario: "",
      error: false,
      error_msg: "",
      respuestaOK: "",
      id: "",
      nombre: "",
      fechaAlta: "",
      mensaje: "",
      mensajeConfirmacion: "¿Esta seguro de liminar su cuenta de Filmoteca?",
    };
  },
  mounted() {
    if (!localStorage.mail) {
      router.push({ name: "home" });
    }
    this.getUsuario();
  },
  methods: {
    getUsuario() {
      try {
        axios
          .get(
            "http://localhost:9012/filmoteca/v1/usuario/email/" +
              localStorage.mail
          )
          .then((response) => {
            if (response.data != null) {
              this.usuario = response.data;
              this.id = this.usuario.id_usuario;
              this.nombre = this.usuario.name;
              this.password = this.usuario.password;
              this.email = this.usuario.email;
              this.fechaAlta = this.usuario.fechaAlta.slice(0, -19);
              this.error = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    updateUsuario() {
      this.usuario = {
        name: this.nombre,
        password: this.password,
        email: this.email,
        id_usuario: this.id,
      };
      axios
        .put("http://localhost:9012/filmoteca/v1/usuario", this.usuario)
        .then((response) => {
          console.log(response.data);
          if (response.data != "") {
            this.usuario = response.data;
            console.log(this.usuario.name);
            this.nombre = this.usuario.name;
            this.password = this.usuario.password;
            this.email = this.usuario.email;

            localStorage.mail = this.email;
            localStorage.name = this.name;
            this.mensaje = "El usuario se actualizó con exito";
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          }
        });
    },
    eliminarUsuario() {
      try {
        axios
          .delete(
            "http://localhost:9012/filmoteca/v1/usuario/" +
              this.usuario.id_usuario
          )
          .then((response) => {
            if (response.data == 0) {
              this.mensaje = "Cuenta eliminada con exito";
              setTimeout(function () {
                router.push({ name: "LandingPage" });
              }, 2000);
               //router.push({name: "LandingPage"});
            } else {
              this.mensaje =
                "No ha sido posible eliminar tu cuenta en este momento";
            }
          })
          .catch((error) => {
            this.mensaje = error;
          });
      } catch (error) {
        console.log(error);
      }
    },

    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
    },

    noEliminar() {
      document.getElementById("mensajeConfirmacion").style.display = "none";
    },
    confirmar() {
      document.getElementById("mensajeConfirmacion").style.display = "block";
    },
  },
};
</script>
<style scoped>
#cuentaUsuario {
  background-color: rgb(0, 0, 0);
  height: 100%;
  padding-bottom: 1px;
}
#cajaUser {
  text-align: center;
  width: 50%;
  min-width: 350px;
  height: 45%;
  margin: auto;
  padding-top: 20px;
  background-color: rgb(46, 11, 92);
  border-radius: 20px;
  color: aliceblue;
}
.readOnly {
  background-color: bisque;
}
#slider {
  width: 30%;
}
section {
  background-color: rgb(2, 2, 2);
}
#sug > li {
  list-style: none;
}
#sug > li > a {
  text-decoration: none;
}
#sugerencias {
  border: 2px solid black;
  margin-left: 300px;
}
#usuario {
  position: relative;
  width: 150px;
  background-color: rgb(53, 70, 88);
  margin-left: 80%;
  padding-bottom: 5px;
  padding-top: 5px;
  border: none;
}
#updatePelicula {
  margin: auto;
}
.cajaRadio {
  margin: auto;
  width: 10%;
}
.cajaRadio input {
  margin-left: 27%;
}
#mensaje {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 100px;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 20px;
  background-color: rgb(27, 148, 82);
  display: none;
}
#mensaje button {
  position: absolute;
  right: 45%;
  margin-top: 90px;
}
#mensaje input {
  width: 400px;
  border: none;
  text-align: center;
  color: rgb(254, 255, 254);
  background-color: rgb(27, 148, 82);
}
#mensajeConfirmacion {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 22%;
  border-radius: 20px;
  border: 3px solid rgb(255, 254, 254);
  background-color: rgb(201, 21, 21);
  border: 1px solid white;
  display: none;
}
#mensajeConfirmacion div {
  color: white;
  display: flex;
}
#mensajeConfirmacion button:first-of-type {
  position: absolute;
  right: 25%;
  margin-top: 40px;
  margin-right: 10%;
}
#mensajeConfirmacion button {
  position: absolute;
  right: 45%;
  margin-top: 40px;
  margin-right: 10%;
  border: 1px solid white;
}
#mensajeConfirmacion input {
  margin-top: 30px;
  width: 400px;
  border: none;
  text-align: center;
  color: white;
  background-color:  rgb(201, 21, 21)
}
.boxCampo {
  width: 100%;
  margin-top: 15px;
  margin-right: 10%;
  margin-bottom: 15px;
}
.cajaForm {
  width: 40%;
  margin-right: auto;
  margin-left: auto;
}
.label01 {
  width: 100px;
}
.inputE {
  width: 60%;
  margin-left: 5%;
  right: 0;
  border-radius: 5px;
  text-align: center;
}
.cajaVisto {
  width: 200px;
  margin-left: 30%;
}
@media (max-width: 900px) {
  #caja00 {
    width: 70%;
  }
  .inputE{
    width: 90%;
  }
}
</style>