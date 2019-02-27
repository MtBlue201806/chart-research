<template>
  <div id="c3">
    <h2 class="chart-name">C3.js</h2>
    <div class="chart" ref="c3"></div>
    <div class="input-container">
      <label class="label" for="text">{{ `${selected.name} / ${selected.x}月分` }}</label>
      <input class="text-input" type="text" v-model="selected.value" @keyup="updateData">
    </div>
  </div>
</template>

<script>
import c3 from 'c3'
import 'c3/c3.min.css'

export default {
  data() {
    return {
      selected: { id: '', index: '', name: '未選択', value: '', x: '未選択' },
      columns: [
        ['費用A', 30, 200, 10, 180, 150, 250],
        ['費用B', 50, -20, 100, -40, -150, 25],
        ['費用C', 100, 200, 100, 250, 300, 200]
      ]
    }
  },
  watch: {},
  methods: {
    getOptions() {
      const data = {
        columns: this.columns,
        groups: [['費用A', '費用B']],
        type: 'bar',
        types: {
          費用C: 'line'
        },
        order: null,
        onclick: d => {
          this.selected = {...d}
          console.log(this.selected)
          console.log(this.columns)
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
    },
    updateData() {
      // const columns = [...this.columns]
      // const name = this.selected.name
      // const targetColumn = columns.find(column => column[0] === name)
      // const targetColumnIndex = columns.findIndex(column => column[0] === name)

      // const [dataId, ...data] = targetColumn
      // data[this.selected.index] = this.selected.value

      // console.log(targetColumnIndex)
      // this.columns = 
      // this.$chart.load({
      //   columns: [[dataId, ...data]]
      // })
    }
  },
  mounted() {
    console.log('mounted')
    const options = this.getOptions()

    this.$chart = c3.generate({
      bindto: this.$refs.c3,
      ...options
    })
  }
}
</script>

<style scoped>
#c3 {
  margin: 2rem auto;
  width: calc(100vw - 180px - 2rem);
}

.chart-name {
  margin: 1rem 0;
  text-align: center;
}

.chart {
  height: 400px;
  margin: 0 auto;
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
