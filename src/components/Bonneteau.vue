<template>
<div id="mon-bonneteau">
  <h1>Mon bonneteau...à vous de jouer</h1>

  <button v-if="!playing" @click="getRandom">Jouer</button>
  <button v-else @click.prevent="getRandom">Recommencer</button>

  <div id="plateau">
    <div class="left">
      <img class="shell" :class="{ selected: random === 0 }" src="../assets/shell.png" alt="shell" >
      <img class="pearl" v-show="random === 0" src="../assets/pearl.png" alt="pearl">
    </div>
    <div class="middle">
      <img class="shell" :class="{ selected: random === 1 }" src="../assets/shell.png" alt="shell" >
      <img class="pearl" v-show="random === 1" src="../assets/pearl.png" alt="pearl">
    </div>
    <div class="right">
      <img class="shell" :class="{ selected: random === 2 }" src="../assets/shell.png" alt="shell" >
      <img class="pearl" v-show="random === 2" src="../assets/pearl.png" alt="pearl">
    </div>
  </div>
  <p v-show="playing">Où se trouve la perle?</p>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bonneteau',
  data() {
    return {
      random: null,
      playing: false,
      showPearl: false,
    }
  },
  methods: {
    getRandom() {
      const url = 'https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new'
      axios.get(url).then((response) => {
        this.random = response.data
        this.playing = true,
        this.showPearl = true
      })
      setTimeout(() => {
        console.log('okkk')
        this.showPearl = false
      }, 3000);
    },
  },
}
</script>
<style lang="scss" src="../style/index.scss">

</style>
