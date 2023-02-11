<template>
  <v-app-bar app>
    <v-app-bar-title @click="goBack()" role="button">Where in the world?</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="toggleDark">
      <v-icon icon="mdi mdi-weather-sunny" v-if="!darkMode"></v-icon>
      <v-icon icon="mdi mdi-weather-night" v-else></v-icon>
      <span class="ml-2">
        {{ !darkMode ? 'Dark Mode' : 'Light Mode' }}</span
      >
    </v-btn>
  </v-app-bar>
</template>

<script>
import router from "@/router";
import {useTheme} from "vuetify";
import {ref} from "vue";

export default {
  setup() {
    const theme = useTheme()
    const darkMode = ref(Boolean)

    const goBack = () => {
      router.push({path: '/'})
    }

    const toggleDark = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      darkMode.value = theme.global.current.value.dark
    }

    return {
      goBack,
      toggleDark,
      darkMode
    }
  }
}
</script>
