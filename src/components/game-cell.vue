<template>
  <div
    @click="toggleCell"
    class="cell"
    v-model="filled"
    v-bind:class="{ filled }">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'game-cell',
  props: [
    'rowIndex',
    'cellIndex',
  ],
  computed: {
    ...mapState({
      filled(state) {
        return state.nonogram[this.rowIndex][this.cellIndex] === 1;
      },
    }),
  },
  methods: {
    ...mapActions([
      'updateNonogram',
    ]),
    toggleCell() {
      this.updateNonogram({ rowIndex: this.rowIndex, cellIndex: this.cellIndex });
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

