<template>
  <div id="cuentaUsuario">
    <section class="h-100 gradient-form">
      <movimiento />
      <volverApeliculas />
      <div class="col-lg-12" id="caja00">
        <form v-on:submit.prevent="updateUsuario">
          <h3>Estos son tus datos</h3>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example20"
              >Tu Id de usuario és</label
            >
            <input
              type="text"
              id="form2Example20"
              class="form-control text-center readOnly"
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
              class="form-control text-center inputE readOnly"
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
        id="inp"
        type="text"
        placeholder="¿Esta seguro de liminar su cuenta de Filmoteca?"
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
      mensajeConfirmacion: "",
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
#caja00 {
  text-align: center;
  width: 50%;
  height: 35%;
  margin: auto;
  padding-top: 20px;
  background-color: rgb(60, 203, 228);
  border-radius: 20px;
}
#caja00 input {
  margin-right: auto;
  margin-left: auto;
  width: 50%;
}
.readOnly {
  background-color: bisque;
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
#mensajeConfirmacion {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 22%;
  border: 3px solid rgb(255, 0, 0);
  border-radius: 20px;
  background-color: white;
  display: none;
}
#mensajeConfirmacion div {
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
}
#mensajeConfirmacion input {
  margin-top: 30px;
  width: 450px;
  border: none;
  text-align: center;
  color: rgb(0, 157, 255);
}
</style>