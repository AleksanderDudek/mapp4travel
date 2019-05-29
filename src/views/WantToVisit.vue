<template>
  <div>
    <v-dialog v-model="dialog3" max-width="500px" justify-center>
        <v-card>
          <v-card-title>
            <span>PERSONAL NOTE</span>
          </v-card-title>
          <v-card-text>
            <v-textarea
          outline
          name="input-7-4"
          v-bind:label="labelForCurrentCountry"
          v-model="currentNote"
        ></v-textarea>
        <v-btn color="primary" dark @click="onDialogSave()" v-bind:disabled="isNoteValid">Save note</v-btn>

          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog3=false">Close</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-layout row justify-center>
      <div>
        <div>
          <h1> Restapiland's WANT TO VISIT Countries</h1>
        </div>
        <div v-if="countries.length === 0"> No country was marked as WANT TO VISIT</div>
          <ul style="list-style: none;">
            <li v-for="country in countries">
              <div style="background-color: lightgrey; padding: 1rem; margin: 1rem; width: 100%; display: inline-flex;">
                <div class="list-element-main-info">
                  <h3>{{ country.name }}</h3>
                  <h5>( Native name: <strong>{{ country.nativeName }}</strong> )</h5>
                  <p> What region you might ask? It is placed in <strong>{{ country.region }}</strong></p>
                  <img class="flag" v-bind:src="country.flag" />
                  <p v-if="country.note">{{country.note}}</p>
                </div>
                <div class="list-element-actions">
                  <v-btn color="warning" class="button" @click="onDialogClick(country.name)">Add note</v-btn>
                  <v-btn color="info" class="button" @click="onMoreInfoClick(country.name)">More info?</v-btn>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </v-layout>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

@Component({
  data() {
        return {
          dialog3: false,
          currentCountryName: '',
          currentNote: ''
        };
    },
  methods: {
      onDialogClick(countryName) {
        this.$data.dialog3 = true;
        this.$data.currentCountryName = countryName;
      },
      onDialogSave() {
        console.log('note: ', this.$data.currentNote)
        this.$data.dialog3 = false;
        this.$store.commit('addNoteToWantToVisit', {name: this.$data.currentCountryName, note: this.$data.currentNote });
        this.$data.currentNote = '';
        this.$data.currentCountryName = '';
      },
      onMoreInfoClick(countryName) {
        this.$router.push({ name: "Country", params: { name: countryName } })
      }
    },
  computed: {
      countries() {
        return this.$store.state.wantToVisitCountries;
      },
      isNoteValid() {
        return this.$data.currentNote.length === 0;
      },
      labelForCurrentCountry() {
        return 'Note for '+this.$data.currentCountryName;
      }
    },
})
export default class Countries extends Vue {}
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
