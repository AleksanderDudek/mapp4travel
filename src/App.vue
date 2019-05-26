<template>
  <div id="app">
    <div class="drawer">
      <v-navigation-drawer
        class="drawer"
        v-model="drawer"
        :mini-variant.sync="mini"
        hide-overlay
        stateless
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src=".\assets\logo.png">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>mApp Travel</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  icon
                  @click.stop="mini = !mini"
                >
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                  <router-link to="/countries">Countries</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
          >
            <v-list-tile-action>
              <v-icon>room</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/visited">Visited</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
              <v-icon>question_answer</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/wantToVisit">Want to visit</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="contents">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import service from './service/CountryService.js'
import store from '@/store.js';

@Component({
  data() {
    return {
      drawer: true,
      mini: true,
      right: null,
    };
  },
  methods: {
      changeLoadedState() {
        this.$store.commit('changeIsLoaded', true)
      }
  },
  mounted () {
    service.getCountries().then((response) => {
      console.log(response);
      this.$store.commit('loadCountries', response);
      this.$store.commit('changeIsLoaded', true)

    })
    .catch((error) => {
      console.log(error);
      this.$store.commit('changeIsLoaded', true)
    });
  },
})
export default class App extends Vue {}
</script>


<style>
#app {
  height: 100%;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.drawer {
  height: 80rem;
}

.contents {
  padding: 2rem;
  width: 75%;
}
</style>
