<template>
    <a :href="getUrl()">
        <img :src="getImage()" alt="">
    </a>
</template>
<script>
  export default {
    name: 'star-badge',
    props: ['name'],
    methods: {
      getUrl() {
        return `https://github.com/${this.name}/stargazers`;
      },
      getImage() {
        return `https://img.shields.io/github/stars/${this.name}.svg?style=social`;
      },
    },
  };
</script>
