<template>
  <div class="front-page">
    <clues position="top" :game="nonogram"></clues>
    <clues position="side" :game="nonogram"></clues>
    <game-board :game="nonogram"></game-board>
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
.front-page {
 
}
</style>
