<template>
  <div id="app" >
      <Navbar></Navbar>
      <div class="content">
        <transition name="router-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
        <router-view/>
        </transition>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar: Navbar,
    Footer: Footer
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/custom-bootstrap.scss";
@import "~bootstrap/scss/bootstrap.scss";

$link-color: $gray-400;

* {
  box-sizing: border-box;
}

body {
  font-family: Helvetica, sans-serif;
  color: #d6d9e9;
  background: url(assets/mäed.jpg) no-repeat center center fixed;
  background-size: cover;
  /* background: #34e89e;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(to left, #0f3443, #34e89e); */ /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to left, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /*overflow: scroll;*/
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
html,
body {
  height: calc(100% - 50px);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px auto 0;
  border-radius: 10px;
  margin: 10px auto 0 auto;
  color: #fff;

  @include media-breakpoint-up(md) {
    width: 50%;
  }
}

.content {
  flex: 1;
  margin: 40px auto 0 auto;
}

a {
  color: #d6d9e9;
  text-decoration: none;
  padding: 10px;
}
a:active {
  color: #d6d9e9;
}
</style>
