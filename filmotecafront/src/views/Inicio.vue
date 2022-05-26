<template>
  <div id="caja">
    <div id="acciones">
      <div>
        <movimiento />
      </div>
      <div>
        <router-link
          to="/AddPelicula"
          type="button"
          id="botones"
          style="margin-top: 25px"
        >
          Añadir nueva película</router-link
        >
        <hr />
        <div id="ordenador">
          <button id="btnOrdenar" @click="mostrarOrdenadores">Ordenar</button>
          <ul id="ordenar">
            <div>
              <li><button @click="ordenarPorAnio">Año {{ sortAnio }}</button></li>
              <li><button @click="ordenarPorNota">Nota {{ sortNota }}</button></li>
              <li><button @click="ordenarPorDirector">Director</button></li>
              <li><button @click="ordenarPorVistas">Vistas primero</button></li>
              <li><button @click="ordenarPorTitulo">Quitar filtros</button></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="pelis">
      <table id="pelis">
        <tr id="titulos">
          <td class="tdTitulo">Título</td>
          <td class="tdMed">Año de estreno</td>
          <td class="tdDirector">Director</td>
          <td class="tdComentario">Comentario</td>
          <td class="tdMin">Nota</td>
          <td class="tdMin">Vista</td>
          <td class="btnMan tdMin">Eliminar</td>
          <td class="btnMan tdMin">Modificar</td>
        </tr>
        <tr id="peliculadetalles" v-for="peli in pelis" :key="peli.id">
          <td>{{ peli.title }}</td>
          <td>{{ peli.anio }}</td>
          <td>{{ peli.nombreDirector }}</td>
          <td class="tdComentario">{{ peli.comentario }}</td>
          <td>{{ peli.nota }}</td>
          <td v-if="peli.vista == true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
              />
            </svg>
          </td>
          <td v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </td>
          <td class="btnMan">
            <a
              class="btn btn-outline-primary btnBorrar"
              @click="deletePelicula(peli.id)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                /></svg
            ></a>
          </td>
          <td class="btnMan" @click="setIdPelicula(peli.id)">
            <router-link
              to="/UpdatePelicula"
              type="button"
              class="btn btn-outline-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-diff"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5zm-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
                />
              </svg>
            </router-link>
          </td>
        </tr>
      </table>
      <!--
      <div id="mensaje">
          <input
            type="text"
            style="margin-top: 20px; width: 450px; text-align: center; border: none; color: red"
            placeholder="Lo sentimos pero"
          />

          <input
            v-model="mensaje"
            type="text"
            style="margin-top: 30px; width: 450px; border: none; text-align: center; color: red"
          />
          <button class="alert alert-danger" @click="cerrarVentana">cerrar</button>
        </div>
        -->
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import movimiento from "../components/movimiento.vue";
import router from "../router";

