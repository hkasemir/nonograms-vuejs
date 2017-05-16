<template>
  <div class="presentation">
    <div class="center">
      <div class="game-container">
        <clues position="top"></clues>
        <div class="game-and-side-clues">
          <clues position="side"></clues>
          <game-board></game-board>
        </div>
      </div>
    </div>
    <select v-model="boardSize" class="board-size-selector" @change="updateBoardSize">
      <option v-for="option in boardSizeOptions">{{ option }}</option>
    </select>
    <create-game-form></create-game-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import firebaseService from '../services/firebase-service';
import Clues from './clues';
import GameBoard from './game-board';
import CreateGameForm from './create-game-form';
import nonogramHelper from '../utils/nonogram-helper';

const nonogramsRef = firebaseService.db.ref('nonograms');
const defaultBoardSize = '5x5';

export default {
  name: 'nonogram-container',
  data() {
    return {
      boardSize: defaultBoardSize,
      boardSizeOptions: nonogramHelper.getBoardSizeOptions(),
    };
  },
  firebase: {
    nonograms: nonogramsRef,
  },
  created() {
    this.setNonogram({ nonogram: nonogramHelper.createBlankBoard('5x5') });
  },
  components: {
    Clues,
    GameBoard,
    CreateGameForm,
  },
  methods: {
    ...mapActions([
      'setNonogram',
    ]),
    updateBoardSize(evt) {
      this.setNonogram({ nonogram: nonogramHelper.createBlankBoard(evt.target.value) });
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
