<template>
  <div>
    clues - {{ position }}
  </div>
</template>

<script>
import nonogramHelper from '../utils/nonogram-helper';

export default {
  name: 'clues',
  data() {
    return {
      clues: nonogramHelper.composeClues(this.game, this.position),
    };
  },
  props: [
    'position',
    'game',
  ],
};
</script>

<style>
</style>

