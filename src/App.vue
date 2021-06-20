<template>
  <v-app dark="true">
    <v-card v-if="stage1">
      <v-card-title>
        <h1>Enter Code</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field label="API Key" counter></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn :loading="loading" :disabled="loading" color="red" class="ma-2 white--text" @click="checkAPI();" v-model="passkeyInput">
            Launch <v-icon dark>mdi-rocket-launch</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <v-card v-if="stage2">
      <v-card-actions class="justify-center">
        <v-btn :loading="loading" :disabled="loading" color="red" fab class="ma-2 white--text" @click="confirmCheckAPI();" v-model="passkeyInput" width="150" height="150">          <v-icon dark>mdi-rocket-launch</v-icon>
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
    passKey: '12346',
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
      //if (this.passkeyInput == this.passKey) {
        this.stage1 = false
        this.stage2 = true
        this.apiResponse = "Waiting"
      /*} else {
        alert('API Key is invalid');
      }*/
      
    },
    confirmCheckAPI: function () {
      this.httpGet('https://status.mojang.com/check');
    },
    httpGet: function (Url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url, false);
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    this.apiResponse = "Sucess!"
    //return xmlHttp.responseText;
    },
  }
};
</script>
