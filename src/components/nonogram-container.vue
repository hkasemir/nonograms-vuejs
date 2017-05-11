<template>
  <div class="presentation">
    <div class="center">
      <div class="game-container">
        <clues position="top" :game="nonogram"></clues>
        <div class="game-and-side-clues">
          <clues position="side" :game="nonogram"></clues>
          <game-board :game.sync="nonogram"></game-board>
        </div>
      </div>
    </div>
    <select v-model="boardSize" class="board-size-selector" @change="updateBoardSize">
      <option v-for="option in boardSizeOptions">{{ option }}</option>
    </select>
    <create-game-form :game="nonogram"></create-game-form>
  </div>
</template>

<script>
import firebaseService from '../services/firebase-service';
import Clues from './clues';
import GameBoard from './game-board';
import CreateGameForm from './create-game-form';
import nonogramHelper from '../utils/nonogram-helper';
import store from '../store';

const nonogramsRef = firebaseService.db.ref('nonograms');
const defaultBoardSize = '5x5';

const nonogram = [
  [1, 0, 1],
  [0, 1, 0],
];

export default {
  name: 'nonogram-container',
  store,
  data() {
    return {
      boardSize: defaultBoardSize,
      nonogram,
      boardSizeOptions: nonogramHelper.getBoardSizeOptions(),
    };
  },
  firebase: {
    nonograms: nonogramsRef,
  },
  components: {
    Clues,
    GameBoard,
    CreateGameForm,
  },
  methods: {
    updateBoardSize(evt) {
      this.nonogram = nonogramHelper.createBlankBoard(evt.target.value);
    },
  },
};
</script>

<style scoped>
.presentation {
  display: flex;
  align-items: center;
  flex-direction: column;
}

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

.board-size-selector {
  width: 10em;
  margin-top: 2em;
}
</style>