export default {
  name: "inicioPage",
  components: {
    movimiento,
  },
  data: function () {
    return {
      nombre: "",
      email: "",
      password: "",
      pelis: {},
      director: {},
      error: false,
      error_msg: "",
      pelisPorAnio: {},
      pelisPorNota: {},
      sortAnio: "descendente",
      sortNota: "descendente",
      sortDirector: "descendente",
      mensaje:
        "Lo sentimos en este momento no podemos acceder a tus películas, prueba más tarde",
      sortTitulo: "descendente",
      sortVista: "descendente"
    };
  },
  mounted() {
    if (localStorage.mail) {
      this.email = localStorage.mail;
    } else {
      router.push({ name: "home" });
    }
    document.getElementById("ordenar").style.display = "none";
  },
  created() {
    this.getPeliculasDTO();
  },
  methods: {
    setIdPelicula(peliId) {
      localStorage.idPelicula = peliId;
    },
    getPeliculasDTO() {
      try {
        axios
          .get(
            "http://localhost:9012/filmania/v1/pelicula/listas/" +
              localStorage.mail
          )
          .then((response) => {
            if (response.data != null) {
              this.pelis = response.data;
            } else {
              this.error = true;
            }
          })
          .catch((error) => {
            this.mensaje = error;
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
                location.reload();
              } else {
                window.alert("No se ha podido borrar la película");
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    ordenarPorAnio() {
      if (this.sortAnio == "ascendente") {
        this.pelis.sort(function (a, b) {
          return a.anio - b.anio;
        });
        this.sortAnio = "descendente";
      } else {
        this.pelis.sort(function (a, b) {
          return b.anio - a.anio;
        });
        this.sortAnio = "ascendente";
      }
    },
    ordenarPorNota() {
      if (this.sortNota == "descendente") {
        this.pelis.sort(function (a, b) {
          return a.nota - b.nota;
        });
        this.sortNota = "ascendente";
      } else {
        this.pelis.sort(function (a, b) {
          return b.nota - a.nota;
        });
        this.sortNota = "descendente";
      }
    },
    ordenarPorDirector() {
      if (this.sortDirector == "descendente") {
        this.pelis.sort((a, b) => {
          if (
            a.nombreDirector.charAt(0).toLowerCase() <
            b.nombreDirector.charAt(0).toLowerCase()
          ) {
            return -1;
          }
        });
        this.sortDirector = "ascendente";
      } else {
        this.pelis.sort((a, b) => {
          if (
            a.nombreDirector.charAt(0).toLowerCase() >
            b.nombreDirector.charAt(0).toLowerCase()
          ) {
            return 1;
          }
        });
        this.sortDirector = "descendente";
      }
      return 0;
    },
    ordenarPorTitulo() {
      location.reload();
    },
    ordenarPorVistas() {
        this.pelis.sort((a, b) => {
          if (
            a.vista >
            b.vista
          ) {
            return -1;
          }
        });
       
      return 0;
    },
    mostrarOrdenadores() {
      let disp = document.getElementById("ordenar").style.display;
      if (disp == "") {
        document.getElementById("ordenar").style.display = "none";
      } else {
        document.getElementById("ordenar").style.display = "";
      }
    },
    cerrarVentana() {
      document.getElementById("mensaje").style.display = "none";
      location.reload();
    },
  },
};
</script>
<style scoped>
#caja {
  background-color: rgb(255, 255, 255);
  padding-bottom: 100px;
  min-height: 700px;
}
#ordenador {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
#ordenar {
  display: "none";
}
#ordenar li button {
  width: 150px;
  border-radius: 5px;
  border: 1px solid rgb(198, 198, 221);
  background-color: rgb(148, 148, 196);
}
#ordenar li button:hover {
  width: 150px;
  border-radius: 5px;
  border: 1px solid rgb(148, 148, 196);
  background-color: rgb(198, 198, 221);
}
#ordenar div {
  margin-top: 20px;
}
#btnOrdenar {
  width: 50%;
  border-radius: 5px;
  border: 1px solid rgb(198, 198, 221);
  background-color: rgb(148, 148, 196);
}
#btnOrdenar:hover {
  width: 50%;
  border-radius: 5px;
  border: 1px solid rgb(148, 148, 196);
  background-color: rgb(198, 198, 221);
}
.tdMin {
  width: 50px;
}
.tdMed {
  max-width: 100px;
}
.tdComentario {
  width: 30%;
  max-width: 400px;
  min-width: 150px;
  word-wrap: break-word;
}
span {
  display: none;
}

#pelis {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
#peliculadetalles > td {
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px solid blue;

  border-radius: 10px 10px 10px 10px;
}
#titulos td {
  border-radius: 10px 10px 0px 0px;
}
th {
  border-radius: 10px;
}
tr :hover span {
  display: block;
}
#btn {
  margin-top: 15px;
}
.btnMan {
  width: 80px;
}
.btnBorrar:hover {
  background-color: red;
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
  width: 35%;
  height: 30%;
  border: 1px solid red;
  border-radius: 20px;
  background-color: white;
  display: none;
}
#mensaje button {
  position: absolute;
  right: 45%;
  margin-top: 90px;
}
@media (max-width: 800px) {
  .tdComentario {
    display: none;
  }
}
</style>