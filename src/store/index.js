import Vue from 'vue'
import Vuex from 'vuex'

import {authModule,globalModule,rootModule} from './modules'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
     
  },
 
  modules: {
    auth:authModule,
    global:globalModule,
    root:rootModule
  }
})
