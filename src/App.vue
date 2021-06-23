<template>
  <v-app>
    <v-card v-if="stage1">
      <v-card-title>
        <h1>Enter Code</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Launch code" outlined clearable autocomplete="off" v-model="keyInput"></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn :loading="loading" :disabled="disabled" color="red" class="ma-2 white--text" @click="checkAPI();">
            Authorize <v-icon>mdi-lock-open</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <v-card v-if="stage2">
      <v-card-actions class="justify-center">
        <v-btn v-if="stage3" :loading="loading" :disabled="disabled" :color="fired" fab class="ma-2 white--text" @click="fire();" width="150" height="150"> <v-icon>{{icon}}</v-icon> </v-btn>
      </v-card-actions>
      <v-card-text>
        <h3>{{apiResponse}}</h3>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <p>&copy; 2021 AceiusIO, all rights reserved. <br /> <strong>DO NOT TAMPER WITH THIS PAGE!!!</strong></p>
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
    //url: 'localhost:7000',
    disabled: false,
    passKey: null,
    keyInput: null,
    loader: null,
    loading: false,
    stage1: true,
    stage2: false,
    stage3: true,
    stage4: false,
    fired: 'red',
    icon: 'mdi-rocket-launch',
  }),

  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        this.disabled = true

        setTimeout(() => (this[l] = false, this.disabled = false), 1000)

        this.loader = null
      },
  },
  
  methods: {
    sleep: function (milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    },

    checkAPI: function () {
      this.validateKey(); //this.url
      this.loader = 'loading'
      this.apiResponse = "Waiting"
      this.fired = 'red'

      setTimeout(this.verifyInput, 1000);
    },

    verifyInput: function () {
      if ('accepted' == this.passKey) {
        this.stage1 = false
        this.stage2 = true
        this.apiResponse = "Waiting"
      } else {
        //setTimeout(this.validateKey, 1000);
        alert('Incorrect passcode');
      }
    },

    fire: function () {
      this.loader = 'loading'
      this.apiResponse = 'Preparing'
      if ('accepted' == this.passKey) {
        this.httpGet('http://localhost:7000/fire');
      } else {
        alert('Incorrect passcode');
      }
    },

    httpGet: function (Url) {
      this.apiResponse = "Initalizing XML Request"
      const xmlHttp = new XMLHttpRequest();
      this.apiResponse = "Requesting Data"
      //xml start
      xmlHttp.open("GET", Url);
      xmlHttp.setRequestHeader("Authorization", this.keyInput);
      xmlHttp.send();
      xmlHttp.onreadystatechange = (e) => {
        console.log(xmlHttp.responseText);
        console.log('[DEBUG]: ' + e);
      }
      //xml end
      //setTimeout(() => (this.stage3 = false, this.stage4 = true), 1001);
      this.fired = 'green'
      this.icon = 'mdi-check'
      //setTimeout(() => (this.apiResponse = "Sucess!"), 1001);
      this.apiResponse = "Sucess!"
    },

    validateKey: function () {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", 'http://localhost:7000/auth');
      xmlHttp.setRequestHeader("Authorization", this.keyInput);
      xmlHttp.send();
      xmlHttp.onreadystatechange = (e) => {
        //await this.sleep(999);
        console.log(xmlHttp.responseText);
        this.passKey = (xmlHttp.responseText);
        console.log('[Auth] PassKey was ' + this.passKey);
        console.log('[DEBUG]: ' + e);
      }
    },
  }
}
</script>
