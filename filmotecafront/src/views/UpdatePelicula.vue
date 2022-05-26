<template>
  <div id="updatePelicula">
    <section class="h-100 gradient-form">
      <movimiento />
      <volverApeliculas />
      <div class="col-lg-12">
        <div class="card-body p-md-5 mx-md-4 caja">
          <form
            v-on:submit.prevent="addPelicula"
            oninput="result.value = slider.value"
          >
            <p>Introduce los datos de la película</p>
            <div v-if="pelis"></div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example20">Título</label>
              <input
                type="text"
                id="form2Example20"
                class="form-control text-center readOnly"
                v-model="titulo"
                readonly
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example21">Año</label>
              <input
                type="text"
                id="form2Example21"
                class="form-control text-center"
                v-model="anio"
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example22">Director</label>
              <input
                type="text"
                id="form2Example22"
                class="form-control text-center readOnly"
                v-model="director"
                readonly
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example13">Comentario</label>
              <input
                type="text"
                id="form2Example13"
                class="form-control text-center inputE"
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
            <div class="form-outline mb-4 cajaRadio">
              <div class="form-check">
                <label class="form-check-label" for="form2Example25">Si</label>
                <input
                  type="radio"
                  id="form2Example25"
                  v-model="vista"
                  class="form-check-input"
                  value="true"
                />
              </div>
              <div class="form-check">
                <label class="form-check-label" for="form2Example26">No</label>
                <input
                  type="radio"
                  id="form2Example26"
                  v-model="vista"
                  class="form-check-input"
                  value="false"
                />
              </div>
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
          </form>
        </div>
      </div>
      <div class="alert alert-danger" role="alert" v-if="error">
        <p>{{ error_msg }}</p>
      </div>
    </section>
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
  watch: {
    titulo: function () {
      this.AJAXConsultaPeliculaById();
    },
    director: function () {
      this.AJAXConsultaDirector();
    },
  },
  methods: {
    AJAXConsultaDirector() {
      axios
        .get("http://localhost:9012/filmania/v1/director/AJAX/" + this.director)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            this.resultadoAjaxNombre = response.data;
          }
        });
    },

    AJAXConsultaPeliculaById() {
      axios
        .get(
          "http://localhost:9012/filmania/v1/pelicula/" +
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

      console.log(this.peliDTO);
      axios
        .put(
          "http://localhost:9012/filmania/v1/pelicula/update/" +
            this.idPelicula,
          this.peliDTO
        )
        .then((response) => {
          if (response.data === "ok") {
            window.alert("La película se ha modificado con exito");
            router.push("/inicio");
          } else {
            window.alert("La película no se pudo guardar");
            router.push("/UpdatePelicula");
          }
        });
      this.deleteDatosPelicula();
    },
    rellenarDirector(nombre) {
      this.director = nombre;
      this.resultadoAjaxNombre = "";
    },
  },
};
</script>
<style scoped>
.caja {
  text-align: center;
}
.caja input {
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
.readOnly{
  background-color: bisque;
}
</style>