<template>
  <div>
    <h1>{{country[0].name}}</h1>
    <h3>{{country[0].nativeName}}</h3>
    <br />
      <img class="flag" v-bind:src="country[0].flag" />
      <br />
      <br />
      <h2>Basic information about country:</h2>
      <br />

      <p v-if="isVisited"><strong>VISITED</strong></p>

      <p v-if="isVisitedNote"><strong>Notes:</strong></p>
      <p v-if="isVisitedNote">{{visited[0].note}}</p>

      <span v-if="isWantToVisit"><strong>WANT TO VISIT</strong></span>
      <br v-if="isWantToVisit"/>
      <span v-if="isWantToVisitNode"><strong>Notes:</strong></span>
      <p v-if="isWantToVisitNode">{{wantToVisit[0].note}}</p>

      <span><strong>Region?</strong></span>
      <p>{{country[0].region}}</p>
      <span><strong>Subregion?</strong></span>
      <p>{{country[0].subregion}}</p>
      <span><strong>Capital city? </strong></span>
      <p>{{country[0].capital}}</p>
      <span><strong>How many people live in city?</strong></span>
      <p>{{country[0].population}}</p>
        <span><strong>Languages you can use?</strong></span>
        <ul style="list-style: none;">
          <li v-for="lang in country[0].languages">
            {{lang.name}} - (native) {{lang.nativeName}}
          </li>
        </ul>
        <br />
        <span><strong>Country borders with?</strong></span>
        <ul style="list-style: none;">
          <li v-for="border in country[0].borders">{{border}}</li>
        </ul>
        <br />
        <span><strong>What currencies you can pay with?</strong></span>
        <ul style="list-style: none;">
          <li v-for="currency in country[0].currencies">
            {{currency.name}} - {{currency.symbol}}
            </li>
        </ul>
        <br />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component({
  data() {
    return {
      country: this.$store.getters.getCountryByName(this.$route.params.name),
      visited: this.$store.getters.getVisitedByName(this.$route.params.name),
      wantToVisit: this.$store.getters.getWantToVisitByName(this.$route.params.name),
    };
  },
  computed: {
    isVisited() {
      return this.$data.visited.length !== 0 && this.$data.visited[0].name;
    },
    isVisitedNote() {
      return this.$data.visited.length !== 0 && this.$data.visited[0].note;
    },
    isWantToVisit() {
      return this.$data.wantToVisit.length !== 0 && this.$data.wantToVisit[0].name;
    },
    isWantToVisitNode() {
      return this.$data.wantToVisit.length !== 0 && this.$data.wantToVisit[0].note;
    },
  },
})
export default class Countries extends Vue {}
</script>

<style>
 .flag {
    width: 15rem;
    height: 6rem;
  }
  div {
    align-content: flex-start;
  }
</style>
