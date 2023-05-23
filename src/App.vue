<template>
  <div class="Page">
    <HeaderVue />
    <div v-if="step === 'gallery'" class="container">
      <AnimalGallery @selected-animals="handleSelectedAnimals" />
    </div>
    <div v-if="step === 'chat'" class="container">
      <AnimalChat :animalDatas="selectedCards" @exit="step = 'gallery'" />
    </div>
    <FooterVue />
  </div>
</template>

<script>
import AnimalGallery from "./components/AnimalGallery.vue";
import AnimalChat from "./components/AnimalChat.vue";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AnimalGallery,
    AnimalChat,
    HeaderVue,
    FooterVue,
  },
  data() {
    return {
      selectedCards: [],
      step: "gallery",
    };
  },

  created() {
    const cacheReady = localStorage.getItem("cacheReady");
    if (cacheReady === "true") {
      const data1 = JSON.parse(localStorage.getItem("selectedAnimalData1"));
      const data2 = JSON.parse(localStorage.getItem("selectedAnimalData2"));

      this.step = "chat";
      this.selectedCards[0] = data1;
      this.selectedCards[1] = data2;
    }
  },

  methods: {
    handleSelectedAnimals(selectedAnimals) {
      this.selectedCards = selectedAnimals;
      this.step = "chat";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url("./assets/background1.GIF");
}

body {
  background: url("./assets/background3.GIF");
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

@media (max-width: 768px) {
  /* Styles spécifiques pour les petits écrans */
  .container {
    padding: 0 10px;
  }
}
</style>
