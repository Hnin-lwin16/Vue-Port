<template>
  <div>
  
  <div class="body">
    <header-nav v-bind:oran="oran"  v-bind:dark="dark" v-bind:red="red" v-bind:green="green" :blue="blue" :pink="pink" v-bind:ani="ani" v-bind:moon="moon" v-on:animation="Ani($event)" v-on:changeDark="Dark($event)" v-on:changeOran="Oran($event)" v-on:changeRed="Red()" v-on:changeGreen="Green($event)" v-on:changeBlue="Blue($event)" v-on:changePink="Pink($event)" v-on:togg="Tgl($event)" :toggleItem="toggleItem">
    
    </header-nav>
    <router-view class="router" v-bind:dark="dark" v-bind:oran="oran" v-bind:red="red" v-bind:green="green" :blue="blue" :pink="pink" :ani="ani"></router-view>
    
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
      ani: false,
      toggleItem: false
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
    Red: function (remove) {
     
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
    },
    Tgl: function (togg) {
      this.toggleItem = togg
    }
  }
 
 
}
</script>

<style>

  .body{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .btn-toggle{
    display: none;
  }
  .ani{
  position: relative;
  animation-name: route;
  animation-duration: 1s;
  
}
@keyframes route {
  0%   { right:-500px}
  50%{right:100px}
  75% {right:50px}
  100% { left: 0px}
}
.btn-toggle,
.btn-toggle span {
  box-sizing: border-box;

  transition: all .4s;
}

.btn-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 4;
  width: 50px;
  height: 44px;
  border: none;
  background: none;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
}

.btn-toggle span {
  position: absolute;
  left: 17%;
  width: 65%;
  height: 4px;
  background-color: #ff304f;
  border-radius: 4px;

}

.btn-toggle span:nth-of-type(1) {
  top: 8px;
}

.btn-toggle span:nth-of-type(2) {
  top: 20px;
}

.btn-toggle span:nth-of-type(3) {
  top: 32px;
}

.btn-toggle.active span:nth-of-type(1) {
  transform: translateY(10px) rotate(-45deg);
}

.btn-toggle.active span:nth-of-type(2) {
  opacity: 0;
}

.btn-toggle.active span:nth-of-type(3) {
  transform: translateY(-14px) rotate(45deg);
}
.btn-toggle.active{
  left: 52%;
}
@media screen and (max-width:1024px) {
  
  .nav {
    position: fixed;
    top: 0;
    left: -500px;
    width: 500px !important;
    padding-top: 60px;
    background-color: #fff;
    /*margin-right: -300px;*/
  }
 

  /*.var-item {
    width: 100%;
    margin: 0;
    padding-left: 10px;
  }

  .var-item li {
    float: none;
    width: 100%;
    padding: 18px 0;
  }*/

  .btn-toggle {
    display: inline-block;
  }
  .tog {
    margin-left: 50%;
    z-index: 3;
    height: 1000vh;
  }
 
.ani{
  position: static;
}
}
</style>
