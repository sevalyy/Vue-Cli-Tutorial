<template>
  <h1>Countries</h1>
  <div v-for="country in countries" :key="country.id">
    <router-link :to="{ name: 'countryDetails', params: { id: country.id } }">
      <p>{{ country.country }} - {{ country.continent }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        { id: 1, country: "Nederland", continent: "Europe" },
        { id: 2, country: "United States", continent: "America" },
        { id: 3, country: "New Zealand", continent: "Europe" },
        { id: 4, country: "Nederland", continent: "Europe" },
      ],
    };
  },
};
</script>

<style></style>
