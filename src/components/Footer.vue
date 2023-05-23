<template>
  <div class="Footer">
    <div class="Credits">
      <p class="ColorfulText">created by {{ name }}</p>
      <p class="ColorfulText">
        instagram:
        <a :href="instagramLink" target="_blank">{{ instagramHandle }}</a>
      </p>
      <p class="ColorfulText">
        website created as part of my studies at <a
          :href="imacLink"
          target="_blank"
          >imac</a
        >
      </p>
      <p class="ColorfulText">
        thanks to <a :href="giphyApiLink" target="_blank">giphy api</a>,
        <a :href="gptApiLink" target="_blank">openAI api</a>, and
        <a :href="animalsApiLink" target="_blank">animals api</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return {
      name: "Romain Serres",
      instagramHandle: "@consomme2poyo",
      instagramLink: "https://www.instagram.com/consomme2poyo/",
      imacLink: "https://www.ingenieur-imac.fr/",
      giphyApiLink: "https://developers.giphy.com/",
      gptApiLink:
        "https://openai.com/blog/introducing-chatgpt-and-whisper-apis",
      animalsApiLink: "https://api-ninjas.com/api/animals",
    };
  },
};
</script>

<style>
.Footer {
  padding: 20px;
  text-align: center;
  font-size: 12px;
  background: url("./../assets/background2.GIF");
  display: flex;
  justify-content: center;
  align-items: center;
}

.Credits {
  flex-wrap: wrap;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Credits p {
  margin: 10px;
  padding: 10px;
  background: url("./../assets/backgroundCredits.GIF");
  border-color: aqua;
  border-width: 10px;
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-style: italic;
}

.ColorfulText {
  animation-name: rainbow;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes rainbow {
  0% {
    color: red;
  }
  16% {
    color: orange;
  }
  33% {
    color: yellow;
  }
  50% {
    color: green;
  }
  66% {
    color: blue;
  }
  83% {
    color: indigo;
  }
  100% {
    color: violet;
  }
}

@media (max-width: 768px) {
  /* Specific styles for small screens */
  .Footer {
    flex-direction: column;
  }
  .Credits p {
    margin: 5px;
    font-size: 1.5rem;
  }
}
</style>
