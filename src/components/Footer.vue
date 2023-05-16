<template>
  <div class="Footer">
    <div class="Credits">
      <p class="colorful-text">Réalisé par {{ name }}.</p>
      <p class="colorful-text">
        Instagram :
        <a href="{{instagram_link}}" target="_blank">{{ instagram_handle }}</a>
      </p>
      <p class="colorful-text">
        Site réalisé dans le cadre de mes études à l'<a
          href="{{imac_link}}"
          target="_blank"
          >IMAC</a
        >.
      </p>
      <p class="colorful-text">
        Merci à <a href="{{giphy_api_link}}" target="_blank">Giphy API</a>,
        <a href="{{gpt_api_link}}" target="_blank">GPT API</a>, et
        <a href="{{animals_api_link}}" target="_blank">Animals API</a>.
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
      instagram_handle: "@consomme2poyo",
      instagram_link: "https://www.instagram.com/consomme2poyo/",
      imac_link: "https://www.ingenieur-imac.fr/",
      giphy_api_link: "https://developers.giphy.com/",
      gpt_api_link:
        "https://openai.com/blog/introducing-chatgpt-and-whisper-apis",
      animals_api_link: "https://api-ninjas.com/api/animals",
    };
  },
};
</script>

<style>
.Footer {
  /* background-color: #F5F5F5; */
  padding: 20px;
  text-align: center;
  font-size: 12rem;
  background: url("./../assets/background2.GIF");
  display: flex;
  justify-content: center;
  align-items: center;
}

.Credits {
  width: auto;
  /* background-color: #f5f5f5; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 5%; */
}

.Credits p {
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  /* font-size: 16rem; */
  background: url("./../assets/backgroundCredits.GIF");
  border-color: aqua;
  border-width: 10px;
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-style: italic;
}

.colorful-text {
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
