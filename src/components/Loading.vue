<template>
  <div class="Loading">
    <div class="Loading-gifs">
      <img class="loadingGif" src="../assets/loading1.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading2.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading3.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading4.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading5.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading6.gif" alt="Loading gif" />
      <img class="loadingGif" src="../assets/loading7.gif" alt="Loading gif" />
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
  height: 100%;
}

.loadingGif {
  width: 8vw;
  max-height: 10vw;
  /* height: 40vh; */
  /* max-width: 40%; */
}
</style>
