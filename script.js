let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthArr = ["January","Feburary","March","April","May","June","July","Aughust","September","October","November","December"];
let h1 = document.querySelector("h1");

function time(){

    let currDate= new Date();
    currDate.toDateString();

    console.log(`Date : ${convertDay(currDate.getDay())} / ${currDate.getDate()} / ${convertMonth(currDate.getMonth()+1)} /${currDate.getFullYear()} `);
    console.log(`Time : ${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()} : ${currDate.getMilliseconds()} `);
    h1.innerHTML= `Date : ${convertDay(currDate.getDay())} / ${currDate.getDate()} / ${convertMonth(currDate.getMonth()+1)} /${currDate.getFullYear()} <br/>
                    Time: ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;

    setTimeout(time, 1000);

}

time();

function convertDay(num){
    return dayArr[num];
}
function convertMonth(num){
    return monthArr[num];
}