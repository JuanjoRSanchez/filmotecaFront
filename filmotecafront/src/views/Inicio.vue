<template>
  <div>
    <div id="acciones">
      <div>
        <table id="peliculaAcciones">
          <tr>
            <td> <router-link to="/AddPelicula" type="button">Añadir nueva película</router-link></td>
            <div id="usuario">Hola! {{ name }}</div>
          </tr>
        </table>
      </div>
      <table id="filtros">
        <tr>
          <td>Filtrar por:</td>
          <td>Director</td>
          <td>Año</td>
          <td>Título</td>
        </tr>
      </table>
    </div>
    <!-- 
    <ul id="pelis">
      <li v-for="peli in pelis" :key="peli">{{ peli }}</li>
    </ul>
    -->
    <table id="pelis">
      <tr id="titulos">
        <td>Id</td>
        <td>Título</td>
        <td>Año de estreno</td>
        <td>Director</td>
        <td>Comentario</td>
        <td>Nota</td>
        <td class="btnMan">Eliminar</td>
        <td class="btnMan">Modificar</td>
      </tr>
      <tr id="peliculadetalles" v-for="peli in pelis" :key="peli" >
        <td>{{ peli.id_pelicula }}</td>
        <td>{{ peli.title }}</td>
        <td>{{ peli.anio }}</td>
        <td>{{ peli.director.name + peli.director.lastname }}</td>
        <td>{{ "Pendiente de lógica" }}</td>
        <td>{{ "Pendiente" }}</td>
        <td class="btnMan"><button  v-on:click="deletePelicula(peli.title)">X</button> </td>
        <td class="btnMan">M</td>
      </tr>
    </table>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


export default {
  name: "inicioPage",
  data: function () {
    return {
      name: localStorage.name,
      email: "",
      password: "",
      pelis: [],
      error: false,
      error_msg: "",
    };
  },
  mounted() {
    if (localStorage.mail) {
      this.email = localStorage.mail;
      this.getPeliculas();
    }
  },
  methods: {
    getPeliculas() {
      console.log(this.usuario);

      let usuario = {
        email: this.usuario,
        password: this.password,
      };
      console.log(usuario);
      axios
        .get(
          "http://localhost:9012/filmania/v1/pelicula/usuarioMail/" + this.email
        )
        .then((response) => {
          if (response.data != null) {
            console.log(response.data);

            localStorage.mail = this.email;
            this.pelis = response.data;
          } else {
            console.log("Sin respuesta");
            this.error = true;
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePelicula(title){
      console.log("Entro a hacer la petición");
      axios
        .delete("http://localhost:9012/filmania/v1/pelicula/title/" + title)
          .then(
            window.location.reload()
          )
    }
  },
};
</script>

<style>
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
  margin-left: 40%;
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