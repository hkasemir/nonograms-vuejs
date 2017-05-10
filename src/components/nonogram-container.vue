<template>
  <div>
    <form @submit="makeNew">
      <input
        type="text"
        v-model="testInput"
        autofocus
        class="inp">
      <input type="submit">
    </form>
    <ul>
      <li v-for="input in nonograms">{{ input.text }}</li>
    </ul>
  </div>
</template>

<script>
import firebaseService from '../services/firebase-service';

const nonogramsRef = firebaseService.db.ref('nonograms');

export default {
  name: 'nonogram-container',
  data() {
    return {
      testInput: '',
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
};
</script>

<style scoped>
.inp {
  text-align: center;
  padding: 0.6em;
  font-size: 1.6em;
}
</style>
