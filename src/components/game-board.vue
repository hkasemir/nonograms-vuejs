<template>
  <div class='board'>
    <div v-for="row in game" class="row">
      <div v-for="cell in row" class="cell" v-bind:class="{ filled: cell === 1 }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game-board',
  props: [
    'game',
  ],
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

