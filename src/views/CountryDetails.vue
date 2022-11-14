<template>
  <div v-if="country">
    <h1>{{ country.name.official }}</h1>
    <h2>{{ country.name.nativeName }}</h2>
    <h3>Region</h3>
    {{ country.region }}
    <h3>Capital</h3>
    {{ country.capital[0] }}
    <h3>Languages</h3>

    {{ country.languages }}

    <h3>Currency</h3>
    {{ country.currencies }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],

  mounted() {
    this.getSingleCountry();
  },
  data() {
    return {
      country: null,
      errors: [],
    };
  },
  methods: {
    getSingleCountry() {
      axios
        .get(`https://restcountries.com/v3.1/alpha?codes=${this.id}`)
        .then((response) => (this.country = response.data[0]))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style></style>
