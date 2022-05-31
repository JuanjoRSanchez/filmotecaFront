<template>
  <div id="updatePelicula">
    <section class="h-100 gradient-form">
      <movimiento />
      <volverApeliculas />
      <div class="col-lg-12" id="caja00">
        <form
          v-on:submit.prevent="addPelicula"
          oninput="result.value = slider.value"
        >
          <h4>Introduce los datos de la película</h4>
          <hr />
          <div class="cajaForm">
            <div class="boxCampo">
              <label class="label01" for="form2Example20">Título</label>
              <input
                type="text"
                id="form2Example20"
                class="inputE readOnly"
                v-model="titulo"
                readonly
              />
            </div>
            <div class="boxCampo">
              <label class="label01" for="form2Example21">Año</label>
              <input
                type="text"
                id="form2Example21"
                class="inputE"
                v-model="anio"
              />
            </div>
            <div class="boxCampo">
              <label class="label01" for="form2Example22">Director</label>
              <input
                type="text"
                id="form2Example22"
                class="inputE readOnly"
                v-model="director"
                readonly
              />
            </div>
            <div class="boxCampo">
              <label class="label01" for="form2Example13">Comentario</label>
              <input
                type="text"
                id="form2Example13"
                class="inputE"
                v-model="comentario"
              />
            </div>
            <label>Ponle nota</label><br />
            <input
              type="range"
              id="slider"
              min="0"
              max="10"
              step="1"
              value="0"
              v-model="nota"
            />
            <br />
            Le pongo un
            <output name="result" for="slider">5</output>
            <hr />
            <p>¿Has visto la película?</p>
            <div class="cajaVisto">
              <div class="boxCampo">
                <label class="form-check-label label01" for="form2Example25"
                  >Si</label
                >
                <input
                  type="radio"
                  id="form2Example25"
                  v-model="vista"
                  class="form-check-input"
                  value="true"
                />
              </div>
              <div class="boxCampo">
                <label class="form-check-label label01" for="form2Example26"
                  >No</label
                >
                <input
                  type="radio"
                  id="form2Example26"
                  v-model="vista"
                  class="form-check-input"
                  value="false"
                />
              </div>
              <hr />
            </div>
            <div class="text-center pt-1 mb-5 pb-1">
              <button
                class="btn btn-primary btn-block fa-lg mb-3"
                type="submit"
                to="/home"
                
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div id="mensaje">
      <input v-model="mensaje" type="text" />
    </div>
    <div id="mensajeAlerta">
      <input v-model="mensajeAlerta" type="text" />
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import router from "../router/index.js";
import movimiento from "../components/movimiento.vue";
import volverApeliculas from "../components/volverApeliculas.vue";

export default {
  name: "updatePelicula",
  components: {
    movimiento,
    volverApeliculas,
  },
  data: function () {
    return {
      email: localStorage.mail,
      vista: false,
      nota: "",
      comentario: "",
      director: "",
      titulo: "",
      anio: "",
      resultadoAjaxNombre: "",
      resultadoAjaxApellido: "",
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
      idPelicula: "",
      pelis: {},
      peliDTO: {},
      pelicula: {},
      mensaje: "",
      mensajeAlerta: ""
    };
  },
  created() {
    if (localStorage.mail) {
      this.idPelicula = localStorage.idPelicula;
      this.AJAXConsultaPeliculaById(this.idPelicula);
    } else {
      router.push({ name: "home" });
    }
  },
  mounted() {
    this.AJAXConsultaPeliculaById(this.idPelicula);
  },
  methods: {
    AJAXConsultaPeliculaById() {
      axios
        .get(
          "http://localhost:9012/filmoteca/v1/pelicula/" +
            localStorage.idPelicula
        )
        .then((response) => {
          this.pelicula = response.data;
          console.log(this.pelicula);
          console.log("Pelicula deevuelta" + " " + this.pelicula.nota);
          this.director = this.pelicula.nombreDirector;
          this.titulo = this.pelicula.title;
          this.anio = this.pelicula.anio;
          this.nota = this.pelicula.nota;
          this.comentario = this.pelicula.comentario;
          this.vista = this.pelicula.vista;
        });
    },
    deleteDatosPelicula() {
      localStorage.idPelicula = "";
    },
    addPelicula() {
      const fecha = new Date();
      const anioActual = fecha.getFullYear();
      if (this.vista == "true") {
        this.vista = true;
      } else {
        this.vista = false;
      }
      if (isNaN(this.anio)) {
        this.alertaAnio = "Revisa la fecha por favor";
      } else if (this.anio < 1880 || this.anio > anioActual) {
        this.mensajeAlerta = "Revisa la fecha por favor";
        document.getElementById("mensajeAlerta").style.display = "block";
        setTimeout(this.ocultarMensajeAlerta, 3000);
      } else if (this.comentario.length > 200) {
        this.mensajeAlerta = "El comentario es demasiado largo";
        document.getElementById("mensajeAlerta").style.display = "block";
        setTimeout(this.ocultarMensajeAlerta, 3000);
      } else {
        this.peliDTO.id = this.idPelicula;
        this.peliDTO.emailusuario = localStorage.mail;
        // Título
        this.peliDTO.title = this.titulo;
        // Años
        this.peliDTO.anio = this.anio;
        // Director
        this.peliDTO.nombreDirector = this.director;
        // Comentario
        this.peliDTO.comentario = this.comentario;
        // Nota
        this.peliDTO.nota = this.nota;
        // Vista
        this.peliDTO.vista = this.vista;

        axios
          .put(
            "http://localhost:9012/filmoteca/v1/pelicula/update/" +
              this.idPelicula,
            this.peliDTO
          )
          .then((response) => {
            if (response.data === "ok") {
              this.mensaje = "La película se ha modificado con exito";
              document.getElementById("mensaje").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            } else {
              window.alert("La película no se pudo guardar");
              //router.push("/UpdatePelicula");
            }
          });
      }
      this.deleteDatosPelicula();
    },
    rellenarDirector(nombre) {
      this.director = nombre;
      this.resultadoAjaxNombre = "";
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
      router.push("inicio");
    },
    ocultarMensajeAlerta() {
      document.getElementById("mensajeAlerta").style.display = "none";
    },
  },
};
</script>
<style scoped>
#updatePelicula {
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding-bottom: 50px;
}
#caja00 {
  background-color: rgb(253, 253, 253);
  padding-top: 15px;
  margin-bottom: 50px;
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
.readOnly {
  background-color: bisque;
}
.boxCampo {
  width: 100%;
  margin-top: 15px;
  margin-right: 10%;
  margin-bottom: 15px;
}
.cajaForm {
  width: 40%;
  min-width: 350px;
  margin-right: auto;
  margin-left: auto;
}
.label01 {
  width: 100px;
}
.inputE {
  width: 60%;
  min-width: 300px;
  margin: auto;
  right: 0;
  border-radius: 5px;
}
.cajaVisto {
  width: 200px;
  margin: auto;
}
#slider {
  width: 80%;
  max-width: 500px;
}
#mensajeAlerta {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 100px;
  border: 1px solid rgb(116, 21, 21);
  border-radius: 20px;
  background-color: white;
  display: none;
}
#mensajeAlerta button {
  position: absolute;
  right: 45%;
  margin-top: 90px;
}
#mensajeAlerta input {
  margin-top: 30px;
  width: 450px;
  border: none;
  text-align: center;
  color: rgb(116, 21, 21);
}
#mensaje {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 100px;
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