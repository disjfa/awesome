export default {
  fetchTopic(state, topic) {
    fetch(`https://api.github.com/search/repositories?q=topic:${topic}`, { method: 'GET' }).then((res) => {
      res.json().then((json) => {
        state.commit('setupTopic', { topic, json });
      });
    });
  },
};
