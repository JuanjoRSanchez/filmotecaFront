<template>
  <div id="addPelicula">
    <section class="h-100 gradient-form">
      <headerMain />
      <returnToHome />
      <div class="col-lg-12" id="cajaAddPelicula">
        <form
          v-on:submit.prevent="addPelicula"
          oninput="result.value = slider.value"
        >
          <h4>Introduce los datos de la película</h4>
          <hr />
          <div class="cajaForm">
            <div class="boxCampo">
              <label class="label01" for="form2Example10">Título</label>
              <input
                type="text"
                id="form2Example10"
                class="inputE"
                required
                v-model="titulo"
                v-on:KeyDown.enter="AJAXConsultaPelicula"
              />
            </div>
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
            <div class="boxCampo">
              <label class="label01" for="form2Example11">Año</label>
              <input
                type="text"
                id="form2Example11"
                class="inputE"
                v-model="anio"
              />
            </div>
            <div class="boxCampo">
              <label class="label01" for="form2Example12">Director</label>
              <input
                type="text"
                id="form2Example12"
                class="inputE"
                v-model="director"
                v-on:KeyDown.enter="AJAXConsultaDirector"
              />
            </div>
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
            <div class="cajaComentario">
              <label class="label02" for="form2Example13">Comentario</label>
              <textarea
                id="form2Example13"
                class="inputtE textArea"
                v-model="comentario"
              >
              </textarea>
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
            <div class="cajaVisto">
              <div class="boxCampo">
                <label class="form-check-label label01" for="form2Example15"
                  >Si</label
                >
                <input
                  type="radio"
                  id="form2Example15"
                  v-model="vista"
                  class="form-check-input"
                  value="true"
                />
              </div>
              <div class="boxCampo">
                <label class="form-check-label label01" for="form2Example16"
                  >No</label
                >
                <input
                  type="radio"
                  id="form2Example16"
                  v-model="vista"
                  class="form-check-input"
                  value="false"
                />
              </div>
            </div>
            <hr />
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
    <div id="mensajeAlerta">
      <input v-model="mensajeAlerta" type="text" />
    </div>
    <footerComponent />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import router from "../router/index.js";
