<template>
  <div>
    <h3>Data Binding</h3>
    <form>
      <label>Write your email here: </label>
      <input type="email" v-model="email" />
      <p>Your Email: {{ email }}</p>
    </form>
    <label>Select Job Position: </label>
    <select v-model="position">
      <option>Frontend Developer</option>
      <option>Backend Developer</option>
      <option>Data Scientist</option>
    </select>
    <p>Selected Position: {{ position }}</p>
    <label>I accept term and conditions! </label>
    <input type="checkbox" v-model="agreement" />

    <p>{{ agreement ? "Accepted" : "not Accepted" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      position: "",
      agreement: false,
    };
  },
};
</script>

<style></style>
