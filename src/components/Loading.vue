<template>
  <div class="Loading">
    <div>
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

.LoadingGif {
  width: 8vw;
  max-height: 10vw;
}
</style>
