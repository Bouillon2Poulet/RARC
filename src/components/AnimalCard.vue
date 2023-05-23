<template>
  <div class="Card" :class="{ selected: animalData.selected }" :style="borderImageStyle">
    <img class="Img" :src="animalData.gif.url" :alt="animalData.name" />
    <div class="Data" v-if="animalData" id="Description">
      <p>{{ animalData.name }} - {{ animalData.firstname }}</p>
      <p>{{ animalData.quote }}</p>
      <p>{{ animalData.diet }}</p>
      <p>{{ this.animalLocationParsed}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalCard",
  props: {
    animalData: {
      type: Object,
      required: true,
      validator: (value) => {
        return value && typeof value === "object";
      },
    },
  },
  data() {
    return {
      borderAngle: 0,
      animalLocationParsed : ""
    };
  },
  computed: {
    borderImageStyle() {
      return {
        "border-image": `repeating-linear-gradient(${this.borderAngle}deg, #ff36ee, #9198e5, #7bff0f 50px) 60`,
      };
    },
  },
  mounted() {
    setInterval(() => {
      this.borderAngle = (this.borderAngle + 1) % 360;
    }, 20);

    for(let i = 0; i<this.animalData.location.length; i++){
      this.animalLocationParsed += this.animalData.location[i] + "\n";
      console.log(this.animalLocationParsed);
    }
  },
};
</script>

<style>
.Card {
  background: url("../assets/backgroundCard1.png");
  margin: 1rem; /* Ajouter une marge automatique à gauche et à droite */
  border-radius: 30%;
  width: 400px;
  padding: 15px;
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  border-width: 3em;
  transition: filter 0.3s ease-in-out;
}

.Card.selected {
  filter: hue-rotate(210deg);
}

.Img {
  height: 200px;
  width: 100%;
  max-width: 300px;
  padding: 3%;
}

.Data {
  margin: auto;
  width: 100%;
  max-width: 300px;
  height: fit-content;
  padding: 2%;
  background: url(../assets/backgroundData.JPG);
  border-radius: 15%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
}

#animal-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .Card {
    width: 80%;
    border-width: 1rem;
  }

  .Data {
    font-size: 1rem;
  }
}
</style>
