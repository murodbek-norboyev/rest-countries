// Composables
import {createRouter, createWebHistory} from 'vue-router'
import Countries from "@/views/Countries";
import CountryDetails from "@/views/CountryDetails";

const routes = [
  {
    path: '/',
    component: Countries
  },
  {
    path: '/country/:countryCode',
    props: true,
    component: CountryDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
