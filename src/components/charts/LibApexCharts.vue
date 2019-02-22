<template>
  <div class="apex-charts">
    <h2 class="chart-name">ApexCharts</h2>
    <ApexCharts type="bar" width="100%" height="350" :options="options" :series="series"/>
    <div v-if="dataSelected">
      <input type="text" v-model="selected.value">
    </div>
  </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts'

export default {
  data: function() {
    return {
      selected: null,
      series: [
        {
          name: 'data-1',
          data: [4, 6, 3, 2]
        },
        {
          name: 'data-2',
          data: [3, 1, 2, 5]
        }
      ]
    }
  },
  computed: {
    dataSelected: function() {
      if (this.selected !== null) {
        return true
      }
      return false
    },
    options: function() {
      return {
        chart: {
          stacked: true,
          events: {
            dataPointSelection: (event, context, opts) => {
              console.log(
                this.series[opts.seriesIndex].data[opts.dataPointIndex]
              )
              this.updateSelected(opts)
            }
          }
        },
        xaxis: {
          categories: ['2019/01/01', '2019/02/01', '2019/03/01', '2019/04/01']
        }
      }
    }
  },
  methods: {
    updateSelected(opts) {
      this.selected = {
        value: this.series[opts.seriesIndex].data[opts.dataPointIndex],
        seriesIndex: opts.seriesIndex,
        dataPointIndex: opts.dataPointIndex
      }
    }
  },
  watch: {
    selected: {
      handler(newSelected) {
        if (newSelected !== null) {
          const seriesCopy = this.series.concat()
          seriesCopy[newSelected.seriesIndex].data[
            newSelected.dataPointIndex
          ] = this.selected.value
          this.series = seriesCopy
          console.log(newSelected)
        }
      },
      deep: true
    }
  },
  components: {
    ApexCharts
  }
}
</script>

<style scoped>
.apex-charts {
  margin: 2rem auto;
  width: 900px;
  text-align: center;
}

.chart-name {
  margin: 1rem 0;
}
</style>
