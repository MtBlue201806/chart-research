<template>
  <div id="app">
    <v-header/>
    <v-charts/>
  </div>
</template>

<script>
import './styles/reset.css'
import VHeader from './components/VHeader'
import VCharts from './components/VCharts'

export default {
  name: 'chart-research',
  components: {
    VHeader, VCharts
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
</style>
