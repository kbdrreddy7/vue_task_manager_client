import {ROOT} from '../mutation-types'

/* 
  global.module is for all modules-->using wich remaining modules will be created 
  root.module is for sharing data in entire app
 */
const state=()=>({
      holidays:[]
 })
 
 const actions={
    setData:({commit},obj)=>{
        commit(ROOT.SET_DATA,obj)
      } 
 }
 
 const mutations={
    
    [ROOT.SET_DATA]:(state,obj)=>{
       // state={...state,...obj} s
       if(obj)
         for(let key in obj)
            state[key]=obj[key]
      } 
 }
 
 const getters={
    getData:(state)=>(key)=>state[key]
 }
 
 export default {
     namespaced: true,
     state,
     actions,
     mutations,
     getters
 }