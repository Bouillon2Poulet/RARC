<template>
  <div class="Footer">
    <div class="Credits">
      <p class="ColorfulText">Réalisé par {{ name }}.</p>
      <p class="ColorfulText">
        Instagram :
        <a :href="instagramLink" target="_blank">{{ instagramHandle }}</a>
      </p>
      <p class="ColorfulText">
        Site réalisé dans le cadre de mes études à l'<a
          :href="imacLink"
          target="_blank"
          >IMAC</a
        >.
      </p>
      <p class="ColorfulText">
        Merci à <a :href="giphyApiLink" target="_blank">Giphy API</a>,
        <a :href="gptApiLink" target="_blank">GPT API</a>, et
        <a :href="animalsApiLink" target="_blank">Animals API</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return {
      name: "Serres Romain",
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
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Credits p {
  margin-left: 10px;
  margin-right: 10px;
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
</style>
