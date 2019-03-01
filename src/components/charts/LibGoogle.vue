<template>
  <div id="google-chart">
    <h2 class="chart-name">Google Chart</h2>
    <g-chart type="ColumnChart" :settings="settings" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
    }
  },
  computed: {
    settings() {
      return {
        packages: ['corechart', 'table', 'map']
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
#google-chart {
  margin: 2rem auto;
  width: calc(100vw - 180px - 2rem);
  text-align: center;
}

.chart-name {
  margin: 1rem 0;
}
</style>
