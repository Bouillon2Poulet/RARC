<template>
  <LoadingVue v-if="!talkLoaded" />
  <div class="animal-chat" v-if="talkLoaded">
    <AnimalCardChat :animalData="animalDatas[0]" />
    <div class="talk-container">
      <TalkVue :chat="chat[chatIndex]" :index="chatIndex" />
    </div>
    <AnimalCardChat :animalData="animalDatas[1]" />
  </div>
  <NextChatButton v-if="talkLoaded" @click="indexIncrement" />
  <p class="Exit" @click="emitExit">Go back to gallery</p>
</template>

<script>
import gptRequest from "@/services/gpt";
import AnimalCardChat from "./AnimalCardChat.vue";
import TalkVue from "./Talk.vue";
import NextChatButton from "./NextChatButton";
import LoadingVue from "./Loading.vue";

export default {
  name: "AnimalChat",
  props: {
    animalDatas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chat: [],
      allChat: null,
      chatIndex: 0,
      talkLoaded: false,
    };
  },

  async created() {
    this.allChat = await gptRequest(
      "Imagine a funny and absurd discussion between a " +
        this.animalDatas[0].name +
        "and " +
        this.animalDatas[1].name +
        ". " +
        this.animalDatas[0].name +
        " begin. I would like your response to be presented in separate paragraphs, with a blank line between each paragraph. Could you please respond in this way?"
    );
    const chatSplitted = this.allChat.split("\n\n");
    console.log(chatSplitted);
    for (let i = 0; i < chatSplitted.length - 1; i++) {
      this.chat[i] = chatSplitted[i + 1].split(":")[1];
    }
    this.talkLoaded = true;
  },
  methods: {
    async indexIncrement() {
      if (this.chatIndex == this.chat.length - 1) {
        this.talkLoaded = false;
        await this.continueChat();
      }
      this.chatIndex++;
    },
    async continueChat() {
      const chatContinue = await gptRequest(
        "Can you please continue this absurd and funny discussion between a " +
          this.animalDatas[0].name +
          "and " +
          this.animalDatas[1].name +
          ". You need to imagine at least 10 more lines." +
          this.animalDatas[0].name +
          " begin. I would like your response to be presented in separate paragraphs, with a blank line between each paragraph. Could you please respond in this way? Here is the discussion you have to continue :\n" +
          this.allChat
      );
      console.log(chatContinue);
      this.allChat += chatContinue;
      const chatSplitted = this.allChat.split("\n\n");
      // console.log(chatSplitted);
      for (let i = this.chatIndex; i < chatSplitted.length - 1; i++) {
        this.chat[i] = chatSplitted[i + 1].split(":")[1];
      }
      this.talkLoaded = true;
    },
    emitExit() {
      localStorage.setItem("cacheReady", "false");
      localStorage.setItem("selectedAnimalData1", "");
      localStorage.setItem("selectedAnimalData2", "");

      this.$emit("exit");
    },
  },
  components: {
    AnimalCardChat,
    TalkVue,
    LoadingVue,
    NextChatButton,
  },
};
</script>

<style scoped>
.animal-chat {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: flex-start;
}

.Exit {
  display: inline-block;
  color: red;
  margin: auto;
  padding: 2%;
  width: fit-content;
  height: fit-content;
  background: url("./../assets/backgroundCard3.png");
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: x-large;
  border-radius: 40%;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  border: 10px solid red;
}

.animal-card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.talk-container {
  display: flex;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.nextButton {
  position: relative;
}
</style>
