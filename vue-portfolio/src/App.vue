<template>
  <div>
  
  <div class="body">
    <header-nav v-bind:oran="oran"  v-bind:dark="dark" v-bind:red="red" v-bind:green="green" :blue="blue" :pink="pink" v-bind:ani="ani" v-bind:moon="moon" v-on:animation="Ani($event)" v-on:changeDark="Dark($event)" v-on:changeOran="Oran($event)" v-on:changeRed="Red($event)" v-on:changeGreen="Green($event)" v-on:changeBlue="Blue($event)" v-on:changePink="Pink($event)">
      
    </header-nav>
    <router-view v-bind:dark="dark" v-bind:oran="oran" v-bind:red="red" v-bind:green="green" :blue="blue" :pink="pink" :ani="ani"></router-view>
    
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
      oran: false,
      red: false,
      green: false,
      blue: false,
      pink: false,
      ani: false
    }
  },
  methods: {
    Dark: function (ha) {
      this.dark = ha
      this.moon = !this.moon
    },
    Ani: function (ani) {
      this.ani = ani  
    },
    Oran: function (oran,remove) {
      this.oran = oran,
      this.red =  this.green =  this.blue =  this.pink = remove
    },
    Red: function (red,remove) {
      this.red = red,
      this.oran =  this.green = this.blue = this.pink = remove
    },
    Green: function (green,remove) {
      this.green = green,
        this.red = this.oran = this.blue = this.pink = remove
    },
    Blue: function (blue, remove) {
      this.blue = blue,
        this.red = this.oran = this.green =  this.pink = remove
    },
    Pink: function (pink, remove) {
      this.pink = pink,
      this.red = this.oran = this.green = this.blue = remove
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
