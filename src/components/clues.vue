<template>
  <div class="clues-container" v-bind:class="position">
    <div
      class="clues-box"
        v-bind:class="{ column: position === 'top', row: position === 'side' }"
        v-for="clues in cluesArray">
      <p v-for="consecutive in clues">
        {{ consecutive }}
      </p>
    </div>
  </div>
</template>

<script>
import nonogramHelper from '../utils/nonogram-helper';

export default {
  name: 'clues',
  data() {
    return {
      cluesArray: nonogramHelper.composeClues(this.game, this.position),
    };
  },
  props: [
    'position',
    'game',
  ],
};
</script>

<style scoped>
.top {
  display: flex;
}

.side {
  display: inline-block;
}

.clues-box {
  border: 1px solid gray;
}

.row {
  display: flex;
}

.clues-box p {
  margin: 0;
  display: block;
  height: 1em;
  width: 1em;
}
</style>

