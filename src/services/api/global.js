import http from './http'
import qs from 'qs'



 const getAll=(route,query={})=>{

    /* 
       query {
        'offset': '2',
        'limit': '5',
        class: [ '5', '6' ],                // filter ( more than one)
        school: 'govt',                     // filter
        name: { like: 'ram' },              // filter by operations
        age: { gte: '22', lte: '12' },      // filter by operations( more than one)
        height: { ne: '150' },              // filter by operations
        sort: 'age:desc,height,weight:asc', // sorting
        fields: 'name,gender',               // which filed values are required
        exclude-fields:"password"            // not required fields

        join:true,
        all_fields:true


         // more than one operation ...on same varibale...not allowed...
         // only first one will be considered
        // in below ...only name like '%ram%' will be considered
        name:{                              
            like:['%ram%','%sri ram%']
        }

        }
     */

     let newQuery=Object.assign({},query)

 
     for(let key1 in newQuery)
     {
            if(newQuery[key1]&&newQuery[key1]["like"])
            newQuery[key1]=Object.assign({},{...newQuery[key1] ,'like':`%${newQuery[key1]["like"]}%`})
            // ["like"]=`%${newQuery[key1]["like"]}%` // adding % at the ends
     }
 
     let queryString=qs.stringify(newQuery)

    return http.get(route+"?"+queryString)

}

 const getOne=(route,id,query={})=>{
    let queryString=qs.stringify(query)
    return http.get("/"+route+"/"+id+"?"+queryString)

}

 const addOne=(route,obj)=>{
    return http.post("/"+route,obj)
}

 const updateOne=(route,id,obj)=>{
    return http.put("/"+route+"/"+id,obj)
}

 const deleteOne=(route,id)=>{
    return http.delete("/"+route+"/"+id)
}
 const upsert=(route,obj)=>{
    return http.post("/"+route+"/upsert",obj)
}

 const bulkUpsert=(route,objArray)=>{
    return http.post("/"+route+"/bulk_upsert",objArray)
}
 const addBulk=(route,objArray)=>{
    return http.post("/"+route+"/bulk_upsert",objArray)
}


 const get=(endPoint,query={})=>{

    let queryString=qs.stringify(query)
    return http.get("/"+endPoint+"?"+queryString)

}

 const post=(endPoint,body)=>{
    return http.post("/"+endPoint,body)

}
 const put=(endPoint,body)=>{
    return http.put("/"+endPoint,body)

}

// delete is keyword
 const delet=(endPoint,body)=>{
    return http.delete("/"+endPoint,body)

}
export default{
   
    getAll,getOne,addOne,updateOne,deleteOne,
    upsert,bulkUpsert,addBulk,
    get,post,put,delet
    


}