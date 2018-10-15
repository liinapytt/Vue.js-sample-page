<template>
<div class="punchbag">
   <div id="header">
      <h2>Löö poksikotti!</h2>
    </div>

    <!-- bag image -->
    <div id="bag" :class="{ burst: ended }">

        <!-- game controls -->
        <div id="controls">
        <button  type="button" class="btn btn-danger" @click="punch(), pickWords()" v-show="!ended">Löö</button>
        <button  type="button" class="btn btn-light"  @click="restart()">Alusta uuesti</button>
        </div>

         <!-- batwords -->
        <div id="batman-words">
        {{ chosenWord }}
        </div>
    </div>

    <!-- bag health -->
    <div id="bag-health">
      <div :style="{ width: health + '%' }"></div>
    </div>

</div>
</template>

<script>
export default {
  name: "punchbag",
  data() {
    return {
      health: 100,
      ended: false,
      // prettier-ignore
      batman: [
            "AIIIII!!!!", "UIUIUIII!!!!", "ARRGH!!!!", "ÕHHH!!!!", "UHHHH!!!!", "PÕMAKI!!!!", "PIU!!!!", "PAU!!!!", "NÄTAKI!!!!", "HATŠAKI!!!!", "PÕMMMM!!!!", "TOU!!!!", "KOLAKI!!!!", "KÕMMM!!!!", "KASSASAAD!!!!", "PÕFF!!!!", "KÕSS!!!!", "PLÄTSAKI!!!!", "PÕPÕHH!!!!", "DUDUHH!!!!", "PIKALI!!!!", "SERVITI!!!!", "KÕSS!!!!", "MATAKI!!!!", "MÜTAKI!!!!", "KÕMM!!!!", "PLÖRAKI!!!!", "KAPOW!!!!", "HOPSASSAA!!!!", "KARSUMMM!!!!", "KLOPSADI!!!!", "KOLKS!!!!", "KÕLKS!!!!", "OOOHHHH!!!!", "OOOOFF!!!!", "PAMMM!!!", "RAKKK!!!!", "PRÕMMDI!!!!", "OIOIOIOI!!!!", "SUTAKI!!!!", "SIUHTI!!!!", "JESSAS!!!!",  "APUA!!!!", "NOKKAUT!!!"
            ],
      chosenWord: ""
    };
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
      this.chosenWord = "";
    },
    pickWords() {
      this.chosenWord = this.batman[
        Math.floor(Math.random() * this.batman.length)
      ];
    }
  }
};
</script>

<style>
#header {
  display: flex;
  justify-content: center;
  margin: 20px auto;
}
#bag {
  width: 200px;
  height: 400px;
  margin: 0 auto;
  background: url(../assets/bag.png) center no-repeat;
  background-size: 80%;
}
#bag.burst {
  background: url(../assets/bag-burst.png) center no-repeat;
  background-size: 80%;
}

#bag-health {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

#bag-health div {
  height: 20px;
  background: crimson;
}

#controls {
  display: flex;
  width: 140px;
  margin: 0 auto;
}

#batman-words {
  font-family: "Bangers", cursive;
  font-size: 500%;
  text-align: center;
}
</style>
