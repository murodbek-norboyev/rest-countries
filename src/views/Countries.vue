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
          solo>
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

<script setup>
import {ref, onMounted, computed} from "vue";
import CountryCard from "@/components/CountryCard";
import {useCountriesStore} from "@/store/countries";

const store = useCountriesStore();
const selectedRegion = ref('');
const searchTerm = ref('');
const countries = computed(() => store.countries);
const regions = computed(() => store.regions);
onMounted(async () => {
  store.fetchCountries()
});

const filteredCountries = computed(() => {
  return countries.value.filter(country => {
    return (
      country.region.toLowerCase().includes(selectedRegion.value.toLowerCase()) &&
      country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });
});
</script>
