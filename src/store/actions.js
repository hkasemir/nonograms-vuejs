
export default {
  setNonogram({ commit }, { nonogram }) {
    commit('SET_NONOGRAM', nonogram);
  },
  updateNonogram({ commit }, { rowIndex, cellIndex }) {
    commit('UPDATE_NONOGRAM', { rowIndex, cellIndex });
  },
};
