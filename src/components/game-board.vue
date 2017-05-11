<template>
  <div class='board'>
    <div v-for="(row, rowIndex) in game" class="row">
      <game-cell
        v-for="(cell, cellIndex) in row"
        :filled="cell" @update:filled="updateNonogram({ rowIndex, cellIndex })"></game-cell>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import GameCell from './game-cell';

export default {
  name: 'game-board',
  props: [
    'game',
  ],
  components: {
    GameCell,
  },
  methods: {
    ...mapActions([
      'updateNonogram',
    ]),
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

