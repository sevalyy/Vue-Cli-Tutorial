<template>
  <h1>Countries</h1>
  <!-- <div v-for="country in countries" :key="country.id">
    <router-link :to="{ name: 'countryDetails', params: { id: country.id } }">
      <p>{{ country.country }} - {{ country.continent }}</p>
    </router-link>
  </div> -->

  <div v-for="country in countries" :key="country.cca3">
    <router-link :to="{ name: 'countryDetails', params: { id: country.cca3 } }">
      <p>{{ country.name.official }}/{{ country.cca3 }}</p>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.fillCountries();
  },
  data() {
    return {
      countries: [],
      errors: [],
    };
  },
  methods: {
    fillCountries() {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => (this.countries = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
//   data() {
//     return {
//       countries: [
//         { id: 1, country: "Nederland", continent: "Europe" },
//         { id: 2, country: "United States", continent: "America" },
//         { id: 3, country: "New Zealand", continent: "Europe" },
//         { id: 4, country: "Nederland", continent: "Europe" },
//       ],
//     };
//   },
// };
</script>

<style></style>
