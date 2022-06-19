<template>
  <div id="updatePelicula">
    <section class="h-100 gradient-form">
      <headerMain />
      <returnToHome />
      <div class="col-lg-12" id="cajaUpdate">
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
  name: "updatePelicula",
  components: {
    headerMain,
    returnToHome,
    FooterComponent,
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
      mensajeAlerta: "",
    };
  },
  created() {
    if (localStorage.mail) {
      this.idPelicula = localStorage.idPelicula;
      this.AJAXConsultaPeliculaById(this.idPelicula);
    } else {
      router.push({ name: "LandingPage" });
    }
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
              this.mensaje = "La película se ha actualizado con exito";
              document.getElementById("mensaje").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
            } else {
              this.mensajeAlerta =
                "Lo sentimos pero no pudimos actualizar la película, intentalo más tarde";
              document.getElementById("mensajeAlerta").style.display = "block";
              setTimeout(this.ocultarMensaje, 3000);
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
      router.push("homePage");
    },
    ocultarMensajeAlerta() {
      document.getElementById("mensajeAlerta").style.display = "none";
    },
  },
};
</script>
<style scoped>
#updatePelicula {
  background-color: rgb(0, 0, 0);
  height: 100%;
  color: white;
}
#cajaUpdate {
  background-color: rgb(0, 0, 0);
  padding-top: 15px;
  margin-bottom: 50px;
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
.cajaComentario {
  width: 80%;
  height: 110px;
  display: flex;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 19px;
}
.label02 {
  width: 100px;
  margin-bottom: 50px;
  margin-right: 10px;
}
.textArea {
  width: 100%;
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
  background-color: rgb(201, 21, 21);
  color: rgb(255, 255, 255);
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
  margin-top: 30px;
  width: 400px;
  border: none;
  text-align: center;
  color: rgb(253, 253, 253);
  background-color: rgb(27, 148, 82);
}
@media (min-width: 966px) and (max-width: 1280px) {
  .cajaComentario {
    width: 80%;
    height: 110px;
    display: flex;
    margin-bottom: 30px;
    margin-right: 10%;
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