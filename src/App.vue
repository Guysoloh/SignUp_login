<template>
  <div id="q-app">
    <div class="hello">
      <WelcomeMessage />
      <router-view />
    </div>
  </div>
</template>
<script>
import WelcomeMessage from "layouts/main.vue";
export default {
  name: "App",
  components: { WelcomeMessage }
};
</script>
<style scoped>
.hello {
  align-items: center;
  margin-top: 0%;
  padding-top: 0%;
}
#q-app {
  margin-top: 0px;
}
</style>