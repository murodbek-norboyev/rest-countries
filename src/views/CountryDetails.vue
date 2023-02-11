<template>
  <v-container>
    <v-row class="mb-12">
      <v-col>
        <v-btn @click="goBack"
               class="text-capitalize">
          <v-icon icon="mdi mdi-chevron-left" class="mr-2"/>
          go back
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="6">
        <v-img :src="country.flag" :alt="country.name"></v-img>
      </v-col>

      <v-col cols="6">
        <h1 class="mb-5">{{ country.name }}</h1>
        <v-row>
          <v-col md="6">
            <span class="text-h6 font-weight-medium">Native Name: </span>
            <span>{{ country.nativeName }}</span>
          </v-col>
          <v-col md="6">
            <span class="text-h6 font-weight-medium">Top Level Domain: </span>
            <span v-for="domain in country.topLevelDomain">{{ domain }}</span>
          </v-col>
          <v-col md="6">
            <span class="text-h6 font-weight-medium">Population: </span>
            <span>{{ population }}</span>
          </v-col>

          <v-col md="6">
            <span class="text-h6 font-weight-medium">Currencies: </span>
            <span>{{ currencies }}</span>
          </v-col>

          <v-col md="6">
            <span class="text-h6 font-weight-medium">Region: </span>
            <span>{{ country.region }}</span>
          </v-col>

          <v-col md="6">
            <span class="text-h6 font-weight-medium">Languages: </span>
            <span>{{ languages }}</span>
          </v-col>

          <v-col md="6">
            <span class="text-h6 font-weight-medium">Sub Region: </span>
            <span>{{ country.subregion }}</span>
          </v-col>

          <v-col md="6">
            <span class="text-h6 font-weight-medium">Capital: </span>
            <span>{{ country.capital }}</span>
          </v-col>
        </v-row>

        <div class="mt-6">
          <span class="font-weight-medium text-h6">Border Countries: </span>
          <v-btn :to="`/country/${borderCountry}`" v-for="borderCountry in country.borders"
                 :key="borderCountry" v-if="country.borders"
                 class="ma-2">
            {{ borderCountry }}
          </v-btn>
          <v-btn
            variant="flat"
            color="error" v-else>No border countries
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {ref, onMounted, computed, defineProps, onUpdated} from "vue";
import router from "@/router";

const props = defineProps({
  countryCode: {
    type: String,
    required: true
  }
})

const country = ref({})

onMounted(async () => {
  updateCountry()
});

onUpdated(async () => {
  updateCountry()
})
const updateCountry = () => {
  const list = JSON.parse(localStorage.getItem('countries'));
  list.forEach(item => {
    if (item.alpha3Code === props.countryCode) {
      country.value = item
    }
  })
}

const population = computed(() => {
  return String(country.value.population).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    " "
  );
})

const currencies = computed(() => {
  let listCurrencies = [];
  if (country.value.currencies) {
    country.value.currencies.forEach(currency => {
      listCurrencies.push(currency.name)
    })
    return listCurrencies.join(', ')
  }
  return ''
})

const languages = computed(() => {
  let listLanguages = [];
  if (country.value.languages) {
    country.value.languages.forEach(language => {
      listLanguages.push(language.name)
    })
    return listLanguages.join(', ')
  }
  return ''
})

const goBack = () => {
  router.push({path: '/'})
}
</script>
