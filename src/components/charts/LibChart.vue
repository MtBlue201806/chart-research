<template>
  <div id="chart-js">
    <h2 class="chart-name">Chart.js</h2>
    <line-chart></line-chart>
  </div>
</template>

<script>
import LineChart from './vue-chartjs/LineChart.js'

export default {
  components: {
    LineChart
  }
}
</script>

<style scoped>
#chart-js {
  margin: 2rem auto;
  width: calc(100vw - 180px - 2rem);
  text-align: center;
}

.chart-name {
  margin: 1rem 0;
}
</style>
