<template>
  <div id="plotly">
    <h2 class="chart-name">Plotly.js</h2>
    <div id="chart" ref="chart"></div>
    <div class="input-container" v-if="currentData.selected">
      <label class="label" for="text">{{ `${currentData.name} / ${currentData.x}` }}</label>
      <input class="text-input" type="text" v-model="currentData.y" @keyup="update">
    </div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'
import _clonedeep from 'lodash.clonedeep'

export default {
  data() {
    return {
      currentData: { selected: false },
      data: [
        {
          x: [
            'Q1',
            'Q2',
            'Q3',
            'Q4',
            'Q1-next',
            'Q2-next',
            'Q3-next',
            'Q4-next'
          ],
          y: [50, 150, 200, -200, -150, 100, 150, 100],
          name: 'a費用',
          type: 'bar'
        },
        {
          x: [
            'Q1',
            'Q2',
            'Q3',
            'Q4',
            'Q1-next',
            'Q2-next',
            'Q3-next',
            'Q4-next'
          ],
          y: [50, 50, -50, 100, 200, -150, 100, 150],
          name: 'b費用',
          type: 'bar'
        },
        {
          x: [
            'Q1',
            'Q2',
            'Q3',
            'Q4',
            'Q1-next',
            'Q2-next',
            'Q3-next',
            'Q4-next'
          ],
          y: [100, 200, 430, 200, -200, 0, 150, 250],
          name: 'c費用',
          type: 'scatter'
        }
      ]
    }
  },
  mounted() {
    const data = this.data

    const layout = { barmode: 'relative', hovermode: 'closest' }

    const chart = this.$refs.chart
    Plotly.plot(chart, data, layout, { showLink: true })

    const _this = this

    chart.on('plotly_click', function(item) {
      const clone = _clonedeep(item)
      const { pointNumber, curveNumber, x, y, data } = clone.points[0]

      _this.currentData = {
        pointNumber,
        traceNumber: curveNumber,
        x,
        y,
        name: data.name,
        selected: true
      }
    })
  },
  methods: {
    update() {
      const { pointNumber, traceNumber, y } = { ...this.currentData }
      const chart = this.$refs.chart
      const layout = { barmode: 'relative', hovermode: 'closest' }

      const data = _clonedeep(this.data)
      data[traceNumber].y[pointNumber] = y
      this.data = data

      Plotly.react(chart, data, layout, { showLink: true })
    }
  }
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

input,
label {
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

.input-container {
  margin: 25px 0;
  padding: 10px 5px;
  text-align: center;
}

.text-input {
  display: inline-block;
  width: 200px;
  height: 40px;
  padding: 10px;
  outline: none;
  border: none;
  border: 1px solid #838383;
  border-radius: 10px;
  font-size: 1rem;
}

.label {
  margin-right: 1rem;
}
</style>
