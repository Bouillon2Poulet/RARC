<template>
  <div class="Page">
    <HeaderVue />
    <div v-if="this.step == 'galery'">
      <AnimalGallery @selected-animals="handleSelectedAnimals" />
    </div>
    <div v-if="this.step == 'chat'">
      <AnimalChat :animalDatas="selectedCards" @exit="this.step = 'galery'" />
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
      step: "galery",
    };
  },

  created() {
    console.log(localStorage.getItem("cacheReady"));
    if (localStorage.getItem("cacheReady") === "true") {
      console.log(localStorage.getItem("cacheReady"));
      const data1 = JSON.parse(localStorage.getItem("selectedAnimalData1"));
      const data2 = JSON.parse(localStorage.getItem("selectedAnimalData2"));
      console.log(data1);
      console.log(data2);

      this.step = "chat";
      this.selectedCards[0] = data1;
      this.selectedCards[1] = data2;

      console.log(this.selectedCards);
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
</style>
