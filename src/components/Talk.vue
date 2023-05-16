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
      return {
        position: "relative",
        width: "400px",
        zIndex: "1",
        transform: `scaleX(${this.index % 2 === 0 ? 1 : -1})`,
      };
    },
  },
  created() {
    // Mettre à jour la police toutes les 2 secondes
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.fonts.length);
      this.randomFont = this.fonts[randomIndex];
    }, 2000);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
