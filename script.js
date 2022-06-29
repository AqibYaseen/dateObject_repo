let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthArr = ["January","Feburary","March","April","May","June","July","Aughust","September","October","November","December"];
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let range = document.getElementsByTagName("input");
let lable = document.getElementsByTagName("label");






function time(){

    let currDate= new Date();
    currDate.toDateString();
    // console.log(`Date : ${convertDay(currDate.getDay())} / ${currDate.getDate()} / ${convertMonth(currDate.getMonth()+1)} /${currDate.getFullYear()} `);
    // console.log(`Time : ${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()} : ${currDate.getMilliseconds()} `);
    span1.innerHTML= `Date : ${convertDay(currDate.getDay())} / ${currDate.getDate()} / ${convertMonth(currDate.getMonth()+1)} /${currDate.getFullYear()}`;
                    
    span2.innerText=`Time: ${currDate.getHours()-12}:${currDate.getMinutes()}:${(currDate.getSeconds()+1)}:${currDate.getMilliseconds()}`;
    
    range[0].value=currDate.getHours();
    range[1].value=currDate.getMinutes();
    range[2].value=currDate.getSeconds();
    range[3].value=currDate.getMilliseconds();
    lable[0].innerText=currDate.getHours()-12;
    lable[1].innerText=currDate.getMinutes();
    lable[2].innerText=currDate.getSeconds();
    lable[3].innerText=currDate.getMilliseconds();
    



    // setTimeout(time, 1);

}

setInterval(time, 1); 

function convertDay(num){
    return dayArr[num];
}
function convertMonth(num){
    return monthArr[num];
}