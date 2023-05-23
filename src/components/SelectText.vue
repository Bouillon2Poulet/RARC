<template>
    <div class="FullWidthComponent" :style="{ transform: `translateX(${translateX}px)` }">
      <div class="TextContainer">
        <h2 class="Title">Select 2 animals!</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FullWidthComponent",
    data() {
      return {
        translateX: 0,
        direction: 1,
      };
    },
    mounted() {
      setInterval(() => {
        this.direction *= -1;
        this.translateX += this.direction * 100;
      }, 200);
    },
  };
  </script>
  
  <style>
  .FullWidthComponent {
    width: 100%;
    color: aliceblue;
    margin: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/backgroundData3.jpg");
  }
  
  .TextContainer {
    text-align: center;
  }
  
  .Title {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 3rem;
  }
  </style>
  