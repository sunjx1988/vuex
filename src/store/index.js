import Vue from 'vue'
import vuex from 'vuex'
import showDiv from './showdiv'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    showDiv
  }
})
