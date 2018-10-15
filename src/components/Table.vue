<template>
  <b-table responsive striped hover :items="items"></b-table>
</template>

<script>
const items = [
  {
    "Vue materjalid": 'Laracasts "Learn Vue 2: Step by Step"',
    Kirjeldus: "Lihtsalt jälgitav ülevaade Vue põhifunktsioonidest."
  },
  {
    "Vue materjalid": "Vue.js 2 Academy: Learn Vue Step by Step",
    Kirjeldus: "Põhjalikum õpetus, hõlmab 2 Vue projekti kirjutamist."
  },
  {
    "Vue materjalid": "Vue.js ametlik dokumentatsioon",
    Kirjeldus:
      "Asendamatu infoallikas Vue.js tundmaõppimiseks. Sisaldab näidisprojekte."
  },
  {
    "Vue materjalid": 'Vuemastery "Intro to Vue.js"',
    Kirjeldus: "Sissejuhatav kursus, lihtsad ja selged seletused."
  },
  {
    "Vue materjalid": "Fred Korts'i github: Sissejuhatus Vue.js'i",
    Kirjeldus: "Eestikeelne Vue.js sissejuhatus, github wikina."
  }
];

export default {
  data() {
    return {
      items: items
    };
  }
};
</script>
