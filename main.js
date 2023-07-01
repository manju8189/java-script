// present Date
 const date=new Date();
 console.log(date);
//  praticular date
console.log(new Date("2022-12-7"));
// with time
console.log(new Date(2012,15,40,40,25,30,0));
// only year
console.log(new Date("2023"))
// get methods
// get present year
// const d=new Date();
// const year=d.getFullYear();
// console.log(year);
// present month
// const d1=new Date();
// const month=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// const year=month[d1.getMonth()];
// console.log(year);
// get hour 
const d2=new Date();
const hour=d2.getHours();
console.log(hour);
// get Dates 
const d3=new Date();
const day=d3.getDate();
console.log(day);
// get minutes
const d4=new Date();
const minutes=d4.getMinutes();
console.log(minutes);
// get seconds
const d5=new Date();
const seconds=d5.getSeconds();
console.log(seconds);
// get milliseconds
const d6=new Date();
const milliseconds=d6.getMilliseconds();
console.log(milliseconds);
// set methods
// set year
// set year
 const d=new Date();
 const setYear=d.setYear(2021);
 console.log(d);
// set month
const d7=new Date();
const setmonth=d.setMonth(12);
console.log(d7);
// set date
const d8=new Date();
const setdate=d.setDate(7);
console.log(d8);
// set minutes
const d9=new Date();
const setminutes=d.setMinutes(57);
console.log(d9);
// set hours
const d1=new Date();
const sethour=d.setHours(11);
console.log(d1);
// set seconds
const d10=new Date();
const setseconds=d.setSeconds(0);
console.log(d10);
// math methods
// round method
console.log(Math.round(-3.5));
// ceil method
console.log(Math.ceil(4.2));
// floor method
console.log(Math.floor(5.5));
// trunc method
console.log(Math.trunc(7.5));
// sign method
console.log(Math.sign(3.5));
// random method
console.log(Math.random(-3.5));
console.log(Math.floor(Math.random()*10));
// sqrt method
console.log(Math.sqrt(225));
// power method
console.log(Math.pow(2,3));
// absoulte method
console.log(Math.abs(-3.5));
// math minimum
const array=[223,224,225,226,227,2296];
console.log(Math.min.apply(null,array));
// max method
const array2=[223,224,225,226,227,2296];
console.log(Math.max.apply(null,array));
// set setTimeout
setTimeout(function myFunction(){
    console.log("manju" )
},4000);
// set setInterval
const interval=setInterval(function myFunction(){
    console.log("manju" )
},100);

// set setTimeout
setTimeout(function myFunction(){
    clearInterval(interval)
},4000);
// conditional statements
// const x=20;
// if(x<20){
    // console.log("hai");
// }else if(x>30){
    // console.log("hello")
// }
// else{
    // console.log("morning")
// }
// ternary op
let y=30;
const z=y>20? "true":"false";
console.log(z);
// switch statement
const date7=new Date().getDay();
let dates;
switch(date){
    case 0:
    dates="sunday"
    break
    case 1:
    dates="monday"
    break
    case 3:
        dates="tuesday"
        break
        case 4:
        dates="wednesday"
        break
        case 5:
        dates="thursday"
        break
        case 6:
        dates="friday"
        break
        case 7:
        dates="saturday"
        break
        default:
            dates="manju"
}
console.log(dates);
// loops
// for
for(let i=0;i<10;i++){
    console.log(i);
}
// while
let i=0;
while(i<10){
    console.log(i);
    i++;
}
// do while
let x=0;
do{
    console.log(x);
    x++;
}
while(x<20);
// dom intro
const todo=document.querySelector(".todo");
const div=document.querySelector("div");
const ul=document.querySelector("ul");
const li=document.querySelector("li");
const li1=document.querySelector("li1");
li.innerText="home";
li1.innerText="about-us";
div.appendChild(li);
ul.className="unorderlist";
div.className="division";
todo.appendChild(div);

const buttonClick=document.querySelector(".add");
const inputField=document.querySelector(".web");
const list=document.querySelector(".developer");
 buttonClick.addEventListner("click", function btnclick(e)
 {
    e.preventDefault();
    const liList=document.createElement("li");
    const delete1=document.createElement("button");
    liList.innerText=inputField.value;
    delete1.innerText="delete";
    const complete=document.createElement("button");
    liList.innerText=inputField.value;
    delete1.innerText="complete";
    const edit=document.createElement("button");
    liList.innerText=inputField.value;
    delete1.innerText="edit";
    list.appendChild(liList);createElement("button");
    list.appendChild(delete1)
    inputField.value="";



 });





























