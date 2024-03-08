var gt =document.getElementById('greater-than');
var eq=document.getElementById('equal-to');
var lt=document.getElementById('lesser-than');
const timeH=document.querySelector('h3');
var score=document.querySelector('p1');
let timeS=5;
timeH.innerHTML=`${timeS}`;
const countDown=setInterval(()=>{
    timeS--;
    timeH.innerHTML=`${timeS}`;
    if(timeS<=0 || timeS<1){
        clearInterval(countDown);
    }
    if(timeS==0) {alert(`your score is:${cnt}`);window.location.href="21 gameover.html";}
},1000)
let num1=document.querySelector('h1');
let num2=document.querySelector('h2');
num1.innerHTML=Math.trunc(Math.random()*100);
num2.innerHTML=Math.trunc(Math.random()*100);


let cnt=0
gt.addEventListener("click",function(){
    if (num1.innerHTML>num2.innerHTML){ cnt=cnt+1;timeS=timeS+1;score.innerHTML=`${cnt}`}
    console.log(cnt)  
    console.log(countDown)

    })
lt.addEventListener("click",function(){
    if (num2.innerHTML>num1.innerHTML){ cnt=cnt+1;timeS=timeS+1;score.innerHTML=`${cnt}`}
    console.log(cnt)  
    console.log(countDown)

    })
eq.addEventListener("click",function(){
    if (num2.innerHTML==num1.innerHTML){ cnt=cnt+1;timeS=timeS+1;}
    console.log(cnt)  
    console.log(countDown)
    })

var playagain=document.getElementById('score-box');
playagain.addEventListener("click",function(){
    window.location.href="21 game development.html";
    score.innerHTML=`${cnt}`
    console.log("clicked")
        })