<template>
  <section class="about" :class="{'ani':ani,'dark':dark,'oran':oran,'green':green,'blue':blue,'pink':pink}">
    <div class="about-body">
      <div class="about-title">
      <h1>About Me</h1>
    </div>
    <div class="about-param">
      <h2 class="about-intro">I'm Hnin Moh Moh Lwin and <p>Web Developer</p></h2>
      <p class="about-pb">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum esse quam blanditiis! Provident, optio amet vitae assumenda rem quia modi sequi voluptatum quo labore eaque, saepe facere est quisquam animi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, illo! Repudiandae culpa quis delectus perferendis rem.Dolorum esse quam blanditiis! Provident, optio amet vitae assumenda rem quia modi sequi voluptatum quo labore eaque, saepe facere est quisquam animi. 
      </p>
    </div>
    <div class="about-myself">
      <div class="myself">
       <div class="myself-left">
        <p>Birthday:</p>
        <span>16 January 2002</span>
        <hr>
        <p>Website:</p>
        <span>www.domain.com</span>
        <hr>
        <p>Degree:</p>
        <span>CS</span>
        <hr>
        <p>City:</p>
        <span>Pyay</span>
        <hr>
       </div>
       <!--//myself-left-->
       <div class="myself-right">
        <p>Age:</p>
        <span>20</span>
        <hr>
        <p>Email:</p>
        <span>hninmohmohlwin16@gmail.com</span>
        <hr>
        <p>Phone:</p>
        <span>09 963 202 962</span>
        <hr>
        <p>Freelance:</p>
        <span>Availabel</span>
        <hr>
       </div>
       <!--//myself-right-->
       <div myself-btn>
        <button class="about-btn cv">
          Dowload CV
        </button>
        <button class="about-btn here">
          Here Me
        </button>
       </div>
      </div>
      <!--//myself-->
      <div class="skill">
        <div class="skill-title"><p>CSS</p><p>95%</p></div>
        <div class="skill-level">
          <div></div>
        </div>
        <div class="skill-title"><p>CSS</p><p>95%</p></div>
        <div class="skill-level">
          <div></div>
        </div>
        <div class="skill-title"><p>CSS</p><p>95%</p></div>
        <div class="skill-level">
          <div></div>
        </div>
        <div class="skill-title"><p>CSS</p><p>95%</p></div>
        <div class="skill-level">
          <div></div>
        </div>
      </div>
      <!--//skill-->
    </div>
    <!--//about-myself-->
    <div class="infor">
      <div class="edu">
        <h3 class="edu-title">Education</h3>
        <div class="edu-body">
          
          <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
            </div>
          </div>
        <!--edu-para-->
        <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
          </div>
        </div>
        <!--edu-para-->
        <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
            </div>
          </div>
        <!--edu-para-->
        </div>
      </div>
        <div class="expri edu">
        <h3 class="edu-title">Experience</h3>
        <div class="edu-body">
          
          <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
            </div>
          </div>
        <!--edu-para-->
        <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
            </div>
          </div>
        <!--edu-para-->
        <div class="edu-para">
            <div class="edu-block"></div>
            <div class="edu-infor">
              <span class="date"><font-awesome-icon  icon="fa-solid fa-calendar-days" />2018-2022</span>
              <h3>Bachelor in Computer Science</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa, dignissimos cumque recusandae, neque reiciendis dicta, labore necessitatibus delectus aliquam perspiciatis! Minus porro soluta veritatis delectus nulla provident, nam expedita.</p>
            </div>
          </div>
        <!--edu-para-->
        </div>
      </div>
        </div>
      </div>
    
    
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
.about{
  background-color: #f0f0f0;
  overflow-y: scroll;
    max-height: 100vh;  
}
.about-body{
  margin:0px 40px;
}
.about-title{
  margin-top: 60px;
  color: #000;
  font-size: 30px;
  font-weight: 700;
  position: relative;
}
.about-title h1{
  margin-bottom: 7%;
}
.about-title::before{
  content:'';
  width:80px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -30%;
}
.about-title::after{
  content:'';
  width:50px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -50%;
}
/*About Param*/

