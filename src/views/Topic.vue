<template>
    <div>
        topic
        {{topic}}
    </div>
</template>
<script>
  export default {
    name: 'topic',
    computed: {
      topic() {
        return this.$store.getters.getTopic({'aa': 'bb'});
      },
    },
    mounted() {
      this.$store.dispatch('fetchTopic', this.$route.params.topic);
    },
  };
</script>
