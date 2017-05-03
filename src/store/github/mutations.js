import Vue from 'vue';

export default {
  setupTopic(state, payload) {
    Vue.set(state, 'topic', {
      name: payload.topic,
      total_count: payload.json.total_count,
      incomplete_results: payload.json.incomplete_results,
      items: payload.json.items,
    });
  },
};