.about-intro{
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
}
.about-intro p{
  color:#ff304f;
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
}
.about-pb{
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.3;
}
/*About Myself*/
.about-myself{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.myself{
  display: flex;
  width: 46%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.myself p{
  display: inline-block;
}
.myself p, .skill div{
  font-size: 15px;
  font-weight: 700;
  color: #000;
  letter-spacing: 0.11em;
}
.myself span,.myself p{
  margin-bottom: 10px;
}
.myself hr{
  width: 300px;
  margin-bottom: 10px;
}
.about-btn{
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 50px;
  background-color: #ff304f;
  border: 1px solid #ff304f;
 color: #fff ;
 font-size: 18px;
 font-weight: 400;
 transition: 0.3s;
}
.about-btn:hover{
  background-color: #fff;
  color: #000;
  border-color: #ff304f;
  transition: 0.3s;
}
.cv{
  margin-right: 10px;
}
/*Skill*/

.skill-title{
  display: flex;
  justify-content: space-between;
}
.skill-level{
  width: 500px;
  height: 10px;
  background-color: #fbf9fa;
  border-radius: 40px;
  margin: 20px 0px;
}
.skill-level div{
  height: 10px;
  width: 400px;
  background-color: #ff304f;
  border-radius: 40px;
}
/*Education*/
.infor{
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}
.edu{
  width: 47%;
}
.edu-title{
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 700;
}
.edu-body{
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 0  10px 7% ;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.date{
  margin-bottom: 10px;
  display: inline-block;
  font-size: 15px;
  font-weight: 300;
}
.date svg{
  margin-right: 10px;
}
.edu-para{
  display: flex;
 
}
.edu-block{
  width: 3px;
  height: 270px;
  background-color: #ff304f;
  margin-right: 20px;
  position: relative;
}

.edu-block::before{
  content: '';
  width: 15px;
  height: 15px;
  background-color: #ff304f;
  position: absolute;
  border-radius: 50%;
  left: -8px;
  
}
.edu-infor{
 
  line-height: 1.8;
  letter-spacing: 0.1em;
}
.edu-infor p{
  text-align: justify;
  display: inline-block;
  padding-right: 20px;
}
/*Dark*/
.dark{
  background-color: #000;
}
.dark .about-title h1,.dark .about-intro,.dark .myself p,.dark .skill-title p,.dark .edu-title{
  color: #fff
}
.dark .about-pb,.dark .myself span{
  color:#dee1ec
}
.dark .myself hr{
  color: #575151;
}
.dark .skill-level{
  background-color: #575151;
}
/*Orange*/
.oran .about-title::before,.oran .about-title::after,.oran .about-btn,.oran .edu-block,.oran .skill-level div,.oran .edu-block::before{
  background-color: #ffa45c;
}
.oran .about-intro p{
  color:#ffa45c
}
.oran .about-btn{
  border:1px solid #ffa45c;
}
.oran .about-btn:hover{
  background-color: #fff;
    color: #000;
    border-color: #ffa45c;
}
/*Green*/
.green .about-title::before,.green .about-title::after,.green .about-btn,.green .edu-block,.green .skill-level div,.green .edu-block::before{
  background-color: #086972;
}
.green .about-intro p{
  color:#086972
}
.green .about-btn{
  border:1px solid #086972;
}
.green .about-btn:hover{
  background-color: #fff;
    color: #000;
    border-color: #086972;
}
/*Blue*/
.blue .about-title::before,.blue .about-title::after,.blue .about-btn,.blue .edu-block,.blue .skill-level div,.blue .edu-block::before{
  background-color: #1f4287;
}
.blue .about-intro p{
  color:#1f4287;
}
.blue .about-btn{
  border:1px solid #1f4287;
}
.blue.about-btn:hover{
  background-color: #fff;
    color: #000;
    border-color: #1f4287;
}
/*Pink*/
.pink .about-title::before,.pink .about-title::after,.pink .about-btn,.pink .edu-block,.pink .skill-level div,.pink .edu-block::before{
  background-color: #ea7dc7;
}
.pink .about-intro p{
  color:#ea7dc7;
}
.pink .about-btn{
  border:1px solid #ea7dc7;
}
.pink .about-btn:hover{
  background-color: #fff;
    color: #000;
    border-color: #ea7dc7
}
</style>
