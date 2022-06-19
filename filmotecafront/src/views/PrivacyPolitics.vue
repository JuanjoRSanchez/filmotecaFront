<template>
  <div id="politicas">
    <headerMain />
    <h2>Política de privacidad</h2>
    <hr />
    <div id="texto">
     Principios aplicados en el tratamiento de datos

En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:

    Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.
    Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.
    Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento.
    El Titular te informará del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.
    Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.
   Tus derechos

El Titular te informa que sobre tus datos personales tienes derecho a:

    Solicitar el acceso a los datos almacenados.
    Solicitar una rectificación o la cancelación.
    Solicitar la limitación de su tratamiento.
    Oponerte al tratamiento.
    Solicitar la portabilidad de tus datos.

El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.
   
    </div>
    <div id="foot">
      <footerComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import headerMain from "../components/Header.vue";
export default {
  name: "politicasPrivacidad",
  components: { headerMain, FooterComponent },
  mounted() {
    if (localStorage.mail) {
      document.getElementById("log").style.display = "block";
    }
  },
};
</script>

<style scoped>
h2 {
  color: white;
}
hr {
  border: 1px solid white;
}
#aboutFilmoteca {
  background-color: black;
}
#texto {
  color: white;
  width: 80%;
  margin: auto;
  height: 450px;
}
#log {
  display: none;
}
@media (min-width: 600px) and (max-width: 850px) {
  #texto {
    font-size: 14px;
  }
  #foot {
    margin-top: 100px;
  }
}
@media (max-width: 600px) {
  #texto {
    font-size: 12px;
  }
  #foot {
    margin-top: 120px;
  }
}
</style>