import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core/index";
import axios from "axios";

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: useStorage('countries', []),
    regions: useStorage('regions', []),
  }),
  getters: {
    getCountries(state) {
      return state.countries
    },
    getRegions(state) {
      return state.regions
    }
  },
  actions: {
    async fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        this.countries = response.data;

        const regions = new Set(this.countries.map(country => country.region));
        this.regions = Array.from(regions);
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
