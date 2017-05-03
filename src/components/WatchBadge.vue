<template>
    <a :href="getUrl()">
        <img :src="getImage()" alt="">
    </a>
</template>
<script>
  export default {
    name: 'watch-badge',
    props: ['name'],
    methods: {
      getUrl() {
        return `https://github.com/${this.name}/watchers`;
      },
      getImage() {
        return `https://img.shields.io/github/watchers/${this.name}.svg?style=social`;
      },
    },
  };
</script>
