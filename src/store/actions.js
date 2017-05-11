
export default {
  updateNonogram({ commit }, { rowIndex, cellIndex }) {
    console.log(rowIndex, cellIndex);
    commit('UPDATE_NONOGRAM', rowIndex, cellIndex);
  },
};
