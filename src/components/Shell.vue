<template>
  <div>
    <img @click="select" v-show="displayShell && !displayPearl" class="shell-img" src="/static/shell.png" alt="">
    <img v-show="displayPearl" class="pearl-img" src="/static/pearl.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Shell',
  props: ['id', 'hasPearl'],
  data () {
    return {
      displayShell: true
    };
  },
  methods: {
    select() {
      this.displayShell = false;

      if (this.hasPearl) {
        this.$emit('endGame', 'win');
        return;
      }

      this.$emit('endGame', 'lost');
    }
  },
  computed: {
    displayPearl() {
      return this.hasPearl && !this.displayShell;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shell-img {
  width: 100%;
}
.pearl-img {
  width: 100%;
}
.shell-container {
  display: inline-block;
}
</style>
