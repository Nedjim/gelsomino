<template>
  <div>
    <img @click="select" v-show="!displayPerl" class="shell-img" src="/static/shell.png" alt="">
    <img v-show="displayPerl" class="perl-img" src="/static/pearl.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Shell',
  props: ['id', 'hasPerl'],
  data () {
    return {
      displayPerl: false
    }
  },
  methods: {
    select() {
      if (this.hasPerl) {
        this.displayPerl = true;
        return;
      }

      console.log('loser');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shell-img {
  width: 33%
}
.perl-img {
  width: 33%;
}
</style>