import headerMain from "../components/Header.vue";
import returnToHome from "../components/ReturnToHome.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "inicioPage",
  components: {
    headerMain,
    returnToHome,
    FooterComponent,
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
      mensaje: "",
      mensajeAlerta: "",
    };
  },
  watch: {
    director: function () {
      this.AJAXConsultaDirector();
    },
    titulo: function () {
      this.AJAXConsultaPelicula();
    },
  },
  mounted() {
    if (localStorage.mail) {
      this.name = localStorage.name;
    } else {
      router.push({ name: "home" });
    }
  },
  created() {
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
        this.mensajeAlerta = "Revisa la fecha por favor";
        document.getElementById("mensajeAlerta").style.display = "block";
        setTimeout(this.ocultarMensajeAlerta, 3000);
      } else if (this.comentario.length > 200) {
        this.mensajeAlerta = "El comentario es demasiado largo";
        document.getElementById("mensajeAlerta").style.display = "block";
        setTimeout(this.ocultarMensajeAlerta, 3000);
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
        console.log(this.peliculaDTO)
        axios
          .post(
            "http://localhost:9012/filmoteca/v1/pelicula/add",
            this.peliculaDTO
          )
          .then((response) => {
            if (response.data === 0) {

              this.mensaje = "Ya hemos guardado la película en tu estantería";
              document.getElementById("mensaje").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            } else if (response.data == 1) {
              this.mensajeAlerta =
                "La pelicula que quieres guardar ya está en tu estantería";
              document.getElementById("mensajeAlerta").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            } else {
              this.mensajeAlerta =
                "Lo sentimos pero no pudimos sctualizar la película, intentalo más tarde";
              document.getElementById("mensajeAlerta").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        this.alertaAnio = "";
        this.alertComentario = "";
      }
    },
    AJAXConsultaDirector() {
      axios
        .get(
          "http://localhost:9012/filmoteca/v1/director/ajax/" + this.director
        )
        .then((response) => {
          if (response.data != "") {
            this.resultadoAjaxNombre = response.data;
          } else {
            document.getElementById("sugerencias01").style.display = "none";
          }
        });
    },
    AJAXConsultaPelicula() {
      axios
        .get(
          "http://localhost:9012/filmoteca/v1/pelicula/titulo/" + this.titulo
        )
        .then((response) => {
          if (response.data != "") {
            this.resultadoAjaxPeliculaTitulo = response.data;
          } else {
            document.getElementById("sugerencias00").style.display = "none";
            document.getElementById("sugerencias01").style.display = "none";
          }
        });
    },
    rellenarPelicula(pelicula) {
      this.director = pelicula.nombreDirector;
      this.titulo = pelicula.title;
      this.anio = pelicula.anio;
      document.getElementById("sugerencias00").style.display = "none";
    },
    rellenarDirector(nombre) {
      this.director = nombre;
      document.getElementById("sugerencias01").style.display = "none";
      document.getElementById("sugerencias00").style.display = "none";
    },
    ocultarMensaje() {
      document.getElementById("mensaje").style.display = "none";
      router.push("homePage");
    },
    ocultarMensajeAlerta() {
      document.getElementById("mensajeAlerta").style.display = "none";
    },
  },
};
</script>
<style scoped>
#addPelicula {
  background-color: rgb(5, 5, 5);
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  color: white;
}
#cajaAddPelicula {
  background-color: rgb(5, 5, 5);
  padding-top: 15px;
  margin-bottom: 50px;
}
#slider {
  width: 30%;
}
#sugerencias00 {
  position: absolute;
  width: 30%;
  margin-left: 5%;
  background-color: rgba(216, 250, 248, 0.993);
  height: auto;
  padding-top: 15px;
  padding-bottom: 5px;
  display: block;
  z-index: 100;
}
#sugerencias01 {
  position: absolute;
  width: 30%;
  margin-left: 5%;
  background-color: rgba(216, 250, 248, 0.993);
  height: auto;
  padding-top: 15px;
  padding-bottom: 5px;
  display: block;
  z-index: 100;
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
#mensajeAlerta {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 100px;
  border: 3px solid rgb(201, 21, 21);
  border-radius: 20px;
  background-color: rgb(201, 21, 21);
  display: none;
}
#mensajeAlerta input {
  margin-top: 30px;
  width: 400px;
  border: none;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(201, 21, 21);
}
#mensaje {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 35%;
  width: 30%;
  height: 100px;
  border: 3px solid rgb(27, 148, 82);
  border-radius: 20px;
  background-color: rgb(27, 148, 82);
  display: none;
}
#mensaje input {
  margin-top: 10px;
  width: 400px;
  border: none;
  text-align: center;
  color: rgb(253, 253, 253);
  background-color: rgb(27, 148, 82);
}
.boxCampo {
  width: 100%;
  margin-top: 15px;
  margin-right: 10%;
  margin-bottom: 15px;
}
.cajaComentario {
  width: 80%;
  height: 110px;
  display: flex;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 19px;
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
.label02 {
  width: 90px;
  margin-bottom: 50px;
  margin-right: 10px;
}
.inputE {
  width: 60%;
  min-width: 300px;
  margin: auto;
  right: 0;
  border-radius: 5px;
}
.textArea {
  width: 100%;
  min-width: 300px;
  border-radius: 10px;
  max-height: 110px;
}
.cajaVisto {
  width: 200px;
  margin: auto;
}
#slider {
  width: 80%;
  max-width: 500px;
}
@media (min-width: 966px) and (max-width: 1280px) {
  .cajaComentario {
    width: 80%;
    height: 110px;
    display: flex;
    margin-bottom: 30px;
    margin-right: 14%;
    padding-left: 0px;
  }
  .label02 {
    width: 90px;
    margin-bottom: 50px;
    margin-right: 10px;
  }
  .textArea {
    width: 80%;
    min-width: 300px;
    border-radius: 10px;
    max-height: 110px;
  }
}
@media (max-width: 1120px) {
  .cajaComentario {
    width: 100%;
    height: 150px;
    display: block;
    padding-left: 0px;
  }
  .textArea {
    width: 100%;
    min-width: 300px;
    border-radius: 10px;
    height: 80%;
    max-height: 180px;
  }
  .label02 {
    width: 90px;
    margin-bottom: 5px;
    margin-right: 10px;
  }
}
</style>