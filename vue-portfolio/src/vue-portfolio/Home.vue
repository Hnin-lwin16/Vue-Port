<template>

 <section class="home"  :class="{'dark':dark,'oran':oran}">

  <div class="home-text">
    <h1>Hello, my name is <p>Hnin Moh Moh Lwin</p></h1>
  <h2 class="home-web">I'm a <p class="animate typed-text">{{typeValue}}</p><span class="cursor" :class="{'typing': typeStatus}">|</span></h2>
  <p class="home-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione minus necessitatibus incidunt sint ipsum nesciunt quod, praesentium blanditiis esse porro minima reprehenderit aliquam tenetur dolores laboriosam aperiam voluptatibus aliquid!</p>
  <button class="home-btn">More about me</button>
 
  </div>
  <div class="home-bg">
    <div class="home-img">
  </div>
  </div>
 
 </section>
  
</template>

<script>
import Head from './Header.vue'

export default {
  components: {
  'head-btn': Head
  },
  props: {
    dark: {
      type: Boolean
    },
    oran: {
      type:Boolean
    }
  },
  data () {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Web Developer'],
      typeSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charText:0
    }
  },
  methods: {
    typeText() {
      if (this.charText < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) 
          this.typeStatus = true;
         
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charText);
          this.charText++;
          setTimeout(this.typeText, this.typeSpeed);
         
      } else {
          this.typeStatus = false;
          setTimeout(this.eraseText,this.newTextDelay)
        }
    },
    eraseText() {
      if (this.charText > 0) {
        if (!this.typeStatus) 
          this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charText - 1);
          this.charText -= 1;
          setTimeout(this.eraseText,this.erasingSpeed);
        
        } else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if (this.typeArrayIndex >= this.typeArray.length) {
            this.typeArrayIndex = 0;
            setTimeout(this.typeText, this.typeSpeed + 1000) ;
          }
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    console.log(this.typeValue);
  },
  
}
</script>

<style scoped>
.home{
  display: flex;
  background-color: #f0f0f0;
}
.home-text{
  width: 50%;
  margin-left: 40px;
 margin-top: 15%;
}
.home-text h1{
  font-size: 30px;
}
.home-text h1 p{
  display: inline;
  color: #ff304f;
  font-style: italic;
}

.home-para{
  line-height: 1.5;
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
}
.home-web{
  margin-top: 20px;
}
.home-web p{
  display: inline-block;
  color: #ff304f;
}
.home-btn{
  margin-top: 50px;
  padding: 10px 30px;
  border-radius: 50px;
  background-color: #ff304f;
  border: 1px solid #ff304f;
  color: #fff;
}
.home-btn:hover{
  background-color: #fff;
  color: #000;
  border-color: #ff304f;
}
/*Image*/
.home-bg{
  width: 400px;
 height: 500px;
 margin: 10% auto;
 padding: 50px 70px;
 background-image: linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f), linear-gradient(#ff304f, #ff304f);
    background-repeat: no-repeat;
    background-size: 9px 20%, 20% 9px, 9px 20%, 20% 9px, calc(100% - 8px) calc(100% - 8px);
    background-position: left top, left top, right bottom, right bottom, 4px 4px;
}
.home-img{
  background-image: url(../assets/home.jpg);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 400px;
}
/*Animate*/
.cursor{
  display: inline-block;
  margin-left: 3px;
  width: 4px;
 animation: cursor 1s infinite;
}
.typing{
  animation: none;
}
@keyframes cursor {
  49%{
    background-color: #000;
  }
  50%{
    background-color: transparent;
  }
  99%{
    background-color: transparent;
  }
}
/*ChangeDark*/
.dark{
  background-color: #000;
}
.dark .home-text h1, .dark .home-web,.dark .home-para{
  color: #fff;
}
/*Red*/
.oran .home-text h1 p,.oran .home-web p{
  color: #ffa45c;
}
.oran .home-btn{
  background-color: #ffa45c;
  border-color: #ffa45c;
}
.oran .home-btn:hover{
  background-color: #fff;
  border-color: #ffa45c;
}
.oran .home-bg{
  background-image: linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ffa45c, #ffa45c), linear-gradient(#ff304f, #ffa45c);
}
</style>
