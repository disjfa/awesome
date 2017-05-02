<template>
    <div>
        Hewllo word
        <div v-for="item in all">
            {{ item }}
            <router-link :to="{name: 'topic', params: {topic: item.topic}}">
                Hello worasdasd
            </router-link>
            aa
        </div>
    </div>
</template>
<script>
  export default {
    name: 'home',
    computed: {
      all() {
        return this.$store.getters.allItems;
      },
    },
  };
</script>
