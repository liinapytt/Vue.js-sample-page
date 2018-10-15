<template>
  <div class="examples page text-center">
     <div class="example">
      <h3>Toggle switches - valikulülitid</h3>
      <img class="fluid" src="../assets/toggleswitch.jpg" width="500" alt="toggle" />
      <button class="btn btn-success"><a href="https://codepen.io/liinapytt/pen/PyKENa">Õpetus Codepen'is</a></button>
    </div>
    <div class="example">
      <h3>Hello World rakendus Vue.js'iga</h3>
      <img src="../assets/helloworld.jpg" width="500" alt="toggle" />
      <button class="btn btn-success"><a href="https://codepen.io/liinapytt/pen/MPvdeJ">Õpetus Codepen'is</a></button>
    </div>
    <div class="example">
      <h3>Vue direktiivide kasutamise näide</h3>
      <img src="../assets/directive.jpg" width="500" alt="toggle" />
     <button class="btn btn-success"><a href="https://codepen.io/liinapytt/pen/dgzEma">Õpetus Codepen'is</a></button>
    </div>
    <div class="example">
     <h3> Väljalibisev menüü</h3>
    <img src="../assets/menu.jpg" width="500" alt="toggle" />
    <button class="btn btn-success"><a href="https://codepen.io/liinapytt/pen/KGXPKd">Õpetus Codepen'is</a></button>
    </div>
    <div class="example">
      <h3>Salasõna sobivuse kontroll Vue'ga</h3>
      <img src="../assets/password.jpg" width="500" alt="toggle" />
      <button class="btn btn-success"><a href=" https://codepen.io/liinapytt/pen/VEMZXR">Õpetus Codepen'is</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "näited"
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap.scss";

.example {
  margin: 20px 0 10px;
}

img {
  width: 300px;

  @include media-breakpoint-up(md) {
    width: 500px;
  }
}

.btn {
  margin: 10px;
}

button a {
  color: #fff;
}
</style>
