<template>
  <div id="chart-js">
    <h2 class="chart-name">Chart.js</h2>
    <div class="chart-container">
      <canvas ref="canvas"></canvas>
    </div>
    <div v-if="dataSelected">
      <p>label: {{ selected.label }}</p>
      <p>value: {{ selected.value }}</p>
      <input type="text" v-model="selected.value">
    </div>
  </div>
</template>

<script>
// ラッパー使わずにバニラのchart.js使う版
import Chart from 'chart.js'

export default {
  data() {
    return {
      selected: null,
      chartType: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q1-next', 'Q2-next', 'Q3-next'],
        datasets: [
          {
            label: 'hoge費用',
            type: 'line',
            data: [12, -21, 30, 5, 25, 29],
            fill: false,
            backgroundColor: '#C42021',
            borderColor: '#C42021',
            borderWidth: 2
          },
          {
            label: '前期xxx費',
            type: 'bar',
            data: [10, 19, 3, 0, 0, 0],
            backgroundColor: '#008BF8',
            borderColor: '#008BF8',
            borderWidth: 2
          },
          {
            label: '翌期xxx費',
            type: 'bar',
            data: [0, 0, 0, 5, -10, 3],
            backgroundColor: '#070600',
            borderColor: '#070600',
            borderWidth: 2
          },
          {
            label: '前期yyy費用',
            type: 'bar',
            data: [15, 12, -13, 0, 0, 0],
            backgroundColor: '#04E762',
            borderColor: '#04E762',
            borderWidth: 2
          },
          {
            label: '翌期yyy費用',
            type: 'bar',
            data: [0, 0, 0, -25, 5, 9],
            backgroundColor: '#FFA400',
            borderColor: '#FFA400',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        onClick: this.handler
      }
    }
  },
  methods: {
    handler(event) {
      const item = this.chart.getElementAtEvent(event)[0]
      if (item) {
        this.selected = {
          label: this.data.labels[item._index],
          value: this.data.datasets[item._datasetIndex].data[item._index],
          index: item._index,
          datasetIndex: item._datasetIndex
        }
      }
      console.log(this.selected)
    }
  },
  mounted() {
    const { canvas } = this.$refs
    const { fontFamily, chartType: type, data, options } = this
    if (fontFamily) Chart.defaults.global.defaultFontFamily = fontFamily
    this.chart = new Chart(canvas, { type, data, options })
  },
  watch: {
    data(data) {
      const { chart } = this

      if (!data || !chart) return

      chart.data = data
      chart.update()
    },
    selected: {
      handler(newSelected) {
        const copyDatasets = [...this.data.datasets]
        copyDatasets[newSelected.datasetIndex].data[newSelected.index] =
          newSelected.value
        this.data = { ...this.data, datasets: copyDatasets }
      },
      deep: true
    }
  },
  computed: {
    dataSelected: function() {
      if (this.selected !== null) {
        return true
      }
      return false
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

.chart-container {
  width: calc(100vw - 180px - 2rem);
  height: 400px;
}
</style>
