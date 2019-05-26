import Vue from "vue";
import Vuex from "vuex";
import wakanda from '@/assets/wakanda.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    countries: [],
    isCountriesLoaded: false,
    visitedCountries: [],
    wantToVisitCountries: []
  },
  mutations: {
    changeIsLoaded(state: any, flag: boolean) {
      state.isCountriesLoaded = flag;
    },
    loadCountries(state: any, payload: any []) {
      payload.data.forEach( (item: any )=> state.countries.push(item));
      state.countries.push(wakanda);
      state.wantToVisitCountries.push(wakanda);
    },
    addWantToVisit(state: any, country: any) {
      if(state.wantToVisitCountries.filter((item: any) => item.name === country.name).length > 0) {return;}
      state.wantToVisitCountries.push(country);
    },
    addVisited(state: any, country: any) {
      if(state.visitedCountries.filter((item: any) => item.name === country.name).length > 0) {return;}

      state.visitedCountries.push(country);
    },
    // removeWantToVisit(state: any, name: any) {
    //   state.wantToVisitCountries.push(this.getCountryByName(state, name));
    // }
  },
  getters: {
    getCountries: (state: any) => {
      return state.countries;
    },
    getCountryByName: (state: any, name: string) => {
      return state.countries.filter((country: any) => country.name === name);
    }
  }
});
