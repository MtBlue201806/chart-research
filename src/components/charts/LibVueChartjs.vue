<template>
  <div id="chart-js">
    <h2 class="chart-name">Chart.js</h2>
    <chart @on-receive="onClick"/>
    <p>_index: {{ selected.index }}</p>
    <p>_datasetIndex: {{ selected.datasetIndex }}</p>
    <input type="text" v-model="selected.value">
  </div>
</template>

<script>
// chart.jsのvue用ラッパー使う版
import Chart from './vue-chartjs/MixedChart.js'

export default {
  components: {
    Chart
  },
  data() {
    return {
      selected: {}
    }
  },
  methods: {
    onClick(data) {
      this.selected = data
    }
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
