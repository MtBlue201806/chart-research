import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  methods: {
    handler: (event, items) => {
      console.log(items)
      // const index = el._index
      // const datasetIndex = el._datasetIndex
      // this.$emit('on-receive', {index, datasetIndex})
    }
  },
  data() {
    return {
      options: {
        tooltips: {
          mode: 'dataset'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        onClick: this.handler
      },
      data: {
        labels: ["Q1", "Q2", "Q3", "Q1-next", "Q2-next", "Q3-next"],
        datasets: [
          {
            label: 'yyy費用',
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
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
