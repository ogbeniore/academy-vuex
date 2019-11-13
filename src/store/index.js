import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hello: 'Hello from the store',
    appName: `Oreoluwa's App`,
    priceList: [
      {
        name: 'rice',
        price: 1000
      },
      {
        name: 'beans',
        price : 2000,
      },
      {
        name: 'meat',
        price: 500
      }
    ],
    number: 1
  },
  getters: {
    getAppName: state => state.appName,
    getPriceList: state => state.priceList,
    hello: state => state.hello,
    myNumber: state => state.number
  },
  mutations: {
    multiplyNumber(state) {
      state.number = state.number * 5
    },
    addItem(state, payload) {
      let list = state.priceList
      list.push(payload)
      state.priceList = list
    }
  },
  actions: {
    logError({ commit }) {
      console.log('fff')
      commit('multiplyNumber')
    }
  },
  modules: {
  }
})
