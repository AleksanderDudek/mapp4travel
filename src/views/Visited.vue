<template>
  <div>
    <div>
      <h1> Restapiland's VISITED Countries</h1>
    </div>
  <div v-if="countries.length === 0"> No country was marked as VISITED</div>
  <ul style="list-style: none;">
  <li v-for="country in countries">
    <div style="background-color: lightgrey; padding: 1rem; margin: 1rem; width: 100%; display: inline-flex;">
      <div class="list-element-main-info">
        <h3>{{ country.name }}</h3>
        <h5>( Native name: <strong>{{ country.nativeName }}</strong> )</h5>
        <p> What region you might ask? It is placed in <strong>{{ country.region }}</strong></p>
        <img class="flag" v-bind:src="country.flag" />
      </div>
      <div class="list-element-actions">
        <v-btn color="warning" class="button">Add note</v-btn>
        <v-btn color="info" class="button">More info?</v-btn>

      </div>
    </div>
  </li>
</ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

@Component({
  data() {
        return {
        };
    },
  methods: {
      addToVisited( country) {
        // alert('waaat')
        console.log( country)
        this.$store.commit('addVisited', country)
      },
      addToWantToVisit( country) {
        // alert('waaat')
        console.log( country)
        this.$store.commit('addVisited', country)
      }
    },
  computed: {
      countries() {
        return this.$store.state.visitedCountries;
      }
    },
})
export default class Visited extends Vue {}
</script>

<style>
  .flag {
    width: 5rem;
    height: 2rem;
    /* min-width: 15%;
    max-width:  20%;
    min-height: 10px;
    max-height: 20px; */
  }
  .button {
    font-size: 0.7rem !important;
    width: 2rem;
    height: 0.6rem;
    background: lightcoral !important;
  }
  .list-element-main-info {
    width: 50%;
  }
  .list-element-actions {
    width: 50%;
  }
</style>
