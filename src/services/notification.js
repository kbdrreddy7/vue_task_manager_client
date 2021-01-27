import { Notify } from 'quasar'

export const notify=({message,timeout=2000,closeBtn=true, icon= 'far fa-comment-alt', color="blue",progress=false})=>Notify.create({message,timeout,icon,color,closeBtn,progress})
export const notifyByType=({message,type,timeout=2000,closeBtn=true,progress=false})=>Notify.create({message,type,timeout,closeBtn,progress})

export const positive=({message,progress=false})=>notifyByType({message,type:"positive",progress})
export const negative=({message,progress=false})=>notifyByType({message,type:"negative",progress})
export const warning=({message,progress=false})=>notifyByType({message,type:"warning",progress})
export const info=({message,progress=false})=>notifyByType({message,type:"info",progress})


export default{
    notify,positive,negative,warning,info
}