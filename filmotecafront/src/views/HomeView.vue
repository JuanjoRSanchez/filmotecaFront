<template>
  <div class="home">
    <a   >
    <img  alt="Vue logo" src="../assets/logofilmoteca.png">
    </a>
    <HelloWorld  msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
