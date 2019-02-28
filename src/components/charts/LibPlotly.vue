<template>
  <div id="plotly">
    <h2 class="chart-name">Plotly.js</h2>
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
  mounted() {
    const chart = this.$refs.chart
    Plotly.plot(
      chart,
      [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16]
        }
      ],
      {
        margin: { t: 0 }
      }
    )
  }
}
</script>

<style scoped>
#plotly {
  margin: 2rem auto;
  width: calc(100vw - 180px - 2rem);
  text-align: center;
}

.chart-name {
  margin: 1rem 0;
}

.chart {
  width: 1000px;
  height: 400px;
}
</style>
