<template>
  <div id="aboutFilmoteca">
    <headerMain />
    <h2>Presentación Filmoteca</h2>
    <hr />
    <div id="texto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
      venenatis est. Duis posuere nisl quis viverra porttitor. Curabitur ac
      molestie lacus. Mauris vitae malesuada felis. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris
      vestibulum ac leo ut tristique. Etiam varius massa et lorem fringilla, sit
      amet dignissim urna mollis. Sed nulla mauris, faucibus et consectetur
      quis, tristique at urna. Nam dictum magna tellus, non consectetur lacus
      laoreet ac. In vulputate at mauris ut tincidunt. Sed metus risus, feugiat
      in massa non, dapibus fermentum lacus. Nulla non luctus dolor. Duis ex
      nisl, commodo blandit velit nec, rutrum ultrices quam. Maecenas velit
      dolor, lobortis vel vestibulum faucibus, porttitor vel lectus. Phasellus
      rhoncus dictum lectus, at condimentum est fermentum ac. Sed vestibulum
      rhoncus placerat. Aenean sit amet dui rutrum, molestie quam in,
      scelerisque nulla. Phasellus eu velit at ante varius faucibus. Proin
      tempor ex vel ipsum porttitor placerat. Sed augue odio, porta vitae
      pulvinar sit amet, facilisis nec neque. Sed sit amet mi lacus. Curabitur
      viverra augue sed dapibus feugiat. Curabitur id euismod metus. Mauris
      dapibus justo quis orci vestibulum, non dignissim lacus faucibus. Quisque
      sit amet orci dictum, rhoncus elit at, lacinia felis. Etiam lectus lacus,
      condimentum vel lacus eleifend, porta tincidunt nisl. Integer sagittis
      lectus vel dui fermentum gravida. Maecenas tristique varius metus, sed
      luctus ipsum vestibulum id. Nulla faucibus sagittis elit. Cras quam nulla,
      bibendum a tristique nec, sollicitudin eu dolor. Aenean sit amet ornare
      nibh.
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
  name: "aboutFilmoteca",
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