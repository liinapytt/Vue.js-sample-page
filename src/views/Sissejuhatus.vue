<template>
  <div class="home page">
    <b-media right-align vertical-align="center">
      <div class="text-center">
      <img src="../assets/logo.png" height="220" alt="Vue logo" />  
    <h2 class="mt-0 mb-1">Mis on Vue.js?</h2> 
    </div>
        Vue.js on hetkel üks populaarsemaid Javascript'i raamistikke. Sarnaselt Angular.js'ile ning React'ile võimaldab 
        Vue ehitada eesrakendusi (view'sid) - täpsemalt siduda andmeid DOM'iga ning kasutada komponente. Vue.js'is on
        eraldatud mallid, JavaScript'i loogika, ning võimalus kasutada stiile failide siseselt. Lisaks kasutab
      Vue.js Angularile sarnast täiustatud HTML'i. 
     </b-media> 
  <div class="media">
    <div class="media-body">
      <div class="text-center">
      <h2 class="mt-0">Olulised lingid</h2>
      </div>
         <ul>
      <li><a href="https://vuejs.org" target="_blank">Dokumentatsioon</a></li>
    </ul>
    </div>
  </div>
     <b-media right-align vertical-align="center">
       <div class="text-center">
      <img src="../assets/mvc.png" height="220" alt="MVC model" />
      <h2 class="mt-0 mb-1">Mis on MVC?</h2>
      </div>
      MVC (Model-View-Controller) arhitektuur jagab objektid kolmeks (mudel, vaade, kontroller) ja määrab ära, kuidas need omavahel suhtlevad.
            <ul>
          <li>mudel (model) – hoiab endas andmeid ja määrab ära kuidas andmeid töödeldakse.</li>
          <li>vaade (view) – kõik mida kasutaja ekraanil näeb. Mida kuvada saadakse teada kontrollerilt.</li>
          <li>kontroller (controller) – organiseerib mudel ja vaade omavahelist tööd. Kui andmed muutuvad, siis kontroller teavitab sellest vaadet. Kontroller tegeleb ka kasutaja tegevuse tõlkimisega.</li>
          </ul>  
     </b-media>
  </div>
</template>

<script>
export default {
  name: "sissejuhatus"
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/custom-bootstrap.scss";

h2 {
  padding: 20px;
}

li a {
  color: $gray-400;
}
.media {
  margin: 30px 10px;
}
</style>
