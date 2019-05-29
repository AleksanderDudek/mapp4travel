import Vue from 'vue';
import Vuex from 'vuex';
import wakanda from '@/assets/wakanda.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    isCountriesLoaded: false,
    visitedCountries: [],
    wantToVisitCountries: [],
  },
  mutations: {
    addNoteToWantToVisit(state: any, countryWithNote: any) {
      const i: number = state.wantToVisitCountries.findIndex((elem: any) => elem.name === countryWithNote.name);
      state.wantToVisitCountries[i].note = countryWithNote.note;
    },
    addNoteToVisited(state: any, countryWithNote: any) {
      const i: number = state.visitedCountries.findIndex((elem: any) => elem.name === countryWithNote.name);
      state.visitedCountries[i].note = countryWithNote.note;
    },
    changeIsLoaded(state: any, flag: boolean) {
      state.isCountriesLoaded = flag;
    },
    loadCountries(state: any, payload: any []) {
      payload.data.forEach((item: any) => state.countries.push(item));
      state.countries.push(wakanda);
      state.wantToVisitCountries.push(wakanda);
    },
    addWantToVisit(state: any, country: any) {
      if (state.wantToVisitCountries.filter((item: any) => item.name === country.name).length > 0) { return; }
      state.wantToVisitCountries.push(country);
    },
    addVisited(state: any, country: any) {
      if (state.visitedCountries.filter((item: any) => item.name === country.name).length > 0) { return; }

      state.visitedCountries.push(country);
    },
  },
  getters: {
    getCountryByName: (state: any) => (name: string) => state.countries.filter((country: any) => country.name === name),
    getVisitedByName: (state: any) => (name: string) => {
      const temp: any [] = state.visitedCountries.filter((country: any) => country.name === name);
      return temp || [];
    },
    getWantToVisitByName: (state: any) => (name: string) => {
      const temp: any [] = state.wantToVisitCountries.filter((country: any) => country.name === name);
      return temp || [];
    },
  },
});
