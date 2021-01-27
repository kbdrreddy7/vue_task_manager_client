import jwtDecode from 'jwt-decode'
import {authService,httpService} from '../../services'
import { AUTH } from '../mutation-types'

const state={
    user:null,
    userAccess:{}
}

const actions={

    login:async ({dispatch},{ user_name,  password})=>{
            let res=await authService.login({ user_name, password})
            if(res)// if error--> handled by handler...then res is undefined
                dispatch('handleToken',res.token)
        },

    logout:({commit})=>{
        commit(AUTH.SET_USER,null)
        localStorage.clear()

    },
    handleToken:({commit},token)=>{
            let decode=jwtDecode(token)
            commit(AUTH.SET_USER,decode)
            httpService.setTokenHeader(token)
            localStorage.setItem("token",token)
            localStorage.setItem("exp",decode.exp)// expires at
    },
    handleRefresh:async ({dispatch,commit})=>{
        if(authService.isAuthorized()){
            dispatch('handleToken',authService.getToken())
        }
        else commit(AUTH.SET_USER,null)
    }

}

const mutations={

    [AUTH.SET_USER]:(state,user)=>{
        state.user=user
    },
    [AUTH.SET_USER_ACCESS]:(state,userAccess)=>{
        state.userAccess=userAccess
    }

}

const getters={
    user:(state)=>state.user,
    authorized:()=>state.user?true:false,
    userAccess:({userAccess})=>userAccess
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}