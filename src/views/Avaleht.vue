<template>
  <div class="avaleht page">
     <img id="vueimg" src="../assets/vuejs.png"  alt="Vue.js" />
  </div>
</template>

<script>
export default {
  name: "Avaleht"
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap.scss";

.avaleht {
  width: 100%;
}
#vueimg {
  margin: 100px auto 0;
  height: 100px;

  @include media-breakpoint-up(md) {
    height: 250px;
  }
}
</style>
