<template>
  <div id="shells">
    <div v-for="shell in shells" :key="shell.id" class="shell">
      <shell :id="shell.id" :has-perl="shell.id == perlPosition"></shell>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Shell from './Shell.vue';

export default {
  name: 'MyBonneteau',
  mounted() {
    this.shuffle();
  },
  data() {
    return {
      perlPosition: 0,
      shells: [
        {
          id: 0
        },
        {
          id: 1
        },
        {
          id: 2
        },
      ]
    };
  },
  methods: {
    shuffle() {
      axios.get('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new')
        .then((response) => {
          this.perlPosition = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  components: { Shell }
}
</script>

<style scoped>
#shells {
  width: 100%;
}
.shell {
  width: 33%;
  display: inline-block;
}
</style>
