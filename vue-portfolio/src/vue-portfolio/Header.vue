<template>
  
  <section class="nav" :class="{'dark':dark,'whole-oran':oran}">
    <div class="nav-title">

        <h1>Atlas</h1>
    </div>
    <div class="nav-list">
        <ul class="nav-item">
          
            <li> <router-link to="/" exact><font-awesome-icon icon="fa-solid fa-home" />Home</router-link></li>
            <li> <router-link to="/about" exact><font-awesome-icon icon="fa-solid fa-user" />About</router-link></li>
            <li> <router-link to="/service" exact><font-awesome-icon icon="fa-solid fa-list" />Services</router-link></li>
            <li><router-link to="/porfolio" exact><font-awesome-icon icon="fa-solid fa-briefcase" />Portfolio</router-link></li>
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
        <li><div  class="red" @click="changeOran"></div></li>
        <li><div></div></li>
        <li><div></div></li>
        <li><div></div></li>
        <li><div></div></li>
      </ul>
    </div>
   
    
  </section>
</template>

<script>
import dark from '../dark'
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
    }
  },
  data () {
    return {
      themeItem:false
    }
  },
  methods: {
    changeDark: function () {
      this.$emit('changeDark',this.dark = !this.dark)
    },
    changeOran: function () {
      this.$emit('changeOran', this.oran = true)
    },
    theme: function () {
      this.themeItem = !this.themeItem
    }
  }
 
  //computed: {
  //  changeDark: function () {
  //    return {
  //      dark: this.dark
  //   }
  //  }
  //}
}
</script>

<style scoped>

/*font-family: 'M PLUS 1', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Roboto', sans-serif;*/


.nav{
  width: 30%;
  background-color: #fbf9fa;
  height: 100vh;
}
.nav-title{
  padding: 35px 0 150px 0;
  
  
}
.nav-title h1{
  background-image: linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f);
    background-repeat: no-repeat;
    background-size: 4px 50%, 40% 4px, 4px 50%, 40% 4px, calc(100% - 8px) calc(100% - 8px);
    background-position: left bottom, left bottom, right top, right top, 4px 4px;
    font-weight: 700;
    font-size: 30px;
    width: 200px;
    /*margin: 20px;*/
    margin: 0 auto;
  padding: 30px;
   text-align: center;
}

/*button Change*/
.theme-change{
  display: flex;
  width: 300px;
}

.change-dark{
    position: fixed;
    right: 5%;
    top: 20%;
    width: 50px;
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    background-color: #fbf9fa;
    border: 1px solid #fbf9fa;
   margin-right: 20px;
  }
  .theme-btn{
    
    position: fixed;
    right: 1px;
    top: 13%;
    background-color: #fff;
    text-align: left;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
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
    right: 5%;
    top: 13%;
  }
  .whole-theme .theme, .whole-theme .change-dark{
    right: 13%;
  }
  .red{
    background-color: #ffa45c;
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
/*Red*/
.whole-oran .nav-title h1{
  background-image: linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c);
}
.whole-oran .router-link-active{
  color: #ffa45c !important;
}
</style>
