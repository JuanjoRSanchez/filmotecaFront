<template>
  <div>
    <div id="acciones">
      <div>

              <router-link to="/AddPelicula" type="button"
                >Añadir nueva película</router-link
              >
        
            <div id="usuario">Hola! {{ email }}</div>
        
    
      </div>
      <!--
      <table id="filtros">
        <tr>
          <td>Filtrar por:</td>
          <td  ><a href="#" @click="ordenDirector(pelis)">Director</a></td>
          <td>Año</td>
          <td>Título</td>
        </tr>
      </table>
      -->
    </div>
    <div v-if="pelis">
      <table id="pelis">
        <tr id="titulos">
          <td class="tdMin">Id</td>
          <td class="tdTitulo">Título</td>
          <td class="tdMed">Año de estreno</td>
          <td class="tdDirector">Director</td>
          <td id="tdComentario">Comentario</td>
          <td class="tdMin">Nota</td>
          <td class="tdMin">Vista</td>
          <td class="btnMan tdMin" >Eliminar</td>
          <td class="btnMan tdMin">Modificar</td>
        </tr>
        <tr id="peliculadetalles" v-for="peli in pelis" :key="peli.id">
          <td>{{ peli.id }}</td>
          <td>{{ peli.title }}</td>
          <td>{{ peli.anio }}</td>
          <td>{{ peli.nombreDirector }}</td>
          <td>{{ peli.comentario }}</td>
          <td>{{ peli.nota }}</td>
          <td>{{ peli.vista }}</td>
          <td class="btnMan" @click="deletePelicula(peli.id)">X</td>
          <td class="btnMan" @click="setIdPelicula(peli.id)">
            <router-link             
              to="/UpdatePelicula"
              type="button"
              class="btn btn-outline-primary"
              >M</router-link
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {ordenarDirector} from "../../Utiles/Filtros.js";

export default {
  name: "inicioPage",
  data: function () {
    return {
      nombre: "",
      email: "",
      password: "",
      pelis: {},
      director: {},
      error: false,
      error_msg: "",
    };
  },
  mounted() {
    if (localStorage) {
      console.log("ddddddddddddddd");
      this.email = localStorage.mail;
      this.nombre = localStorage.name,
        // this.getPeliculas();
        console.log(localStorage);
      this.response = null;
    }
  },
  created() {
    this.getPeliculasDTO();
  },
  watch(){
  
  },
  methods: {
   ordenDirector:function(){
     this.pelis = ordenarDirector(this.pelis);
     
   },
    setIdPelicula(peliId) {
      localStorage.idPelicula = peliId;
    },
    /*
    getPeliculas() {
      
      try {
        axios
          .get(
            "http://localhost:9012/filmania/v1/pelicula/lista/" +
              localStorage.mail
          )
          .then((response) => {
            if (response.data != null) {
              console.log(response);
             this.pelis = response.data;
             console.log(this.pelis);
            } else {
              console.log("Sin respuesta");
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
    */
    getPeliculasDTO() {   
      try {
        axios
          .get(
            "http://localhost:9012/filmania/v1/pelicula/listas/" +
              localStorage.mail
          )
          .then((response) => {
            if (response.data != null) {
              console.log(response);
              this.pelis = response.data;
              console.log(this.pelis);
            } else {
              console.log("Sin respuesta");
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
    deletePelicula(peliID) {
      if (window.confirm("Está apunto de borrar la película ¿Está seguro?")) {
        try {
          axios
            .delete(
              "http://localhost:9012/filmania/v1/pelicula/borrar/" + peliID
            )
            .then((response) => {
              if (response.data == "ok") {
                console.log("Elemento borrado");
                location.reload();
              } else {
                console.log("No se ha podido borrar la película");
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>
.tdMin{
 width: 50px;
}
.tdMed{
 max-width: 100px;
}
#tdComentario{
 width: 30%;
  word-wrap: break-word;
}
span {
  display: none;
}
tr :hover span {
  display: block;
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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
#peliculadetalles td {
  padding-bottom: 5px;
  padding-top: 5px;
}
td {
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