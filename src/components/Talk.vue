<template>
  <div class="Bulle">
    <img class="BulleImg" :src="bulleSrc" :style="bulleStyle" />
    <p class="ChatText" :style="{ fontFamily: randomFont }">{{ chat }}</p>
  </div>
</template>

<script>
export default {
  name: "TalkVue",
  data() {
    return {
      fonts: [
        "Arial",
        "Verdana",
        "Georgia",
        "Tahoma",
        "Times New Roman",
        "Courier New",
      ],
      randomFont: "Arial",
      isSmallScreen: false, // Ajout de la variable isSmallScreen
    };
  },
  props: {
    chat: {
      type: String,
      required: true,
    },
    index: {
      required: true,
    },
  },
  computed: {
    bulleSrc() {
      return require("../assets/bulle.png");
    },
    bulleStyle() {
      const scale = this.isSmallScreen ? "scaleY" : "scaleX"; // Utilisation de la variable isSmallScreen
      var transformValue = this.index % 2 === 0 ? 1 : -1;
      transformValue *= this.isSmallScreen? -1 : 1;

      return {
        position: "relative",
        width: "400px",
        zIndex: "1",
        transform: `${scale}(${transformValue})`,
      };
    },
  },
  created() {
    // Mettre à jour la police toutes les 2 secondes
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.fonts.length);
      this.randomFont = this.fonts[randomIndex];
    }, 2000);

    // Ajout de l'écouteur d'événements pour détecter les changements de taille de la fenêtre
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // Appel initial de la fonction handleResize
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 768; // Met à jour la variable isSmallScreen
      console.log(this.isSmallScreen);
    },
  },
  beforeUnmount() {
    // Suppression de l'écouteur d'événements lors de la destruction du composant
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.Bulle {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

.BulleImg {
  height: 150px;
}

.ChatText {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
