<template>
    <div>
        <div class="bg-inverse text-white py-3">
            <div class="container">
                <h1>{{ topic }}</h1>
            </div>
        </div>
        <div class="container py-3">
            <div v-for="item in topicData.items">
                <h3>{{ item.name }}</h3>
                <p>
                    {{ item.description }}
                    <a :href="item.homepage" v-if="item.homepage">{{ item.homepage }}</a>
                </p>
                <star-badge :name="item.full_name"></star-badge>
                <watch-badge :name="item.full_name"></watch-badge>
                <a :href="item.html_url">
                    <i class="fa fa-github"></i>
                    github
                </a>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
  import StarBadge from './../components/StarBadge';
  import WatchBadge from './../components/WatchBadge';

  export default {
    name: 'topic',
    components: {
      'star-badge': StarBadge,
      'watch-badge': WatchBadge,
    },
    data() {
      return {
        topic: this.$route.params.topic,
      };
    },
    computed: {
      topicData() {
        return this.$store.getters.getTopic({ topic: this.topic });
      },
    },
    mounted() {
      this.$store.dispatch('fetchTopic', this.$route.params.topic);
    },
  };
</script>
