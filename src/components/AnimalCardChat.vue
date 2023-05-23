<template>
  <div class="Container">
    <div class="CardChat" :style="borderImageStyle">
      <img class="Img" :src="animalData.gif.url" :alt="animalData.name" />
      <div class="Info" v-if="animalData" id="Description">
        <p>{{ animalData.name }} - {{ animalData.firstname }}</p>
        <p>{{ animalData.quote }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalCardChat",
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
  },
};
</script>

<style>
.CardChat {
  background: url("../assets/backgroundCard3.png");
  margin: 1rem;
  border-radius: 30%;
  width: 70%;
  padding: 15px;
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  border-width: 2rem;
}

.Info {
  margin: auto;
  width: 80%; /* Modifier cette ligne */
  height: fit-content;
  padding: 2%;
  background: url(../assets/backgroundData2.jpg);
  border-radius: 15%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: bold;
  font-style: italic;
}

#animal-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.Container {
  background: url("../assets/backgroundCard3.png");
}
</style>
