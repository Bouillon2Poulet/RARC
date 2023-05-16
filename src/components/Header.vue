<template>
  <header class="Header">
    <div>
      <h1 class="HeaderTitle" :style="{ fontFamily: randomFont }">
        Random Animals Random Chats
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
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
.Header {
  width: 100%;
  max-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("./../assets/background2.GIF");
}

.HeaderTitle {
  font-size: 5rem;
  font-weight: bold;
  color: #ffffab;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
