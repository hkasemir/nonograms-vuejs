<template>
  <div class='board'>
    <div v-for="(row, rowIndex) in game" class="row">
      <game-cell
        v-for="(cell, cellIndex) in row"
        :rowIndex="rowIndex"
        :cellIndex="cellIndex"></game-cell>
    </div>
  </div>
</template>

<script>
import GameCell from './game-cell';

export default {
  name: 'game-board',
  computed: {
    game() {
      return this.$store.state.nonogram;
    },
  },
  components: {
    GameCell,
  },
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
}

.cell {
  width: 1em;
  height: 1em;
  border: 1px solid gray;
}

.filled {
  background-color: black;
}
</style>

