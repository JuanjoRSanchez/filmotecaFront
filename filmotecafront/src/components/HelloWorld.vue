<template>
  <div class="hello">
    <h1>Bienvenido a Filmoteca!</h1>
    <div>
      <p>Si ya tienes cuenta con nosotros, identificate</p>
       <router-link to="/login">Identificación</router-link>
    </div>
    <div>
      <p>Si no tienes cuenta, registra una</p>
    <router-link to="/newcount">Crear nueva cuenta</router-link>
   
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    localStorage.clear();
  },
  mounted(){
    localStorage.clear();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
