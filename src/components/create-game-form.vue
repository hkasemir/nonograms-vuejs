<template>
  <div class="form-container">
    <input type="text" v-model="gameName" placeholder="name your nonogram" class="name-input">
    <button @click="makeNew">save nonogram!</button>
  </div>
</template>

<script>
import firebaseService from '../services/firebase-service';

const nonogramsRef = firebaseService.db.ref('nonograms');

export default {
  name: 'create-game-form',
  data() {
    return {
      gameName: '',
    };
  },
  props: ['game'],
  firebase: {
    nonograms: nonogramsRef,
  },
  methods: {
    makeNew(evt) {
      evt.preventDefault();
      nonogramsRef.push({
        name: this.gameName,
        game: this.game,
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 2em 0;
}

.name-input {
  display: block;
  margin: 2em auto;
  padding: 0.3em;
  text-align: center;
}
</style>

