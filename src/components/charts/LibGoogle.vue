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
        [
          'Month',
          'Bolivia',
          'Ecuador',
          'Madagascar',
          'Papua New Guinea',
          'Rwanda',
          'Average'
        ],
        ['2004/05', 1650, 938, 522, -998, 900, 4000],
        ['2005/06', 600, 1120, -599, 1268, 288, 2082],
        ['2006/07', 957, 1167, 587, 807, 970, 1623],
        ['2007/08', 1139, -1110, -615, 968, 1150, 2000],
        ['2008/09', 1136, 691, -629, 1026, 366, 569]
      ],
      chartOptions: {
        title: 'Monthly Coffee Production by Country',
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } },
        isStacked: true,
        width: 1000,
        height: 400
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
