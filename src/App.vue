<template>
  <div id="app">
    <nonogram-container></nonogram-container>
  </div>
</template>

<script>
import vueFire from 'vuefire';
import Vue from 'vue';
import NonogramContainer from './components/nonogram-container';
import store from './store';

Vue.use(vueFire);

export default {
  name: 'app',
  store,
  components: {
    NonogramContainer,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
