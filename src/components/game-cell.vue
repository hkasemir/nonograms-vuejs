<template>
  <div
    @click="toggleCell"
    class="cell"
    v-bind:class="{ filled: filled === 1 }">
  </div>
</template>

<script>
export default {
  name: 'game-cell',
  props: [
    'filled',
  ],
  methods: {
    toggleCell() {
      this.$emit('update:filled');
    },
  },
};
</script>

<style scoped>
.cell {
  width: 1em;
  height: 1em;
  border: 1px solid gray;
}

.filled {
  background-color: black;
}
</style>

