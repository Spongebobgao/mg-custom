<template>
  <div class="home">
    <img alt="mg-custom logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to MG-CUSTOM" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
