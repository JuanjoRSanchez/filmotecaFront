<template>
  <div id="updatePelicula">
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
                      <div v-if="pelis"></div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example20"
                          >Título</label
                        >
                        <input
                          type="text"
                          id="form2Example20"
                          class="form-control text-center"
                          v-model="titulo"  
                          readonly                      
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example21"
                          >Año</label
                        >
                        <input
                          type="text"
                          id="form2Example21"
                          class="form-control text-center"
                          v-model="anio"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"
                          >Director</label
                        >
                        <input
                          type="text"
                          id="form2Example22"
                          class="form-control text-center"
                          v-model="director"
                          readonly
                        />
          
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example23"
                          >Comentario</label
                        >
                        <input
                          type="text"
                          id="form2Example23"
                          class="form-control text-center"
                          v-model="comentario"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example24"
                          >Nota</label
                        >                  
                        <input
                          type="text"
                          id="form2Example24"
                          class="form-control text-center"
                          v-model="nota"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example25"
                          >Vista</label
                        >
                        <input
                          type="text"
                          id="form2Example25"
                          class="form-control text-center"
                          v-model="vista"
                        />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="alert alert-danger" role="alert" v-if="error">
      <p>{{ error_msg }}</p>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import router from  "../router/index.js";

export default {
  name: "updatePelicula",
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
      pelicula: {}
    };
  },
   created() {
    if (localStorage) {
      console.log("entro al created");
      this.idPelicula = localStorage.idPelicula;
      console.log(this.idPelicula);
      this.AJAXConsultaPeliculaById(this.idPelicula);    
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
          if (response.data != null ) {
             this.resultadoAjaxNombre = response.data;          
          }
        });
    },
    
    AJAXConsultaPeliculaById() {
      axios
        .get("http://localhost:9012/filmania/v1/pelicula/" + localStorage.idPelicula )
        .then((response) => {
            this.pelicula = response.data;
            console.log(this.pelicula);
            console.log("Pelicula deevuelta" + " " + this.pelicula.nota);
            this.director = this.pelicula.nombreDirector ;
            this.titulo = this.pelicula.title ;
            this.anio = this.pelicula.anio ;
            this.nota = this.pelicula.nota;
            this.comentario = this.pelicula.comentario;
            this.vista = this.pelicula.vista;
        });       
    },
    deleteDatosPelicula(){
      localStorage.idPelicula = "";
    },
    addPelicula(){
      console.log("Entro a addPelicula");
            this.peliDTO.id = this.idPelicula;
            this.peliDTO.emailusuario = localStorage.mail;
            // Título
            this.peliDTO.title =  this.titulo;
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
        .put("http://localhost:9012/filmania/v1/pelicula/update/" + this.idPelicula , this.peliDTO )
        .then((response) => {
          if(response.data === "ok"){
            window.alert("La película se ha modificado con exito");
            router.push("/inicio");
          }else{       
            window.alert("La película no se pudo guardar");
            router.push("/UpdatePelicula");
          }
        });
      this.deleteDatosPelicula();
    },
     rellenarDirector(nombre){
      console.log("estoy en rellenar");
      this.director = nombre;
      this.resultadoAjaxNombre = "";
      
    }

  },
};
</script>
<style scoped>
#sug >li{
    list-style: none;
}
#sug >li>a{
    text-decoration:none;
}
#sugerencias{
  
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
#updatePelicula{
  margin: auto;
}
</style>