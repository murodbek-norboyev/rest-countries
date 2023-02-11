<template>
  <v-container>
    <v-row justify="space-between" class="mt-10 mb-5">
      <v-col
        cols="12"
        sm="6"
        md="4">
        <v-text-field
          label="Search countries"
          v-model="searchTerm"
          solo
          clearable>
        </v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3">
        <v-select
          label="Select region"
          v-model="selectedRegion"
          :items="regions"
          clearable
          solo>
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" lg="3" v-for="country in filteredCountries" :key="country.alpha3Code">
          <CountryCard :countryData="country"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ref, onMounted, computed} from "vue";
import axios from 'axios'
import CountryCard from "@/components/CountryCard";

export default {
  components: {CountryCard},
  setup() {
    const countries = ref([]);
    const selectedRegion = ref('');
    const searchTerm = ref('');

    onMounted(async () => {
      const response = await axios.get('https://restcountries.com/v2/all');
      countries.value = response.data;
    });

    const filteredCountries = computed(() => {
      return countries.value.filter(country => {
        return (
          country.region.toLowerCase().includes(selectedRegion.value.toLowerCase()) &&
          country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });
    });

    const regions = computed(() => {
      return [...new Set(countries.value.map(country => country.region))].sort();
    });

    return {
      countries,
      selectedRegion,
      searchTerm,
      filteredCountries,
      regions
    };
  }
};
</script>
