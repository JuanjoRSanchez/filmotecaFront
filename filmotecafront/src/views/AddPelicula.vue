<template>
  <div id="login">
    <section class="h-100 gradient-form" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <!-- 
                        <div class="text-center">
                            <h4 class="mt-1 mb-5 pb-1">Bienvenido a Filmoteca</h4>
                        </div>
                    -->
                    <form v-on:submit.prevent="login">
                      <p>Introduce tus datos</p>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example11"
                          >Título</label
                        >
                        <input
                          type="text"
                          id="form2Example11"
                          class="form-control text-center"
                          v-model="usuario"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"
                          >Año</label
                        >
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control text-center"
                          v-model="password"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"
                          >Director</label
                        >
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control text-center"
                          v-model="password"
                        />
                      </div>
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg mb-3"
                          type="submit"
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
      {{ error_msg }}
    </div>
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
    addPelicula() {
      console.log(this.usuario);

      let usuario = {
        email: this.usuario,
        password: this.password,
      };
      console.log(usuario);
      axios
        .post(
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