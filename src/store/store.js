import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    chartType: 'apex'
  },
  mutations: {
    updateChartType(state, chartType) {
      state.chartType = chartType
    }
  },
  actions: {
    updateChartType ({ commit }, chartType) {
      commit('updateChartType', chartType)
    }
  },
  getters: {
    chartType: state => state.chartType
  }
})
