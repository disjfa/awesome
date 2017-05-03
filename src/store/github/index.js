import getters from './getters';
import actions from './actions';
import mutations from './mutations';

// initial state
const state = {
  all: [{
    topic: 'vue-template',
    name: 'Vue templates',
  }, {
    topic: 'bootstrap',
    name: 'Bootstrap',
  }],
  topic: {
    name: '',
    items: {},
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
