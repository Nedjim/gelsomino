<template>
  <div id="app">
    <div class="navbar-header navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#">Le Bonneteau</span>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">1 — Explications</a></li>
            <li ><a href="model.html">2 — Mon Bonneteau</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div class="container">
        <my-bonneteau></my-bonneteau>
      </div>
    </div>
</template>

<script>
import MyBonneteau from './components/MyBonneteau.vue'

export default {
  name: 'app',
  components: { MyBonneteau }
}
</script>
<style>
  body {
    padding-top: 50px;
  }
  .starter-template {
    padding: 40px 15px;
  }
</style>
