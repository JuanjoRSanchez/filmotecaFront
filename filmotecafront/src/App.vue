<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

</script>
<style scoped >
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(0, 0, 0);
  height: 700px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
   text-decoration: none;
}
nav a:hover {
  font-weight: bold;
  color: #a4dace;
 
}
/*
nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
