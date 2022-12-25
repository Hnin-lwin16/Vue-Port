<template>
  <section class="cont" :class="{ 'ani': ani, 'dark': dark, 'oran': oran, 'green': green, 'blue': blue, 'pink': pink }">
    <h1 class="cont-title">Contact Me</h1>
    <div class="ques">
      <h2 class="ques-title">Have You Any Questions ?</h2>
      <span>I'm at your service</span>
      <ul class="ques-list">
        <li class="ques-item">
          <div>
            <font-awesome-icon icon="fa-solid fa-phone-flip" />
            <h3>Call Us On</h3>
            <p>09 963202962</p>
          </div>
        </li>
        <!--//ques-item-->
        <li class="ques-item">
          <div>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <h3>Office</h3>
            <p>09 963202962</p>
          </div>
        </li>
        <!--//ques-item-->
        <li class="ques-item">
          <div>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <h3>Email</h3>
            <p>hninmohmohlwin16@gmail.com</p>
          </div>
        </li>
        <!--//ques-item-->
        <li class="ques-item">
          <div>
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
            <h3>Website</h3>
            <p>designer.com</p>
          </div>
        </li>
        <!--//ques-item-->
      </ul>
    </div>
    <!--//ques-->
    <div class="send">
      <h2 class="send-title">send me an email</h2>
      <span>I'm very responsive to messages</span>
      <form action="" class="send-form">
        <input class="in" type="text" placeholder="Name">
        <input type="email" placeholder="Email" class="in"><br>
        <input type="text" placeholder="Subject" class="in-sub"><br>
        <textarea name="" placeholder="Message" id="" cols="30" rows="5"></textarea><br>
        <button type="submit" class="form-btn">SendMessage</button><br>
      </form>
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
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.cont {
  width: 700px;
  background-color: #f0f0f0;
  overflow-y: scroll;
  max-height: 100vh;
  padding: 90px 40px;
  flex-grow: 9;
}

.cont-title {
  font-size: 30px;
  font-weight: 700;
  position: relative;
  margin-bottom: 90px;
}

.cont-title::before {
  content: '';
  width: 50px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -30%;
}

.cont-title::after {
  content: '';
  width: 30px;
  height: 3px;
  background-color: #ff304f;
  position: absolute;
  bottom: -50%;
  left: 0;
}

/*Question*/
.ques-title {
  text-align: center;
  color: #ff304f;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 700;
}

.ques span {
  display: block;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
}

