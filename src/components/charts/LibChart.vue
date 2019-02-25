<template>
  <div id="chart-js">
    <h2 class="chart-name">Chart.js</h2>
    <chart></chart>
  </div>
</template>

<script>
import Chart from './vue-chartjs/MixedChart.js'

export default {
  components: {
    Chart
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
