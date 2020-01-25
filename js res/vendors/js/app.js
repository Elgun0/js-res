// var btn=document.getElementById("button");
// btn.onclick=function(){
//     var text=document.getElementById("text1").value
//     if(text != ""){
//         var newp=document.createElement("p");
//         newp.innerText=text
//         document.body.appendChild(newp)
//         document.getElementById("text1").value=""
//         // 
//         var itag=document.createElement("i")
//         itag.className=" fas fa-times"
//         newp.appendChild(itag)
//         itag.onclick=function(){
//             newp.remove()
//         }
//     }
//     else{
//         alert("bosh gonderme!")
//     }

// }

// first end

// Slider start
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")
var sliderwidth=document.querySelector("#slider li").clientWidth
var sliderul=document.querySelector("#slider ul")
var say=0
next.onclick=function(){
    say++
    if(say==sliderul.querySelectorAll("li").length){
        say=0
    }
    sliderul.style.left=-(sliderwidth*say)+"px"
}
prev.onclick=function(){
    say--
    if(say==-1){
        say=sliderul.querySelectorAll("li").length-1
    }
    sliderul.style.left=-(sliderwidth*say)+"px"
}
