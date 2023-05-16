<template>
  <LoadingVue v-if="!cardsLoaded" />
  <div v-if="cardsLoaded">
    <div>
      <label class="FilterAndSortTitle" for="sort-select">Trier par :</label>
      <select
        class="FilterAndSortData"
        id="sort-select"
        @change="sortAnimalDatas($event.target.value)"
      >
        <option value="name">Nom</option>
        <option value="firstname">Prénom</option>
      </select>
    </div>
    <div>
      <label class="FilterAndSortTitle" for="filter-select-type"
        >Filtrer par :</label
      >
      <select
        class="FilterAndSortData"
        id="filter-select-type"
        @change="filterAnimalDatas($event.target.value)"
      >
        <option value="diet">Régime alimentaire</option>
      </select>
      <select
        class="FilterAndSortData"
        id="filter-select-value"
        @change="filterAnimalDatas('diet', $event.target.value)"
      >
        <option class="FilterAndSortData" value="">
          Sélectionner une option
        </option>
        <option class="FilterAndSortData" value="Omnivore">Omnivore</option>
        <option class="FilterAndSortData" value="Carnivore">Carnivore</option>
        <option class="FilterAndSortData" value="Herbivore">Herbivore</option>
      </select>
    </div>
    <AnimalCard
      v-for="(data, index) in filteredAnimalDatas"
      :key="index"
      :animalData="data"
      v-on:click="selectAnimal(data)"
    />
  </div>
</template>

<script>
import AnimalCard from "./AnimalCard.vue";
import gptRequest from "../services/gpt.js";
import { getAnimalData } from "../services/animalAPI.js";
import searchGif from "../services/giphy.js";
import LoadingVue from "./Loading.vue";

export default {
  name: "AnimalGallery",
  components: {
    AnimalCard,
    LoadingVue,
  },

  props: {
    selectedCards: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      animalNames: null,
      allAnimalDatas: [],
      filteredAnimalDatas: [],
      cardsLoaded: false,
      filterBy: null,
      filterValue: null,
      filterOptions: [],
      selectedAnimalDatas: [],
    };
  },

  async created() {
    localStorage.setItem("cacheReady", "false");
    await this.loadAnimalData();
    this.sortAnimalDatas("name"); // Tri par défaut = nom pour tous les animaux
    this.cardsLoaded = true;
  },

  methods: {
    async loadAnimalData() {
      try {
        const response = await gptRequest(
          "Can you give me 5 random animal species, providing only their names separated by a hyphen ('-') without any additional information?"
        );
        this.animalNames = response.split("\n\n")[1].split("-");
      } catch (error) {
        console.error("Error while loading animal gallery:", error);
      }

      for (let i = 0; i < this.animalNames.length; i++) {
        try {
          const data = await getAnimalData(this.animalNames[i]);
          const firstAnimalData = data[0];

          const firstnameAndQuote = await gptRequest(
            `Imagine a name and a quote for this animal : ${this.animalNames[i]}. Write it like this: "Name" + "Quote"`
          );

          const gif = await searchGif(this.animalNames[i]);

          this.allAnimalDatas.push({
            name: this.animalNames[i],
            firstname: firstnameAndQuote.split("+")[0],
            diet: firstAnimalData.characteristics.diet,
            location: firstAnimalData.locations,
            quote: firstnameAndQuote.split("+")[1],
            gif: gif,
            selected: false,
          });
        } catch (error) {
          console.error("Error while loading animalData from animalAPI", error);
          continue;
        }
      }

      this.sortAnimalDatas("name"); // Tri par défaut = name pour tous les animaux
      this.filteredAnimalDatas = this.allAnimalDatas;
      this.cardsLoaded = true;
    },

    sortAnimalDatas(sortBy) {
      if (sortBy === "name") {
        this.filteredAnimalDatas = this.allAnimalDatas.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sortBy === "firstname") {
        this.filteredAnimalDatas = this.allAnimalDatas.sort((a, b) =>
          a.firstname.localeCompare(b.firstname)
        );
      }
    },

    filterAnimalDatas(filterBy, filterValue) {
      this.filterBy = filterBy;
      this.filterValue = filterValue;
      if (filterValue != "") {
        this.filteredAnimalDatas = this.allAnimalDatas.filter(
          (animalData) => animalData.diet === filterValue
        );
      } else {
        this.filteredAnimalDatas = this.allAnimalDatas;
      }
    },
    selectAnimal(animalData) {
      animalData.selected = true;
      this.selectedAnimalDatas.push(animalData);

      if (this.selectedAnimalDatas.length >= 2) {
        localStorage.setItem("cacheReady", "true");
        console.log(localStorage.getItem("cacheReady"));
        localStorage.setItem(
          "selectedAnimalData1",
          JSON.stringify(this.selectedAnimalDatas[0])
        );
        localStorage.setItem(
          "selectedAnimalData2",
          JSON.stringify(this.selectedAnimalDatas[1])
        );

        this.$emit("selected-animals", this.selectedAnimalDatas);
        this.selectedAnimalDatas = [];
      }
    },
  },
};
</script>

<style scoped>
.FilterAndSortTitle {
  font-size: 2rem;
  color: yellow;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.FilterAndSortData {
  font-size: 1.5rem;
  color: blue;
  text-shadow: -1px -1px 0 #4800ff, 1px -1px 0 #ff00d9, -1px 1px 0 #00ff48,
    1px 1px 0 #ff0000;
}
</style>
