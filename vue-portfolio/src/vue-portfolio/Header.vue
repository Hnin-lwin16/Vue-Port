<template>
  
  <section class="head" :class="{'dark':dark}">
    <button class="btn-toggle" v-on:click="togg"  :class="{'active':toggleItem,'btn-dark':dark,'btn-oran':oran,'btn-green':green,'btn-blue': blue,'btn-pink':pink}">
      <span ></span>
      <span></span>
      <span></span>
    </button>
    <section class="nav" :class="{'dark':dark,'whole-oran':oran,'whole-green':green,'whole-blue': blue,'whole-pink':pink,'tog':toggleItem}">
    <div class="nav-title">

        <h1>Atlas</h1>
    </div>
    <div class="nav-list">
        <ul class="nav-item">
          
            <li @click="animation"> <router-link to="/" exact><font-awesome-icon icon="fa-solid fa-home" />Home</router-link></li>
            <li> <router-link to="/about" exact><font-awesome-icon icon="fa-solid fa-user" />About</router-link></li>
            <li> <router-link to="/service" exact><font-awesome-icon icon="fa-solid fa-list" />Services</router-link></li>
            <li><router-link to="/portfolio" exact><font-awesome-icon icon="fa-solid fa-briefcase" />Portfolio</router-link></li>
            <li><router-link to="/contact" exact><font-awesome-icon icon="fa-solid fa-comments" />Contact</router-link></li>
        </ul>
    </div>
    <div class="theme-change" :class="{'whole-theme':themeItem}">
      
      <button class="theme change-dark" @click="theme">
        <font-awesome-icon class="spin" icon="fa-solid fa-gear" />
      </button>
      <button @click="changeDark" class="change-dark" >
          <font-awesome-icon v-if="moon" icon="fa-solid fa-moon" />
          <font-awesome-icon v-else icon="fa-solid fa-gear" />
    </button>
    </div>
    <div class="theme-btn"  v-if="themeItem">
      <h3>Theme Colors</h3>
      <ul>
        <li><div  class="red" @click="changeRed"></div></li>
        <li><div class="oran" @click="changeOran"></div></li>
        <li><div class="green" @click="changeGreen"></div></li>
        <li><div class="blue" @click="changeBlue"></div></li>
        <li><div class="pink" @click="changePink"></div></li>
      </ul>
    </div>
   
    
  </section>
  </section>
</template>

<script>

export default {
  props: {
    dark: {
      type: Boolean
    },
    moon: {
      type: Boolean
    },
    oran: {
      type: Boolean
    },
    red: {
      type: Boolean
    },
    green: {
      type: Boolean
    },
    blue: {
      type: Boolean
    },
    pink: {
      type: Boolean
    },
    ani: {
      type: Boolean
    },
    toggleItem: {
      type: Boolean
    }
  },
  data () {
    return {
      themeItem: false,
     
    }
  },
  methods: {
    animation: function(){
      this.$emit('animation',this.ani = true)
    },
    changeDark: function () {
      this.$emit('changeDark',this.dark = !this.dark)
    },
    changeOran: function () {
      this.$emit('changeOran', [
        this.oran = !this.oran,
        this.red = this.green = this.blue = this.pink = false
      ])
    },
    changeRed: function () {
      this.$emit('changeRed', [
        this.oran = this.green = this.blue = this.pink = false
      ])
    
    },
    changeGreen: function () {
      this.$emit('changeGreen', [
        this.green = !this.green,
        this.red = this.oran = this.blue = this.pink = false
      ])
    },
    changeBlue: function () {
      this.$emit('changeBlue', [
      this.blue = !this.blue,
        this.red =  this.oran = this.green = this.pink = false
      ])
    },
    changePink: function () {
      this.$emit('changePink', [
        this.pink = !this.pink,
        this.red=this.oran=this.green=this.blue = false
      ])
    },
    theme: function () {
      this.themeItem = !this.themeItem
    },
    togg: function () {
      this.$emit('toggle', [
        this.toggleItem = !this.toggleItem,
      console.log(this.toggleItem)
     ])
    }
  }
 
  }
</script>

<style scoped>

/*font-family: 'M PLUS 1', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Roboto', sans-serif;*/


.head{
  
  background-color: #fbf9fa;
  height: 100vh;
  transition: 0.3s;
}
.nav{
  width: 100%;
  
}

.nav-title{
  padding: 35px 0 150px 0;  
}
.nav-title h1{
  background-image: linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f);
    background-repeat: no-repeat;
    background-size: 4px 40%, 30% 4px, 4px 40%, 30% 4px, calc(100% - 8px) calc(100% - 8px);
    background-position: left bottom, left bottom, right top, right top, 4px 4px;
    font-weight: 700;
    font-size: 30px;
    width: 150px;
    /*margin: 20px;*/
    margin: 0 auto;
  padding: 30px 10px;
   text-align: center;
}

/*button Change*/
.theme-change{
  display: flex;
  width: 300px;
}

