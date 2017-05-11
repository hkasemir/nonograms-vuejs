<template>
  <div class="center">
    <div class="game-container">
      <clues position="top" :game="nonogram"></clues>
      <div class="game-and-side-clues">
        <clues position="side" :game="nonogram"></clues>
        <game-board :game="nonogram"></game-board>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseService from '../services/firebase-service';
import Clues from './clues';
import GameBoard from './game-board';

const nonogramsRef = firebaseService.db.ref('nonograms');

const nonogram = [
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
];

export default {
  name: 'nonogram-container',
  data() {
    return {
      testInput: '',
      nonogram,
    };
  },
  firebase: {
    nonograms: nonogramsRef,
  },
  methods: {
    makeNew(evt) {
      evt.preventDefault();
      nonogramsRef.push({
        text: this.testInput,
      });
      this.testInput = '';
    },
  },
  components: {
    Clues,
    GameBoard,
  },
};
</script>

<style scoped>
.center {
  display: inline-block;
  margin: auto;
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.game-and-side-clues {
  display: flex;
}
</style>
