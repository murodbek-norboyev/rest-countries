<template>
  <v-card @click="goCountryDetailPage">
    <v-img height="200" cover :src="country.flag"></v-img>
    <v-card-title>{{ country.name }}</v-card-title>
    <v-card-text>
      <p class="mb-2"><strong>Population: </strong> {{ country.population }}</p>
      <p class="mb-2"><strong>Region: </strong> {{ country.region }}</p>
      <p class="mb-0"><strong>Capital: </strong> {{ country.capital }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import router from "@/router";

export default {
  props: {
    countryData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const country = props.countryData

    function goCountryDetailPage() {
      router.push({path: `country/${country.alpha3Code}`})
    }

    return {
      country,
      goCountryDetailPage
    }
  }
}
</script>

<style scoped>

</style>
