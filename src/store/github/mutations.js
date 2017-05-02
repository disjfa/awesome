import Vue from 'vue';

export default {
  setupTopic(state, payload) {
    Vue.set(state, 'topic', {
      name: payload.topic,
      items: payload.items,
    });
  },
};
