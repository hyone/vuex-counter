<template>
  <div id="app" class="has-text-centered">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ count }}</h1>
        </div>
      </div>
    </section>
    <section>
      <button class="button" @click="increment">+</button>
      <button class="button" @click="decrement">-</button>
      <button class="button" @click="set(count + 5)" :disabled="!isEven">
        +5 when even
      </button>
      <button class="button" @click="incrementAsync" :class="{ 'is-loading': loading }">
        + (Async)
      </button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import store from './store';

export default {
  name: 'app',

  computed: {
    ...mapState(['count', 'loading']),
    ...mapGetters(['isEven']),
  },

  methods: {
    ...mapMutations({
      set: 'setCount' // map `this.set()` to `this.$store.commit('setCount', ...)`
    }),
    ...mapActions([
      'increment', 'decrement', 'incrementAsync'
    ])
  }
}
</script>