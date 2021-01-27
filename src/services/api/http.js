import axios from "axios";
import {BASE_URL} from '../../config'
import {errorHandlerService} from '..'

axios.defaults.baseURL =BASE_URL


// interceptor
axios.interceptors.response.use((response)=>response.data,(error)=>errorHandlerService.handleResponseError(error))

const setTokenHeader=(jwt)=>axios.defaults.headers.common["Authorization"] = jwt;

const getTokenHeader=()=>axios.defaults.headers.common["Authorization"]

const convertToFormData=(obj)=>{
//obj={file:FileObj, group:"string",key:val}
  
  let options={
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization' : axios.defaults.headers.common["Authorization"]
    }
  }
   let formData=new FormData()
   for(let key in obj)
       formData.append(key,obj[key])

       return  ({formData,options})
}



export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setTokenHeader,
  getTokenHeader,
  convertToFormData,
};
