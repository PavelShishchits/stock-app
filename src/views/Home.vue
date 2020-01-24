<template>
  <div class="jumbotron">
    <h1 class="display-4">Trade or View your portfolio</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p><b>Your funds: </b>{{ amount | formatPrice }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'amount'
    ])
  }
}
</script>
