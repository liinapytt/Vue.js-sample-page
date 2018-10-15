<template>
<div>
    <b-navbar toggleable>
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                  <router-link class="spacing" v-for="routes in links" 
                  v-bind:key="routes.id"
                  :to="`${routes.page}`">{{routes.text}}</router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>             
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Avaleht",
          page: "/Avaleht"
        },
        {
          id: 1,
          text: "Sissejuhatus",
          page: "/sissejuhatus"
        },
        {
          id: 2,
          text: "Todo",
          page: "/todo"
        },
        {
          id: 3,
          text: "Näited",
          page: "/näited"
        },
        {
          id: 4,
          text: "Materjalid",
          page: "/materjalid"
        },
        {
          id: 5,
          text: "Mäng",
          page: "/mäng"
        },
        {
          id: 6,
          text: "Tagasiside",
          page: "/tagasiside"
        }
      ]
    };
  }
};
</script>
<style>
.spacing {
  color: #fff;
}
.spacing:active,
.spacing:hover {
  color: #42b883;
  text-decoration: none;
}

.navbar-toggler-icon {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
