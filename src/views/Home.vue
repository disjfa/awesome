<template>
    <div>
        <div class="container">
            <h1>Home</h1>
            <div v-for="item in all">
                <router-link :to="{name: 'topic', params: {topic: item.topic}}">
                    {{ item.name }}
                </router-link>
                <hr>
            </div>
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
