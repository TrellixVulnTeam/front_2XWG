<template>
  <div class="ManagementStructureGraph">
    <div id="org-chart-container"></div>
    <button class="ManagementStructureGraph__reloadButton" @click="reloadGraph">
      Reload
    </button>
  </div>
</template>

<script>
import OrgChart from "@/graph/org-chart";

export default {
  name: "ManagementStructureGraph",
  emits: ["open"],
  data() {
    return {
      data: null,
      orgChart: null,
      selectedNodeId: null,
    };
  },
  created() {
    this.reloadGraph();
  },
  mounted() {
    this.orgChart = new OrgChart(this.setSelectedNodeId);
  },
  methods: {
    reloadGraph() {
      this.$store.dispatch("getGraphStructure");
      setTimeout(() => {
        this.data = this.$store.state.graphStructure;
        this.orgChart.draw(this.data.objects[0]);
      }, 500);
    },
    setSelectedNodeId(id) {
      this.$emit("open");
      this.$store.dispatch("getDataCard", id);
    },
  },
};
</script>
<style lang="sass">
@import "~@/assets/styles/components/button.mixin"

.ManagementStructureGraph
  height: 100%

  &__reloadButton
    position: absolute
    bottom: 20px
    left: 20px
    @include button(5px, 20px, 8px, #096DD9, #007BFF)
    font-size: 14px
    font-weight: 500

#org-chart-container
  overflow: hidden
  height: 100%
  background-color: $graph-background-color
</style>
