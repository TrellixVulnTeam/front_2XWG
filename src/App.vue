<template>
  <div class="App" data-app>
    <layout-default />
  </div>
</template>

<script>
import LayoutDefault from "@/views/layout/LayoutDefault.vue";

export default {
  name: "App",
  components: {
    LayoutDefault,
  },
};
</script>

<style lang="sass">
.App
  height: 100%
</style>
