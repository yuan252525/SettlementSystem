		
/*
 生成时间戳
 * */

const getTimestamp = () =>{
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var date1 = date.getDate(); 
    var hour = date.getHours(); 
    var minutes = date.getMinutes(); 
    var second = date.getSeconds(); 
    var GMT = date.toString().substring(date.toString().indexOf("+"));
    if(month<10){
        month = "0" + month;
    }
    if(date<10){
        date = "0" + date;
    }
    if(hour <10){
        hour = "0" + hour;
    }
    if(minutes <10){
        minutes = "0" + minutes;
    }
    if(second <10){
        second = "0" + second ;
    }
    return year+"-"+month+"-"+date1+"T"+hour+":"+minutes+":"+second+GMT;
}

export default {
	getTimestamp
}
export {
	getTimestamp
}