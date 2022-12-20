<template>
  <section class="service" :class="{'ani':ani,'dark':dark,'oran':oran,'green':green,'blue':blue,'pink':pink}">
    <h1 class="ser-title">Services</h1>
    <ul class="ser-list">
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-palette" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-code" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
      <li class="ser-item" >
        <div class="ser-ibody">
          <div>
            <font-awesome-icon icon="fa-solid fa-bullhorn" />
          </div>
          <h2>Web Design</h2>
          <p> rerum fugiat magnam soluta deserunt est facere,<br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ducimus ipsam error iure officia laborum fugit. Distinctio impedit  </p>
        </div>
      </li>
      <!--//ser-item-->
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    ani: {
        type: Boolean
      },
      dark: {
        type: Boolean
    },
    oran: {
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
    }
 },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.service{
  background-color: #f0f0f0;
  padding: 90px 40px;
  width: 80%;
  overflow-y: scroll;
   max-height: 100vh; 
   transition: 0.3s; 
   flex-grow: 9;
}
.ser-title{
  font-size: 30px;
  font-weight: 700;
  position: relative;
  margin-bottom: 60px;
 
}
.ser-title::before{
  content: '';
  width: 50px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -30%;
}
.ser-title::after{
  content: '';
  width: 30px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -50%;
  left: 0;
}
.ser-list{
  list-style: none;
  width: 100%;
 display: flex;
 flex-wrap: wrap;
}
.ser-list li{
 width: 394px;
  background-color: #fff;
  padding: 20px;
 text-align: center;
 margin-right: 40px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 margin-bottom: 20px;
}
.ser-list li:nth-child(3n){
  margin-right: 0;
}
.ser-item h2{
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
}
.ser-ibody div{
  width: 70px;
  
  padding: 15px 0;
  text-align: center;
  
  margin: 0 auto 20px;
}
.ser-ibody div svg{
  font-size: 35px;
  color: #ff304f;
}
.ser-ibody p{
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 10px;
}
.ser-item:hover .ser-ibody div{
  background-color: #ff304f;
  border-radius: 50%;
  transition: 0.2s;
}
.ser-item:hover .ser-ibody div svg{
  color: #fff;
  transition: 0.2s;
}
/*Dark*/
.dark{
  background-color: #000;
}
.dark .ser-title,.dark .ser-item h2,.dark .ser-item p{
  color: #fff;
 
}
.dark .ser-item p{
  color: #dee1ec;
}
.dark .ser-list li{
  background-color: #575151;
}
/*Oran*/
.oran .ser-title::before,.oran .ser-title::after,.oran .ser-item:hover .ser-ibody div{
  background-color: #ffa45c;
}
.oran .ser-ibody div svg{
  color: #ffa45c;
}
/*Green*/
.green .ser-title::before,.green .ser-title::after,.green .ser-item:hover .ser-ibody div{
  background-color: #086972;
}
.green .ser-ibody div svg{
  color: #086972;
}
/*Blue*/
.blue .ser-title::before,.blue .ser-title::after,.blue .ser-item:hover .ser-ibody div{
  background-color: #1f4287;
}
.blue .ser-ibody div svg{
  color: #1f4287;
}
/*Pink*/
.pink .ser-title::before,.pink .ser-title::after,.pink .ser-item:hover .ser-ibody div{
  background-color: #ea7dc7;
}
.pink .ser-ibody div svg{
  color: #ea7dc7;
}
</style>
