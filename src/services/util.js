import {date,Dialog} from 'quasar'
//https://quasar.dev/quasar-utils/date-utils#Manipulate-dates

import ageService from './age'


// date formats

const formats={
     date : "Do MMM YYYY",
     dateTime : "Do MMM YYYY h:mm:ss a",
     datebaseDate : "YYYY-MM-DD",
     timestamp:"YYYY-MM-DD HH:mm:ss",
     calender : "MMMM D, YYYY",
     office:"D MMMM, YYYY",
     fmt1:"DMMMYYYY",//2JAN2020,
     fmt2:"DDMMMYYYY_HH:mm:ss",
     qDate:'YYYY/MM/DD'// 2018/11/05 // quasardate
     
}

export const formatDate=(dateObj,format='dateTime')=>{

    if (typeof dateObj === "string")
        dateObj = new Date(dateObj);


    if(format==='utcdate')
    {
        return  date.formatDate(dateObj,formats['datebaseDate'])+'T00:00:00.000Z'
    }

    return  date.formatDate(dateObj,formats[format])
}


export const raiseDialog=({title='Confirm',message,onOk,onCancel,onDismiss})=>{

    Dialog.create({title,message, cancel: true,persistent: true})
     .onOk(()=>{
        if(onOk)
           onOk()
     })
     .onCancel(()=>{
        if(onCancel)
         onCancel()
     })
     .onDismiss(()=>{
        if(onDismiss)
           onDismiss()
     })

}

export const toMixin=(object)=>({methods:object})



export default{
    formatDate,
    raiseDialog,
    age:ageService,
    toMixin
    
}


