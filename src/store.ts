import Vue from "vue";
import Vuex from "vuex";
import wakanda from '@/assets/wakanda.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    isCountriesLoaded: false,
    visitedCountries: [],
    wantToVisitCountries: []
  },
  mutations: {
    addNoteToWantToVisit(state: any, countryWithNote: any) {
      console.log(countryWithNote)
      //get current country object
      const i: number = state.wantToVisitCountries.findIndex((elem: any) => elem.name === countryWithNote.name);
      //append note to that object
      state.wantToVisitCountries[i].note = countryWithNote.note;
      //happy
    },
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

    /* can remove in future */
    // removeWantToVisit(state: any, name: any) {
    //   state.wantToVisitCountries.filter((item: any) => item.name !== country.name);
    // }
    // removeVisited(state: any, name: any) {
    //   state.wantToVisitCountries.filter((item: any) => item.name !== country.name);
    // }
  },
  getters: {
    getCountries: (state: any) => {
      return state.countries;
    },
    getCountryByName: (state: any) => (name: string) => {
      console.log(state.countries.filter((country: any) => country.name === name));
      return state.countries.filter((country: any) => country.name === name);
    }
  }
});
