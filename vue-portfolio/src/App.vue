<template>
  <div>
  
  <div class="body">
    <header-nav v-bind:oran="oran"  v-bind:dark="dark" v-bind:moon="moon" v-on:changeDark="Dark($event)" v-on:changeOran="Oran($event)">
      
    </header-nav>
    <router-view v-bind:dark="dark" v-bind:oran="oran"></router-view>
    
  </div>
</div>

</template>

<script>
import Header from './vue-portfolio/Header.vue'
import Home from './vue-portfolio/Home.vue'
import About from './vue-portfolio/About.vue'
import Service from './vue-portfolio/Services.vue'

export default {
  components: {
    'header-nav': Header,
    'about': About,
    'home': Home,
    'service': Service
  },
  data() {
    return {
      moon: true,
      light: false,
      dark: false,
      oran: false
    }
  },
  methods: {
    Dark: function (ha) {
      this.dark = ha
      this.moon = !this.moon
    },
    Oran: function (oran) {
      this.oran = oran
    }

  }
 
}
</script>

<style scoped>

  .body{
    display: flex;
  }
  .change-dark{
    position: fixed;
    right: 5px;
    top: 20%;
    width: 65px;
    padding: 10px;
    border-radius: 50%;
    font-size: 30px;
    background-color: #fbf9fa;
    border: 1px solid #fbf9fa;
   
  }
  button:focus{
    border-color: #fbf9fa;
  }
  
</style>
