<template>
  <div id="c3">
    <h2 class="chart-name">C3.js</h2>
    <div class="chart" ref="c3"></div>
  </div>
</template>

<script>
import c3 from 'c3'
import 'c3/c3.min.css'

export default {
  watch: {},
  methods: {
    getArgs() {
      const data = {
        columns: [
          ['data1', 30, 200, 10, 180, 150, 250],
          ['data2', 50, 20, 100, 40, 150, 25],
          ['data3', 100, 200, 100, 250, 300, 200]
        ],
        groups: [
            ['data1','data2']
        ],
        colors: {
          data1: '#ff0000',
          data2: '#00ff00',
          data3: '#0000ff'
        },
        type: 'bar',
        types: {
          data3: 'line'
        }
      }

      return { data }
    }
  },
  mounted() {
    const args = this.getArgs()

    this.$chart = c3.generate({
      bindto: this.$refs.c3,
      ...args
    })
  }
}
</script>

<style scoped>
#c3 {
  margin: 2rem auto;
  width: calc(100vw - 180px - 2rem);
  text-align: center;
}

.chart-name {
  margin: 1rem 0;
}

.chart {
  height: 400px;
}
</style>
