export default {
  allItems: state => state.all,
  getTopic: (state, aa, bb, cc) => {
    console.log(aa, bb, cc);
    return state.topic;
  },
};
