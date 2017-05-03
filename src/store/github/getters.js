export default {
  allItems: state => state.all,
  getTopic: state => (payload) => {
    if (payload.topic === state.topic.name) {
      return state.topic;
    }
    return {};
  },
};
