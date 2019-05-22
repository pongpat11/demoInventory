import Vue from 'vue'
import Vuex from 'vuex'
import { isContext } from 'vm';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todo: []
  },
  mutations: {
      SETTODO (state,data){
        state.todo = data
      }
  },
  actions: {
      addTodo(cotext, newTodo){
        cotext.state.todo.push(newTodo)
      }
  }
})
