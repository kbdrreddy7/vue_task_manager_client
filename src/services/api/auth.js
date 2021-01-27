import {httpService as http} from '..'

const endPoint="/user"

export const login=({user_name,  password})=>{
  return http.post(endPoint+"/login",{user_name,  password,app_type:"WEB"})
}

export const logout=()=>{
    localStorage.clear()
}

export const isAuthorized=()=>{
  let exp=localStorage.getItem('exp') // expires at
  return  exp&& (Date.now()<=(1000* parseInt(exp) ))
}

export const getToken=()=>{
  return localStorage.getItem('token') 
}

export default{
    login,
    logout,
    isAuthorized,
    getToken
}