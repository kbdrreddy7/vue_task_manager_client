import router from '../../router'
import { notificationService } from '..';

export const handleResponseError=(error)=>{

    // request not sent  --> server is stoped or not network
    if(!error.response){
              
            notificationService.negative({message:"Unable to connect the server"})
            return;
    }

    if(error.response.status==400)// bad requesr
    {
       //   res.status(400).send(data)  // from backend
        throw error.response.data
    }

    if(error.response.status==401)
    {
        notificationService.negative({message:"Your session is expired, please login again"})
        router.push("/login")
        return;
    }

    if(error.response.status>=500)
    {
        notificationService.negative({message:"Problem occured at Server"})
        return;
    }

   return Promise.reject(error);

}

export default {
    handleResponseError
}