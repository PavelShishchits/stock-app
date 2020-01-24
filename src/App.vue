<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>
<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .slide-enter-active {
    animation: slide .35s ease-out;
  }

  .slide-leave-active {
    animation: slide .35s ease-out reverse;
  }

  @keyframes slide {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

</style>
