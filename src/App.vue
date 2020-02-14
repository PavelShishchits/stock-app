<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <transition name="slide" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('auth/autoLogIn');
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

  .fade-enter-active {
    transition: opacity .5s ease-out;
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity .5s ease-out;
    opacity: 0;
    position: absolute;
    width: 100%;
  }

  .fade-move {
    transition: transform .5s ease-out;
  }

</style>
