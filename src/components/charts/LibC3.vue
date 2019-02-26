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
          ['費用A', 30, 200, 10, 180, 150, 250],
          ['費用B', 50, -20, 100, -40, -150, 25],
          ['費用C', 100, 200, 100, 250, 300, 200]
        ],
        groups: [['費用A', '費用B']],
        type: 'bar',
        types: {
          費用C: 'line'
        }
      }

      const grid = {
        x: {
          show: true
        },
        y: {
          show: true
        }
      }

      return {
        data,
        grid
      }
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
