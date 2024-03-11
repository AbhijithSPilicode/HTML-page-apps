var add =document.getElementById('Addition');
var sub=document.getElementById('subtraction');
var mul=document.getElementById('multiplication');
var div=document.getElementById('division');
var remainder=document.getElementById('remainder');
const timeH=document.querySelector('h3');
var score=document.querySelector('p1');
let timeS=20;
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
let num3=document.querySelector('h4');
num1.innerHTML=Math.trunc(Math.random()*100);
num2.innerHTML=Math.trunc(Math.random()*100);

add.addEventListener("click",function(){
    console.log("clicked")
    var sum=parseInt(num1.innerHTML)+parseInt(num2.innerHTML)
    console.log(sum)
    num3.textContent=`${sum}`
})

sub.addEventListener("click",function(){
    console.log("clicked")
    var sum=parseInt(num1.innerHTML)-parseInt(num2.innerHTML)
    console.log(sum)
    num3.textContent=`${sum}`
})

mul.addEventListener("click",function(){
    console.log("clicked")
    var sum=parseInt(num1.innerHTML)*parseInt(num2.innerHTML)
    console.log(sum)
    num3.textContent=`${sum}`
})

div.addEventListener("click",function(){
    console.log("clicked")
    var sum=parseInt(num1.innerHTML)/parseInt(num2.innerHTML)
    var sum=parseInt(sum)
    console.log(sum)
    num3.textContent=`${sum}`
})

remainder.addEventListener("click",function(){
    console.log("clicked")
    var sum=parseInt(num1.innerHTML)%parseInt(num2.innerHTML)
    console.log(sum)
    num3.textContent=`${sum}`
})


var resetButton=document.getElementById('play-again-button')
function resetGame(){
window.location.reload()
}
resetButton.addEventListener("click",function(){
resetGame()    
})