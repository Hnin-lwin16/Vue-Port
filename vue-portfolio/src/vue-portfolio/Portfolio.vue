<template>
  <section class="port" :class="{'ani':ani,'dark':dark,'oran':oran,'green':green,'blue':blue,'pink':pink}">
    <h1 class="port-title">Portfolio</h1>
    <div class="project">
      <h2 class="pro-title">My Projects:</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean
    },
    oran: {
      type:Boolean
    },
    red: {
      type:Boolean
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
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.port{
  background-color: #f0f0f0;
  overflow-y: scroll;
   max-height: 100vh;  
   width: 80%;
   transition: 0.3s;
   padding: 0 40px;
}
.port-title,.pro-title{
  margin-top: 60px;
  color: #000;
  font-size: 30px;
  font-weight: 700;
  }
.port-title{
  position: relative;
margin-bottom: 7%;
}
.port-title::before{
  content:'';
  width:80px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -30%;
}
.port-title::after{
  content:'';
  width:50px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -50%;
  left: 0;
}
/*Dark*/
.dark{
  background-color: #000000;
}
.dark .port-title,.dark .pro-title{
  color: #fff;
}
/*Oran*/
.oran .port-title::before,.oran .port-title::after{
  background-color: #ffa45c;
}
/*Green*/
.green .port-title::before,.green .port-title::after{
  background-color: #086972;
}
/*Blue*/
.blue .port-title::before,.blue .port-title::after{
  background-color: #1f4287;
}
/*Pink*/
.pink .port-title::before,.pink .port-title::after{
  background-color: #ea7dc7;
}
</style>
