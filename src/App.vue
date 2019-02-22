<template>
  <div id="app">
    <v-header/>
    <v-main/>
  </div>
</template>

<script>
import 'es6-promise/auto'
import './styles/reset.css'
import VHeader from './components/VHeader'
import VMain from './components/VMain'
import {store} from './store/store.js'

export default {
  store,
  name: 'chart-research',
  components: {
    VHeader, VMain
  }
}
</script>

<style>
:root {
  --primary-color:#2c3e50;
  --secondary-color: #42b983;
}

#app {
  color: var(--primary-color);
}

a, a:visited {
  text-decoration: none;
  color: #495d70;
}
</style>
