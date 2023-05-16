<template>
  <div class="bulle">
    <img class="BulleImg" :src="bulleSrc" :style="bulleStyle" />
    <p class="chat-text" :style="{ fontFamily: randomFont }">{{ this.chat }}</p>
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
      return require(`./../assets/bulle.png`);
    },
    bulleStyle() {
      return {
        position: "relative",
        width: "400px",
        zIndex: "1",
        transform: `scaleX(${this.index % 2 == 0 ? 1 : -1})`,
      };
    },
  },
  created() {
    // Mettre à jour la police toutes les 2 secondes
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.fonts.length);
      this.randomFont = this.fonts[randomIndex];
    }, 500);
  },
};
</script>

<style>
.bulle {
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  z-index: 1;
  vertical-align: top; /* ajout de la propriété */
}

.BulleImg {
  height: 150px;
}

.chat-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
