<template>
  <h1>Countries</h1>
  <div v-for="country in countries" :key="country.id">
    <p>{{ country.country }} - {{ country.continent }}</p>
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
