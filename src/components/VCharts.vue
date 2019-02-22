<template>
  <div class="charts">
    <component :is="currentChart"></component>
  </div>
</template>

<script>
import LibApex from './charts/LibApexCharts'
import LibChart from './charts/LibChart'
import LibC3 from './charts/LibC3'
import LibPlotly from './charts/LibPlotly'
import LibGoogle from './charts/LibGoogle'

export default {
  name: 'VCharts',
  components: {
  },
  computed: {
    chartType() {
      return this.$store.getters.chartType
    },
    currentChart() {
      const currentChartComponent =  {
        'apex': LibApex,
        'chart': LibChart,
        'c3': LibC3,
        'plotly': LibPlotly,
        'google': LibGoogle
      }[this.chartType]
      return currentChartComponent
    }
  }
}
</script>

<style scoped>
</style>
