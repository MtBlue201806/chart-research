<template>
  <div class="charts">
    <component :is="currentChart"></component>
  </div>
</template>

<script>
import Apex from './charts/LibApexCharts'

export default {
  name: 'VCharts',
  components: {
    Apex
  },
  computed: {
    chartType() {
      return this.$store.getters.chartType
    },
    currentChart() {
      return Apex
    }
  }
}
</script>

<style scoped>
</style>
