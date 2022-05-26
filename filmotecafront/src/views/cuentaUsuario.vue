<template>
  <div id="cuentaUsuario">
    <section class="h-100 gradient-form">
      <movimiento />
      <volverApeliculas />
      <div class="col-lg-12" id="caja00">
        <form v-on:submit.prevent="updateUsuario">
          <p>Estos son tus datos</p>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example20"
              >Tu Id de usuario és</label
            >
            <input
              type="text"
              id="form2Example20"
              class="form-control text-center"
              v-model="id"
              readonly
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example21">Nombre</label>
            <input
              type="text"
              id="form2Example21"
              class="form-control text-center"
              v-model="nombre"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example22">Password</label>
            <input
              type="text"
              id="form2Example22"
              class="form-control text-center"
              v-model="password"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example23">Email</label>
            <input
              type="text"
              id="form2Example23"
              class="form-control text-center"
              v-model="email"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example13">Fecha de alta</label>
            <input
              type="text"
              id="form2Example13"
              class="form-control text-center inputE"
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
              type="submit"
              to="/home"
              @click="eliminarUsuario"
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
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

//import router from "../router/index.js";
import movimiento from "../components/movimiento.vue";
import volverApeliculas from "../components/volverApeliculas.vue";
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "inicioPage",
  components: {
    movimiento,
    volverApeliculas,
  },
  data: function () {
    return {
      email: localStorage.mail,
      password: "",
      usuario: [],
      emailusuario: "",
      error: false,
      error_msg: "",
      respuestaOK: "",
      id: "",
      nombre: "",
      fechaAlta: "",
      mensaje: "",
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
            "http://localhost:9012/filmania/v1/usuario/email/" +
              localStorage.mail
          )
          .then((response) => {
            if (response.data != null) {
              this.usuario = response.data;
              this.id = this.usuario.id_usuario;
              this.nombre = this.usuario.name;
              this.password = this.usuario.password;
              this.email = this.usuario.email;
              this.fechaAlta = this.usuario.fechaAlta;
            } else {
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
      this.usuario.nombre = this.nombre;
      this.usuario.password = this.password;
      this.usuario.email = this.email;
      this.usuario.id_usuario = this.id;
      axios
        .put("http://localhost:9012/filmania/v1/usuario", this.usuario)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            this.usuario = response.data;

            this.nombre = this.usuario.name;
            this.password = this.usuario.password;
            this.email = this.usuario.email;
            this.mensaje = "El usuario se actualizó con exito";
            document.getElementById("mensaje").style.display = "block";
            setTimeout(this.ocultarMensaje, 3000);
          }
        });
    },
    eliminarUsuario() {
      document.getElementById("mensaje").style.border = "1px solid red";
      document.getElementById("inp").style.color = "red";

      try {
        axios
          .delete(
            "http://localhost:9012/filmania/v1/usuario/" +
              this.usuario.id_usuario
          )
          .then((response) => {
            if (response.data == 0) {
              this.mensaje = "Cuenta eliminada con exito";
              setTimeout(function () {
                router.push({ name: "home" });
              }, 2000);
              // router.push({name: "home"});
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
  },
};
</script>
<style scoped>
#caja00 {
  text-align: center;
  width: 50%;
  margin: auto;
}
#caja00 input {
  margin-right: auto;
  margin-left: auto;
  width: 50%;
}
#slider {
  width: 30%;
}
section {
  background-color: white;
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
  background-color: rgb(0, 255, 200);
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
  height: 30%;
  border: 1px solid rgb(0, 157, 255);
  border-radius: 20px;
  background-color: white;
  display: none;
}
#mensaje button {
  position: absolute;
  right: 45%;
  margin-top: 90px;
}
#mensaje input {
  margin-top: 30px;
  width: 450px;
  border: none;
  text-align: center;
  color: rgb(0, 157, 255);
}
</style>