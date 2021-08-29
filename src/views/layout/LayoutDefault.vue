<template>
  <main class="LayoutDefault">
    <app-header />
    <router-view />
  </main>
</template>

<script>
import AppHeader from "@/views/app/AppHeader.vue";

export default {
  name: "LayoutDefault",
  components: {
    AppHeader,
  },
};
</script>

<style lang="sass">
.LayoutDefault
  height: 100%
  display: flex
  flex-direction: column
</style>
