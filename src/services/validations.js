import {utilService} from '.'
//export const isEmpty = value => (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0));
export const isEmpty = value => typeof value==='boolean'?false: ((!value) || (typeof value === 'object' && Object.keys(value).length === 0));

export const isNumber = value => !isNaN(parseInt(value))

export const isBoolean = value => (value && (value === "true" || value === "false")) || (typeof value === "boolean")

//  below-----------validations are used as rules

export const mandatory=(msg)=>(val)=>(!isEmpty(val)) || msg || "field is mandatory"
export const required=(msg)=>(val)=>(!isEmpty(val)) || msg || "field is required"
export const number=(msg)=>(val)=>isNumber(val)|| msg || "Please enter number only"
export const boolean=(msg)=>(val)=>isBoolean(val) || msg || "Please enter true or false"
export const regex=(pattern,msg)=>(val)=>{
    console.log("called ----------regex")
  let res=  pattern.test(val) || msg || `should match with regex: ${pattern}`
  console.log("regex res ",res)
  return res
}
export const rangeNumber=(from,to,msg)=>(val)=> {

        if(!val) return true

    from=parseFloat(from)
    to=parseFloat(to)
    val=parseFloat(val)
    
    return (from<=val && val<=to) || msg || `enter number from ${from}  to ${to}`
}
export const minLength=(min,msg)=>(val)=>  val&&val.length>=min || msg || `minimum length is ${min} chars`
export const maxLength=(max,msg)=>(val)=> val&&val.length<=max || msg || `maximum length is ${max} chars`
export const pastDate=(msg)=>(val)=>{
    if(!val) return true

    return new Date(val)<new Date() || msg || `Date should be past date`
}
export const futureDate=(msg)=>(val)=>  {

    if(!val) return true

return new Date(val)>=new Date() || msg || `Date should be future date`
}
export const rangeDate=(from,to,msg)=>(val)=>{

    if(!val) return true

     val=new Date(val).setHours(0,0,0,0)
     from=new Date(from).setHours(0,0,0,0)
     to=new Date(to).setHours(0,0,0,0)

    return (from<=val && val<=to) || msg || `enter date from ${utilService.formatDate (from,'date')}  to ${utilService.formatDate (to,'date')}`


} // yet to implement




        //--------------------
 export function getRules (validationString){
            // rules
           // rule1,args,args,msg?;rule2     
           // mandatory;rangeNumber,0,100;minLength,5

           let rules=[]
           if(!validationString)  return rules



           let validations=validationString.split(";")

           for(let val of validations)
           {
               if(!val) continue;

               let [method,...args]=val.split(',')

                if(this[method])
               rules.push(this[method](...args)) 

           }

           return rules    

       }

 export const validateRules=(val,rules)=>{

    for( let rule in rules)
    {
        let error=rules[rule].call(val,val)
            if(typeof error==="string")
               {
                   return error;
               } 


    }
    return null;
 }      



export default{
    isEmpty,isNumber,isBoolean,

    //------------------
    mandatory,required,number,boolean,rangeNumber,
    minLength,maxLength,pastDate,futureDate,rangeDate,

    //----------------
    getRules,validateRules

}