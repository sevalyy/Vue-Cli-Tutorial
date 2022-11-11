<template>
  <img alt="Vue logo" src="../assets/logo.png" />

  <HelloWorld msg="Welcome to the Vue World" />
  <h3>Using Ref in Vue</h3>
  <input type="text" ref="name" />
  <input type="text" ref="password" />
  <button @click="handleClick">Click</button>
  <br />
  <hr />
  <br />

  <FormExample />
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import FormExample from "../components/FormExample.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FormExample,
  },
  data() {
    return {
      currentUser: "Welcome Seval",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value, "name's value");
    },
  },
};
</script>
