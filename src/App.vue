<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld msg="Welcome to the Vue World" />
  <h3>Using Ref in Vue</h3>
  <input type="text" ref="name" />
  <input type="text" ref="password" />
  <button @click="handleClick">Click</button>
  <br />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name.value, "name's value");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
