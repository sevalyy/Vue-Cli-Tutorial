<template>
  <div class="main">
    <a>{{ currentUser }}</a>

    <!-- you can write just path or use name of the route -->
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/countries">Countries</router-link>
  </div>
</template>

<script>
export default {
  props: ["currentUser"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(80, 193, 156);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2em;
  border: 2px solid rgb(47, 47, 73);
}
a {
  margin: 10px;
}
</style>
