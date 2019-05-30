<template>
  <div>
    <div v-if=!isLoadedState>
  loading...
</div>
<div v-if=isLoadedState>
    <div>
      <h1> Restapiland's Countries</h1>
    </div>
  <div style="display: flex">
        <v-select 
          style="margin-right: 1rem;"
          :items="items"
          v-model="currentSelect"
          label="Filters"
          outline
          @change="onFilterChange()"
        ></v-select>
        <v-text-field
            label="Query string..."
            v-model="currentFilterValue"
            outline
        ></v-text-field>
  </div>
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
        <v-btn color="success" class="button" v-on:click="addToVisited(country)" >Visited</v-btn>
        <v-btn color="warning" class="button" v-on:click="addToWantToVisit(country)">Want to visit</v-btn>
        <v-btn color="info" class="button"><router-link v-bind:to="'/country/' + country.name">View more</router-link></v-btn>
        </div>
      </div>
    </li>
  </ul>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

@Component({
  data() {
    return {
      filterType: 'name',
      filterString: 'af',
      currentFilterValue: '',
      currentSelect: '',
      items: ['Name', 'Region', 'Subregion', 'Capital']
    };
  },
  methods: {
    addToVisited(country) {
      this.$store.commit('addVisited', country);
    },
    addToWantToVisit(country) {
      this.$store.commit('addWantToVisit', country);
    },
    onFilterChange() {
            this.$data.currentFilterValue = '';

    }
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries(this.$data.currentSelect, this.$data.currentFilterValue);
    },
    isLoadedState() {
      return this.$store.state.isCountriesLoaded;
    },
    currentSelectS() {
      console.log(this.$data.currentSelect)
    },
  },
})
export default class Countries extends Vue {}
</script>

<style>
  .flag {
    width: 5rem;
    height: 2rem;
  }
  .button {
    font-size: 0.7rem !important;
    width: 2rem !important;
    height: 0.6rem !important;
    background: lightcoral !important;
  }
  .list-element-main-info {
    width: 50%;
  }
  .list-element-actions {
    width: 50%;
  }
  li a {
    text-decoration: none;
    color: white;
}
</style>
