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
                    <div class="text-center">
                      <h4 class="mt-1 mb-5 pb-1">Bienvenido a Filmoteca</h4>
                    </div>
                    <form v-on:submit.prevent="login">
                      <p>Crear una nueva cuenta</p>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example11"
                          >Nombre</label
                        >
                        <input
                          type="text"
                          id="form2Example11"
                          class="form-control"
                          placeholder="nombre"
                          v-model="usuario"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"
                          >Contraseña</label
                        >
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder="contraseña"
                          v-model="password"
                        />
                      </div>
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg mb-3"
                          type="submit"
                        >
                          Accede
                        </button>
                      </div>
                      <div
                        class="
                          d-flex
                          align-items-center
                          justify-content-center
                          pb-4
                        "
                      >
                        <p class="mb-0 me-2">¿No estás registrado?</p>
                        <button type="button" class="btn btn-outline-danger">
                          Crear una cuenta
                        </button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <img
                      id="logo"
                      src="../assets/logofilmoteca.png"
                      alt="logo filmoteca"
                    />
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

<script >

import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: "new-count",
  data: function () {
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    login() {
      console.log(this.usuario);


    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo {
  position: relative;
  width: 20%;
  right: 500px;
  bottom: 350px;
}
.form-control {
  text-align: center;
}
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>