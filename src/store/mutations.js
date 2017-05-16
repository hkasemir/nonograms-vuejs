import Vue from 'vue';

export default {
  SET_NONOGRAM(state, nonogram) {
    Vue.set(state, 'nonogram', nonogram);
  },
  UPDATE_NONOGRAM(state, { rowIndex, cellIndex }) {
    const nonogram = state.nonogram;
    const cellValue = nonogram[rowIndex][cellIndex];
    nonogram[rowIndex][cellIndex] = cellValue === 1 ? 0 : 1;
    Vue.set(state, 'nonogram', nonogram);
  },
};
