<template>
  <div id="plotly">
    <h2 class="chart-name">Plotly.js</h2>
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'
import _clonedeep from 'lodash.clonedeep'

export default {
  mounted() {
    const trace1 = {
      x: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1-next', 'Q2-next', 'Q3-next', 'Q4-next'],
      y: [50, 150, 200, -200, -150, 100, 150, 100],
      name: 'a費用',
      type: 'bar'
    }

    const trace2 = {
      x: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1-next', 'Q2-next', 'Q3-next', 'Q4-next'],
      y: [50, 50, -50, 100, 200, -150, 100, 150],
      name: 'b費用',
      type: 'bar'
    }

    const trace3 = {
      x: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1-next', 'Q2-next', 'Q3-next', 'Q4-next'],
      y: [100, 200, 430, 200, -200, 0, 150, 250],
      name: 'c費用',
      type: 'scatter'
    }

    const data = [trace1, trace2, trace3]

    const layout = { barmode: 'relative', hovermode: 'closest' }

    const chart = this.$refs.chart
    Plotly.plot(chart, data, layout, { showLink: true })

    chart.on('plotly_click', function(item) {
      const clone = _clonedeep(item)
      const { pointNumber, curveNumber, x, y, data } = clone.points[0]

      console.log(clone)
      console.log(`pointNumber: ${pointNumber}`)
      console.log(`traceNumber: ${curveNumber}`)
      console.log(`x: ${x}`)
      console.log(`y: ${y}`)
      console.log(data)
    })
  },
  methods: {}
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
