<template>
  <div :class="[opened ? 'opened' : 'closed', 'AppDataCard']">
    <button class="AppDataCard__close" @click="$emit('close')">
      <img
        src="@/assets/images/Close.svg"
        alt="Close"
        class="AppDataCard__closeImg"
      />
    </button>
    {{ $store.state.selectedNodeInformation }}
  </div>
</template>

<script>
export default {
  name: "AppDataCard",
  props: ["opened"],
  emits: ["close"],
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.AppDataCard
  position: absolute
  top: 130px
  width: 400px
  right: 0
  background: #fff
  transition: 0.3s

  &.opened
    opacity: 1

  &.closed
    opacity: 0
    z-index: -1

  &__close
    margin: 6px 6px -1px auto
    display: flex
    background: transparent
    border: none
</style>