.ques-list {
  margin: 50px 0px 70px;
  list-style: none;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.ques-item {

  width: 285px;
  padding: 10px;
  margin-right: 40px;
}

.ques-item:nth-child(4n) {
  margin-right: 0;
}

.ques-item svg {
  font-size: 30px;
  color: #ff304f;
  margin-bottom: 20px;
}

.ques-item div h3,
.ques-item div p {
  font-size: 20px;
  font-weight: 700;
}

.ques-item div p {
  font-size: 18px;
  padding-top: 10px;
  color: #959596;
}

/*Mail*/
.send-title {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ff304f;
  margin-bottom: 20px;
}

.send span {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
}

.send-form {
  margin-top: 60px;
}

.send-form input {
  margin-bottom: 30px;
  border-radius: 40px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  border: 1px solid #d6d6d9;
}

.in {
  width: 48%;
  padding: 10px 0;
  margin-right: 30px;
}

.in:nth-child(2n) {
  margin-right: 0;
}

.in-sub,
.send-form textarea {
  width: 100%;
  padding: 10px 0;
}

.send-form textarea {
  border-radius: 20px;
  padding-left: 20px;
  outline: none;
  border: 1px solid #d6d6d9;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  resize: none;
}

.form-btn {
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 50px;
  background-color: #ff304f;
  border: 1px solid #ff304f;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  transition: 0.3s;
}

.form-btn:hover {
  background-color: #fff;
  color: #000;
  border-color: #ff304f;
  transition: 0.3s;
}

/*Dark*/
.dark {
  background-color: #000;
}

.dark .send-form input,
.dark .send-form textarea {
  background-color: #575151;
  border: #575151;
}

.dark .cont-title,
.dark .send span,
.dark .ques-item div h3,
.dark .send-form input,
.dark .send-form textarea,
.dark .ques span {
  color: #fff;
}

/*Oran*/
.oran .cont-title::before,
.oran .cont-title::after {
  background-color: #ffa45c;
}

.oran .ques-title,
.oran .ques svg,
.oran .send-title {
  color: #ffa45c;
}

.oran .form-btn {
  background-color: #ffa45c;
  border-color: #ffa45c;
}

.oran .form-btn:hover {
  background-color: #fff;
  border-color: #ffa45c;
}

/*Green*/
.green .cont-title::before,
.green .cont-title::after {
  background-color: #086972;
}

.green .ques-title,
.green .ques svg,
.green .send-title {
  color: #086972;
}

.green .form-btn {
  background-color: #086972;
  border-color: #086972;
}

.green .form-btn:hover {
  background-color: #fff;
  border-color: #086972;
}

/*Blue*/
.blue .cont-title::before,
.blue .cont-title::after {
  background-color: #1f4287;
}

.blue .ques-title,
.blue .ques svg,
.blue .send-title {
  color: #1f4287;
}

.blue .form-btn {
  background-color: #1f4287;
  border-color: #1f4287;
}

.blue .form-btn:hover {
  background-color: #fff;
  border-color: #1f4287;
}

/*Pink*/
.pink .cont-title::before,
.pink .cont-title::after {
  background-color: #ea7dc7;
}

.pink .ques-title,
.pink .ques svg,
.pink .send-title {
  color: #ea7dc7;
}

.pink .form-btn {
  background-color: #ea7dc7;
  border-color: #ea7dc7;
}

.pink .form-btn:hover {
  background-color: #fff;
  border-color: #ea7dc7;
}

/*Ipad*/
@media screen and (max-width:1024px) {
  .cont {
    width: 91.146vw;

    max-height: 100vh;
    padding: 11.719vw 5.208vw;
    flex-grow: 9;
  }

  .cont-title {
    font-size: 3.906vw;
    font-weight: 700;

    margin-bottom: 11.719vw;
  }

  .cont-title::before {

    width: 6.51vw;
    height: 0.391vw;

    bottom: -30%;
  }

  .cont-title::after {

    width: 3.906vw;
    height: 0.391vw;

    bottom: -50%;
    left: 0;
  }

  /*Question*/
  .ques-title {

    margin-bottom: 3.906vw;
    font-size: 3.255vw;
    font-weight: 700;
  }

  .ques span {

    font-size: 1.953vw;
    font-weight: 700;

  }

  .ques-list {
    margin: 6.51vw 0vw 9.115vw;
    justify-content: space-between;
  }

  .ques-item {

    width: 37.109vw;
    padding: 1.302vw;
    margin-right: 5.208vw;
    margin-bottom: 2.604vw;
  }

  .ques-item:nth-child(4n) {
    margin-right: 5.208vw;
  }

  .ques-item svg {
    font-size: 3.906vw;

    margin-bottom: 2.604vw;
  }

  .ques-item div h3,
  .ques-item div p {
    font-size: 2.604vw;
    font-weight: 700;
  }

  .ques-item div p {
    font-size: 2.344vw;
    padding-top: 1.302vw;

  }

  /*Mail*/
  .send-title {

    font-size: 3.255vw;
    font-weight: 700;

    margin-bottom: 2.604vw;
  }

  .send span {

    font-size: 1.953vw;
    font-weight: 700;
  }

  .send-form {
    margin-top: 7.813vw;
  }

  .send-form input {
    margin-bottom: 3.906vw;
    border-radius: 5.208vw;
    padding-left: 2.604vw;
    font-size: 2.344vw;
    font-weight: 400;

    border: 0.13vw solid #d6d6d9;
  }

  .in {
    width: 48%;
    padding: 1.302vw 0;
    margin-right: 3.906vw;
  }

  .in:nth-child(2n) {
    margin-right: 0;
  }

  .in-sub,
  .send-form textarea {
    width: 100%;
    padding: 1.302vw 0;
  }

  .send-form textarea {
    border-radius: 2.604vw;
    padding-left: 2.604vw;

    border: 0.13vw solid #d6d6d9;
    margin-bottom: 5.208vw;
    font-size: 2.344vw;
    font-weight: 400;
    resize: none;
  }

  .form-btn {
    margin-top: 2.604vw;
    padding: 1.302vw 3.906vw;
    border-radius: 6.51vw;

    border: 0.13vw solid #ff304f;

    font-size: 2.344vw;
    font-weight: 400;
    transition: 0.3s;
  }

  .form-btn:hover {

    transition: 0.3s;
  }
}
</style>
