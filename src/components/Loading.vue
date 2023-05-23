<template>
  <div class="Loading">
    <div class="LoadingImages">
      <img class="LoadingGif" src="../assets/loading1.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading2.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading3.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading4.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading5.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading6.gif" alt="Loading gif" />
      <img class="LoadingGif" src="../assets/loading7.gif" alt="Loading gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingVue",
};
</script>

<style>
.Loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.LoadingImages {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
}

.LoadingGif {
  width: 200px;
  max-height: 200px;
  margin: 0 10px;
}

@media (max-width: 768px) {
  /* Styles spécifiques pour les petits écrans */
  .LoadingGif {
    width: 50px;
    max-height: 50px;
  }
}
</style>
