<template>
  <div id="footer">
    <div id="caja">
      <h2>Filmoteca</h2>
      <hr/>
      <ul class="cajafooter">
        <li class="part"><router-link to="/aboutFilmoteca">Sobre Filmoteca</router-link></li>    
        <li class="part"><router-link to="/politicasPrivacidad">Politica de privaidad</router-link></li>
      </ul>
      <p>@2022 Filmoteca- Todos los derechos reservados</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>
<style scoped>
#footer{
  position: static;
  width: 100%;
  height: 100%;
 margin-bottom: 0px;
}
#caja {
  height: 220px;
  background-color: rgb(37, 0, 71);
  margin-top: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 20px;
  padding-top: 20px;

}
.cajaFooter {
  display: flex;
  margin-top: 50px;
  
}
.part {
 margin-top: 20px;
 margin-right: 50px;
 margin-left: 50px;
 list-style: none;
}
p {
  font-size: 12px;
  font-weight: bold;
}

</style>

