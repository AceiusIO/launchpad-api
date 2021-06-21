<template>
  <v-app>
    <v-card v-if="stage1">
      <v-card-title>
        <h1>Enter Code</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field label="API Key" outlined clearable autocomplete="off" v-model="keyInput"></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn :loading="loading" :disabled="loading" color="red" class="ma-2 white--text" @click="checkAPI();">
            Launch <v-icon>mdi-rocket-launch</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <v-card v-if="stage2">
      <v-card-actions class="justify-center">
        <v-btn :loading="loading" :disabled="loading" color="red" fab class="ma-2 white--text" @click="fire();" width="150" height="150"> <v-icon>mdi-rocket-launch</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <h3>{{apiResponse}}</h3>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    passKey: '1234',
    keyInput: null,
    loader: null,
    loading: false,
    stage1: true,
    stage2: false,
  }),

  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1000)

        this.loader = null
      },
  },
  
  methods: {
    checkAPI: function () {
      this.loader = 'loading'
      this.apiResponse = "Waiting"
      if (this.keyInput == this.passKey) {
        this.stage1 = false
        this.stage2 = true
        this.apiResponse = "Waiting"
      } else {
        alert('API Key is invalid');
      }
      
    },

    fire: function () {
      this.loader = 'loading'
      this.apiResponse = 'Preparing'
      if (this.keyInput == this.passKey) {
        this.httpGet('http://api.mojang.com/');
      } else {
        alert('DANGER: Authentication failed, but trigger fired!');
      }
    },

    httpGet: function (Url) {
      this.apiResponse = "Initalizing XML Request"
      const xmlHttp = new XMLHttpRequest();
      this.apiResponse = "Requesting Data"
      xmlHttp.open("GET", Url, false);
      xmlHttp.send(null);
      this.apiResponse = "<v-icon>mdi-checkmark</v-icon>Sucess!"
      console.log(xmlHttp.responseText);
    },
  }
};
</script>
