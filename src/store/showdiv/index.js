export default {
  state: {
    show: 1
  },
  mutations: {
    add: function (state) {
      state.show += 1
    },
    sub: function (state) {
      state.show -= 1
    }
  },
  actions: {
    add: function (context) {
      context.commit('add')
    },
    sub: function (context) {
      context.commit('sub')
    }
  }
}
