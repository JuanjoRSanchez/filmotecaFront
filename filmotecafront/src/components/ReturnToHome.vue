<template>
    <div id="volver">       
        <div id="cajaVolver">
            <router-link  to="/homePage" @click="borrarId" class="btn btn-primary">Volver a tus películas</router-link> 
        </div>                 
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
   name: "returnToHome",
    data: function () {
    return {
    };
  },
  methods: {
      borrarId(){
          localStorage.IdPelicula = "";
      }
  }
}
</script>
<style scope>
#volver{
    background-color: rgb(3, 3, 3);
    height: 100px;
}
#cajaVolver{
    width: 100%;
    padding-top: 15px;
    height: 100px;
    top: 3%;
}
#btnSalida{
margin-top: 15px;
}
</style>