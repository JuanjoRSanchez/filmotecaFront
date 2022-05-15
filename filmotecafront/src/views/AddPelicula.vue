<template>
  <div id="login">
    <section class="h-100 gradient-form" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <router-link to="/inicio">Home</router-link>
                <div id="usuario">Hola! {{ email }}</div>
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <form v-on:submit.prevent="addPelicula">
                      <p>Introduce los datos de la película</p>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example10"
                          >Título</label
                        >
                        <input
                          type="text"
                          id="form2Example10"
                          class="form-control text-center"
                          v-model="titulo"
                          v-on:KeyDown.enter="AJAXConsultaPelicula2"
                        />
                        <div
                          id="sugerancias"
                          v-if="resultadoAjaxPeliculaTitulo"
                        >
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
                          <label class="form-label" for="form2Example11"
                            >Año</label
                          >
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control text-center"
                            v-model="anio"
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example12"
                            >Director</label
                          >
                          <input
                            type="text"
                            id="form2Example12"
                            class="form-control text-center"
                            v-model="director"
                          />
                          <div id="sugerancias" v-if="resultadoAjaxNombre">
                            <ul
                              v-for="dir in resultadoAjaxNombre"
                              :key="dir.id_director"
                              id="sug"
                            >
                              <li>
                                <a
                                  href="#"
                                  @click="rellenarDirector(dir.name)"
                                  >{{ dir.name }}</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example13"
                            >Comentario</label
                          >
                          <input
                            type="text"
                            id="form2Example13"
                            class="form-control text-center"
                            v-model="comentario"
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example14"
                            >Nota</label
                          >
                          <input
                            type="text"
                            id="form2Example14"
                            class="form-control text-center"
                            v-model="nota"
                          />
                        </div>
                        <p>¿Has visto la película?</p>
                        <div class="form-outline mb-4">
                          <div class="form-check">
                            <label class="form-check-label" for="form2Example15"
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
                          <div class="form-check">
                            <label class="form-check-label" for="form2Example16"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error_msg }}
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "inicioPage",
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
    };
  },
  props: {
    peliculaDTOS: {
      type: Array,
      default: () => [],
    },
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
      console.log("guardo el mail en mail");
      this.name = localStorage.name;
      console.log(this.email);
    }
  },
  methods: {
    addPelicula() {
      if (this.vista == "true") {
        this.vista = true;
      } else {
        this.vista = false;
      }
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
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          console.log("No hay respuesta");
        });
      if (window.confirm("La pélicula se guradó con existo")) {
        router.push("inicio");
      }
    },
    AJAXConsultaDirector() {
      axios
        .get("http://localhost:9012/filmania/v1/director/AJAX/" + this.director)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            this.resultadoAjaxNombre = response.data;
            console.log(
              "resultadoAjaxNombre: " + this.resultadoAjaxNombre.name
            );
          }
        });
    },
    /*
    AJAXConsultaPelicula() {
      console.log("entro a ajax");
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/peli/" + this.titulo)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            var result = response.data;

            this.resultadoAjaxPeliculaTitulo = response.data;
            for(var i = 0; i < result.length; i++){
              console.log(result[i]);
            }         
          }
        });
    },
    */
    AJAXConsultaPelicula2() {
      console.log("entro a ajax");
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/titulo/" + this.titulo)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            this.resultadoAjaxPeliculaTitulo = response.data;
          }
        });
    },
    /*
    AJAXConsultaPeliculaById() {
      console.log("entro a ajax");
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/peli/" + this.titulo)
        .then((response) => {
          console.log(response.data);
          if (response.data != null) {
            var result = response.data;

           
           
            for(var i = 0; i < result.length; i++){
              console.log(result[i]);
            }         
          }
        });
    },
     consultaPeliculaUsuById() {
      console.log("entro a ajax");
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/" + 2)
        .then((response) => {
          
          if (response.data != null) {
            this.peliculaRelleno = response.data;
            console.log(this.peliculaRelleno);
            console.log(this.peliculaRelleno.title);

            this.director = this.peliculaRelleno.nombreDirector ;
            this.titulo = this.peliculaRelleno.title ;
            this.anio = this.peliculaRelleno.anio ;

          }
        });
    },
    */
    rellenarPelicula(pelicula) {
      this.director = pelicula.nombreDirector;
      this.titulo = pelicula.title;
      this.anio = pelicula.anio;
    },
    rellenarDirector(nombre) {
      console.log("estoy en rellenar");
      document.getElementById("form2Example12").value = nombre;
    },
  },
};
</script>

<style scoped>
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
.btnMan {
  width: 80px;
}
#titulos td {
  background-color: blue;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>