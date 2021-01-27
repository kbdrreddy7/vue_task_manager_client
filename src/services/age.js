
const getDaysOfMonth=(year,month)=>new Date(year,month,0).getDate()



const getTotalDays=(fromDate,toDate)=>{
 
    let totaldays=(toDate-fromDate)/1000/60/60/24
  
    return parseInt(totaldays.toFixed(0))
  
  }
  
const getTimeDiffInString=(fromDate,toDate)=>{



//convert to UTC
var toDateUTC = new Date(Date.UTC(toDate.getUTCFullYear(), toDate.getUTCMonth(), toDate.getUTCDate()));
var fromDateUTC = new Date(Date.UTC(fromDate.getUTCFullYear(), fromDate.getUTCMonth(), fromDate.getUTCDate()));

var yAppendix, mAppendix, dAppendix;


//--------------------------------------------------------------
var days = toDateUTC.getDate() - fromDateUTC.getDate();
if (days < 0)
{
    toDateUTC.setMonth(toDateUTC.getMonth() - 1);
    days += getDaysOfMonth(toDateUTC.getFullYear(),toDateUTC.getMonth()) //DaysInMonth(toDateUTC);
}
//--------------------------------------------------------------
var months = toDateUTC.getMonth() - fromDateUTC.getMonth();
if (months < 0)
{
    toDateUTC.setFullYear(toDateUTC.getFullYear() - 1);
    months += 12;
}
//--------------------------------------------------------------
var years = toDateUTC.getFullYear() - fromDateUTC.getFullYear();




if (years > 1) yAppendix = " years";
else yAppendix = " year";
if (months > 1) mAppendix = " months";
else mAppendix = " month";
if (days > 1) dAppendix = " days";
else dAppendix = " day";


return years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix ;
}

const getTimeDiffInYears=(fromDate,toDate,toFixed=2)=>{
    let totaldays=getTotalDays(fromDate,toDate)
    let years=totaldays/365
  
      if(toFixed)
          years= parseFloat(years.toFixed(toFixed))
      else years=parseInt (Math.floor(years))// to remove float value
      return years

}


const getTimeDiff=(fromDate=new Date(),toDate=new Date(), toFixed=0)=>{

    fromDate=new Date(fromDate)// if it is not a date
    toDate=new Date(toDate)// if it is not a date


    // if we pass date in string format ...slight chage is coming...need to understand...UTC date
    fromDate=new Date(fromDate.getFullYear(),fromDate.getMonth(),fromDate.getDate())
    toDate=new Date(toDate.getFullYear(),toDate.getMonth(),toDate.getDate())

    let years=getTimeDiffInYears(fromDate,toDate,toFixed)
    let string=getTimeDiffInString(fromDate,toDate)

    return ({years,string})
}

export default getTimeDiff