.change-dark{
    position: fixed;
    right: 1%;
    top: 17%;
    width: 50px;
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    background-color: #fbf9fa;
    border: 1px solid #fbf9fa;
   margin-right: 20px;
   z-index: 99999;
  }
  .theme-btn{
    transition: 0.3s;
    position: fixed;
    right: 1%;
    top: 10%;
    background-color: #fff;
    text-align: left;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    z-index: 99999;
  }
  .theme-btn ul{
    list-style: none;
    display: flex;
    margin-top: 10px;
  }
  .theme-btn h3{
    font-size: 15px;
    font-weight: 300;
  }
  .theme-btn ul li div{
    margin-right: 5px;
    width: 30px;
    padding: 15px;
    border-radius: 50%;

  }
  button:focus{
    border-color: #fbf9fa;
  }
  .theme{
    right: 1%;
    top: 10%;
  }
  .whole-theme .theme, .whole-theme .change-dark{
    right: 13%;
  }
  
  .red{
    background-color: #ff304f;
  }
  .oran{
    background-color: #ffa45c;
  }
  .green{
    background-color: #086972;
  }
  .blue{
    background-color: #1f4287;
  }
  .pink{
    background-color: #ea7dc7;
  }
  .spin{
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  /*Nav List*/
.nav-list{
  
  width: 150px;
  margin: 0 auto;
}
.nav-item li{
  list-style: none;
  background-color: #f2edef;
  border: 1px solid #f2edef;
  border-radius: 9%;
  padding: 10px 10px;
  text-align: center;
  margin-bottom: 20px;
}
.nav-item li a{
  margin: 0 20px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: #000;
}

.router-link-active{
  color: #ff304f !important;
}
/*Change Dark*/
.dark{
  background-color: #575151;
  
}
.dark .nav-title h1{
  color: #fff;
}
.dark .nav-item li{
  background-color: #575151;
  border-color: #575151;
  border-bottom-color: rgb(210, 206, 206);
}
.dark .nav-item li a,.dark .theme-btn h3{
  color: #fff;
}
.dark .change-dark{
  background-color: #575151;
  border-color: #7c7c7c;
  color: #fff;
}
.dark .theme-btn{
  background-color: #575151;
  border-color: #7c7c7c;
}
/*Orange*/
.whole-oran .nav-title h1{
  background-image: linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c);
}
.whole-oran .router-link-active{
  color: #ffa45c !important;
}

/*Green*/
.whole-green .nav-title h1{
  background-image: linear-gradient(#086972, #086972), linear-gradient(#086972, #086972), linear-gradient(#086972, #086972), linear-gradient(#086972, #086972);
}
.whole-green .router-link-active{
  color: #086972 !important;
}
/*Blue*/
.whole-blue .nav-title h1{
  background-image: linear-gradient(#1f4287, #1f4287), linear-gradient(#1f4287, #1f4287), linear-gradient(#1f4287, #1f4287), linear-gradient(#1f4287, #1f4287);
}
.whole-blue .router-link-active{
  color: #1f4287 !important;
}
/*Pink*/
.whole-pink .nav-title h1{
  background-image: linear-gradient(#ea7dc7, #ea7dc7), linear-gradient(#ea7dc7, #ea7dc7), linear-gradient(#ea7dc7, #ea7dc7), linear-gradient(#ea7dc7, #ea7dc7);
}
.whole-pink .router-link-active{
  color: #ea7dc7 !important;
}

/*IPad*/
@media screen and (max-width:1024px){
 
.nav{
  width: 100%;
  
}

.nav-title{
  padding: 4.557vw 0 19.531vw 0;  
}
.nav-title h1{
 
    background-size: 0.521vw 40%, 30% 0.521vw, 0.521vw 40%, 30% 0.521vw, calc(100% - 1.042vw) calc(100% - 1.042vw);
    background-position: left bottom, left bottom, right top, right top, 0.521vw 0.521vw;
    font-weight: 700;
    font-size: 3.906vw;
    width: 19.531vw;
    /*margin: 2.604vw;*/
   
  padding: 3.906vw 1.302vw;
  
}

/*button Change*/
.theme-change{
  
  width: 39.063vw;
}

.change-dark{
  z-index: 99999;
    right: 1%;
    top: 14%;
    width: 6.51vw;
    padding: 1.302vw;
    border-radius: 50%;
    font-size: 2.604vw;
   
    border: 0.13vw solid #fbf9fa;
   margin-right: 2.604vw;
   
  }
  .theme-btn{
    transition: 0.3s;
   
    right: 1%;
    top: 5%;
   
    text-align: left;
    padding: 2.604vw;
    border: 0.13vw solid #fff;
    border-radius: 0.651vw;
    z-index: 99999;
  }
  .theme-btn ul{
    
    margin-top: 1.302vw;
  }
  .theme-btn h3{
    font-size: 1.953vw;
    font-weight: 300;
  }
  .theme-btn ul li div{
    margin-right: 0.651vw;
    width: 3.906vw;
    padding: 1.953vw;
    border-radius: 50%;

  }
  
  .theme{
    right: 1%;
    top: 5%;
  }
  .whole-theme .theme, .whole-theme .change-dark{
    right: 27%;
    z-index: 99999;
  }
   
  
  
  /*Nav List*/
.nav-list{
  
  width: 19.531vw;
  
}
.nav-item li{
 
  border: 0.13vw solid #f2edef;
  border-radius: 9%;
  padding: 1.302vw 1.302vw;
 
  margin-bottom: 2.604vw;
}
.nav-item li a{
  margin: 0 2.604vw;
  
}
.btn-dark{
  background-color: #575151;
}
.btn-oran span{
  background-color: #ffa45c;
}
.btn-green span{
  background-color: #086972;
}
.btn-blue span{
  background-color: #1f4287;
}
.btn-pink span{
  background-color: #ea7dc7;
}
}
</style>
