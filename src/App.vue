<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
