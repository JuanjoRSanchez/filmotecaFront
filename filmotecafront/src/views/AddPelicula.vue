<template>
  <div id="addPelicula">
    <section class="h-100 gradient-form">
      <movimiento />
      <volverApeliculas />
      <div class="col-lg-12" id="caja00">
        <form
          v-on:submit.prevent="addPelicula"
          oninput="result.value = slider.value"
        >
          <p>Introduce los datos de la película</p>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example10">Título</label>
            <input
              type="text"
              id="form2Example10"
              class="form-control text-center inputE"
              v-model="titulo"
              v-on:KeyDown.enter="AJAXConsultaPelicula2"
            />
            <div id="sugerencias00" v-if="resultadoAjaxPeliculaTitulo">
              <ul
                v-for="titulo in resultadoAjaxPeliculaTitulo"
                :key="titulo.id_pelicula"
                id="sug"
              >
                <li>
                  <a href="#" @click="rellenarPelicula(titulo)">{{
                    titulo.title
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example11">Año</label>
              <input
                type="text"
                id="form2Example11"
                class="form-control text-center inputE"
                v-model="anio"
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example12">Director</label>
              <input
                type="text"
                id="form2Example12"
                class="form-control text-center inputE"
                v-model="director"
              />
              <div id="sugerencias01" v-if="resultadoAjaxNombre">
                <ul
                  v-for="dir in resultadoAjaxNombre"
                  :key="dir.id_director"
                  id="sug"
                >
                  <li>
                    <a href="#" @click="rellenarDirector(dir.name)">{{
                      dir.name
                    }}</a>
                  </li>
                </ul>
              </div>
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
            <output name="result" for="slider">0</output>
            <br />
            Mueve el punto para evaluar la película
            <hr />
            <p>¿Has visto la película?</p>
            <div class="form-outline mb-4 cajaRadio">
              <div class="form-check">
                <label class="form-check-label" for="form2Example15">Si</label>
                <input
                  type="radio"
                  id="form2Example15"
                  v-model="vista"
                  class="form-check-input"
                  value="true"
                />
              </div>
              <div class="form-check">
                <label class="form-check-label" for="form2Example16">No</label>
                <input
                  type="radio"
                  id="form2Example16"
                  v-model="vista"
                  class="form-check-input"
                  value="false"
                />
              </div>
            </div>
            <div class="text-center pt-1 mb-5 pb-1">
              <button
                to="/home"
                class="btn btn-primary btn-block fa-lg mb-3"
                type="submit"
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
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import router from "../router/index.js";
import movimiento from "../components/movimiento.vue";
import volverApeliculas from "../components/volverApeliculas.vue";

export default {
  name: "inicioPage",
  components: {
    movimiento,
    volverApeliculas,
  },
  data: function () {
    return {
      resultadoAjaxPeliculaTitulo: "",
      email: localStorage.mail,
      password: "",
      pelis: [],
      nota: "",
      comentario: "",
      director: "",
      titulo: "",
      anio: "",
      resultadoAjaxNombre: "",
      resultadoAjaxApellido: "",
      pelicula: [],
      nombreDirector: "",
      title: "",
      vista: "",
      emailusuario: "",
      peliculaDTO: {},
      error: false,
      error_msg: "",
      respuestaOK: "",
      directores: false,
      alertaAnio: "",
      alertComentario: "",
      mensaje: "",
    };
  },
  watch: {
    director: function () {
      this.AJAXConsultaDirector();
    },
    titulo: function () {
      this.AJAXConsultaPelicula2();
    },
  },
  mounted() {
    if (localStorage.mail) {
      this.name = localStorage.name;
    } else {
      router.push({ name: "home" });
    }
  },
  methods: {
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
        this.alertaAnio = "Revisa la fecha por favor";
        window.alert(this.alertaAnio);
      } else if (this.comentario.length > 100) {
        this.alertComentario = "El comentario es demasiado largo";
        window.alert(this.alertComentario);
      } else {
        this.peliculaDTO = {
          emailusuario: this.email,
          nombreDirector: this.director,
          title: this.titulo,
          anio: this.anio,
          comentario: this.comentario,
          nota: this.nota,
          vista: this.vista,
        };
        console.log("peliDTO" + this.peliculaDTO);
        axios
          .post(
            "http://localhost:9012/filmania/v1/pelicula/add",
            this.peliculaDTO
          )
          .then((response) => {
            console.log(response.data);
            if (response.data == null) {
              console.log("Sin respuesta");
              this.error = true;
            } else {
              this.respuestaOK = response.data;
              document.getElementById("mensaje").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        if (window.confirm("La pélicula se guradó con existo")) {
          router.push("inicio");
        }
        this.alertaAnio = "";
        this.alertComentario = "";
      }
    },
    AJAXConsultaDirector() {
      axios
        .get("http://localhost:9012/filmania/v1/director/AJAX/" + this.director)
        .then((response) => {
          if (response.data != null) {
            this.resultadoAjaxNombre = response.data;
          }
        });
    },
    AJAXConsultaPelicula2() {
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/titulo/" + this.titulo)
        .then((response) => {
          if (response.data != null) {
            this.resultadoAjaxPeliculaTitulo = response.data;
          }
        });
    },
    rellenarPelicula(pelicula) {
      this.director = pelicula.nombreDirector;
      this.titulo = pelicula.title;
      this.anio = pelicula.anio;
      document.getElementById("sugerencias00").style.display = "none";
      document.getElementById("sugerencias01").style.display = "none";
    },
    rellenarDirector(nombre) {
      this.director = nombre;
      document.getElementById("sugerencias00").style.display = "none";
      document.getElementById("sugerencias01").style.display = "none";
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
    },
  },
};
</script>
<style scoped>
#addPelicula {
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding-bottom: 50px;
}
#caja00 {
  background-color: rgb(255, 255, 255);
  padding-top: 15px;
  margin-bottom: 50px;
}
.inputE {
  width: 40%;
  margin: auto;
}
.cajaRadio {
  margin: auto;
  width: 10%;
}
.cajaRadio input {
  margin-left: 27%;
}
#slider {
  width: 30%;
}
#sugerencias {
  position: absolute;
  right: 20%;
  top: 375px;
  width: 300px;
  height: 150px;
  max-height: 200px;
  overflow: scroll;
  z-index: 100;
}
#sugerencias00 {
  position: relative;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  overflow: scroll;
}
#sugerencias01 {
  position: relative;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  overflow: scroll;
}
#sugerencias02 {
  position: absolute;
  top: 550px;
  right: 20%;
  width: 300px;
  overflow: scroll;
  max-height: 300px;
}
#sug {
  height: 10px;
  text-align: center;
}
#sug > li {
  list-style: none;
}
#sug > li > a {
  text-decoration: none;
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
#peliculaAcciones {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
#filtros {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
#filtros tr td {
  border-radius: 10px 5px 5px 10px;
}

#pelis {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
#peliculadetalles td {
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
td {
  width: 250px;
  border: 1px solid rgb(0, 132, 255);
}
#btn {
  margin-top: 15px;
}
.btnMan {
  width: 80px;
}
#titulos td {
  background-color: blue;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
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