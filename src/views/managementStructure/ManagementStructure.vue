<template>
  <div class="ManagementStructure">
    <management-structure-graph @open="opened = true" />
    <app-data-card :opened="opened" @close="opened = false" />
  </div>
</template>

<script>
import ManagementStructureGraph from "@/views/managementStructure/ManagementStructureGraph";
import AppDataCard from "@/views/app/AppDataCard";

export default {
  name: "ManagementStructure",
  data() {
    return {
      opened: false,
    };
  },
  components: {
    ManagementStructureGraph,
    AppDataCard
  },
}
</script>

<style lang="sass">
.ManagementStructure
  overflow: hidden
</style>
