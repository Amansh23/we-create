
var t1 = gsap.timeline();


t1.to("#num h3",{
    duration : 2,
    ease: Expo.easeOut,
    innerHTML:"100%",
})

.to("#smooth",{
    duration : 3,
    ease: Expo.easeOut,
    width:800,
},"=-2")

.to("#ma",{
    duration : 2,
    ease: Expo.easeIn,
    width:350,
    height:300,
   
    
})

.to("#num h3",{
    duration : 0,
    opacity: 0,
},"=-1")

.to("#smooth",{
    duration : 0,
    opacity: 0,  
},"=-1")



var cursor = document.querySelector('#cursor');
window.addEventListener('mousemove',function(dets){
    cursor.style.left = (dets.pageX) + "px";
    cursor.style.top = (dets.pageY) + "px";
})


document.querySelector("#main #ma").addEventListener("mouseover",function(dets){
   cursor.style.width = "40px";
   cursor.style.height = "40px";
   cursor.textContent = "PLAY"
   cursor.style.backgroundColor = "white"
})

document.querySelector("#main #ma").addEventListener("mouseout",function(dets){
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.textContent = ""
    cursor.style.backgroundColor = "red"
 })
 
 var pointers = document.querySelector("#main #nav #nav2 #link  ");

 document.querySelector("#main #nav #nav2 #link ").addEventListener("mouseover",function(dets){
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.style.backgroundColor = "black"
    cursor.style.border = "1px solid black "
    pointers.style.fontWeight = "900"
    pointers.style.color = "white"
    document.querySelector("#main #nav #nav2 #link .cir").style.color = "white"
    document.querySelector("#main #nav #nav2 #link .cir").style.border = " 1px solid white"
 })
 
 document.querySelector("#main #nav #nav2 #link ").addEventListener("mouseout",function(dets){
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.backgroundColor = "red"
    cursor.style.border = ""
    pointers.style.fontWeight= "initial"
    pointers.style.color = "initial"
    document.querySelector("#main #nav #nav2 #link .cir").style.color = "initial"
    document.querySelector("#main #nav #nav2 #link .cir").style.border = "1px solid black "
  })
  
 
 

 
  var pointers1 = document.querySelector("#main #nav #nav2 #link1 h3");

  document.querySelector("#main #nav #nav2 #link1 h3").addEventListener("mouseover",function(dets){
     cursor.style.width = "40px";
     cursor.style.height = "40px";
     cursor.style.backgroundColor = "black"
     cursor.style.border = "1px solid black "
     pointers1.style.fontWeight = "900"
     pointers1.style.color = "white"
  })
  
  document.querySelector("#main #nav #nav2 #link1 h3").addEventListener("mouseout",function(dets){
     cursor.style.width = "20px";
     cursor.style.height = "20px";
     cursor.style.backgroundColor = "red"
     cursor.style.border = ""
     pointers1.style.fontWeight= "initial"
     pointers1.style.color = "initial"
 
   })
   


   
  var pointers2 = document.querySelector("#main #nav #nav2 #link2 h3");

  document.querySelector("#main #nav #nav2 #link2 h3").addEventListener("mouseover",function(dets){
     cursor.style.width = "40px";
     cursor.style.height = "40px";
     cursor.style.backgroundColor = "black"
     cursor.style.border = "1px solid black "
     pointers2.style.fontWeight = "900"
     pointers2.style.color = "white"
  })
  
  document.querySelector("#main #nav #nav2 #link2 h3").addEventListener("mouseout",function(dets){
     cursor.style.width = "20px";
     cursor.style.height = "20px";
     cursor.style.backgroundColor = "red"
     cursor.style.border = ""
     pointers2.style.fontWeight= "initial"
     pointers2.style.color = "initial"
 
   })
   


   var pointers3 = document.querySelector("#main #nav #nav2 #fr h3");

  document.querySelector("#main #nav #nav2 #fr h3").addEventListener("mouseover",function(dets){
     cursor.style.width = "40px";
     cursor.style.height = "40px";
     cursor.style.backgroundColor = "black"
     cursor.style.border = "1px solid black "
     pointers3.style.fontWeight = "900"
     pointers3.style.color = "white"
  })
  
  document.querySelector("#main #nav #nav2 #fr h3").addEventListener("mouseout",function(dets){
     cursor.style.width = "20px";
     cursor.style.height = "20px";
     cursor.style.backgroundColor = "red"
     cursor.style.border = ""
     pointers3.style.fontWeight= "initial"
     pointers3.style.color = "rgb(77, 74, 74)"
 
   })
   



   
   var pointers4 = document.querySelector("#main #creative h3");

  document.querySelector("#main #creative ").addEventListener("mouseover",function(dets){
     cursor.style.width = "40px";
     cursor.style.height = "40px";
     cursor.style.backgroundColor = "black"
     cursor.style.border = "1px solid black "
     pointers4.style.fontWeight = "900"
     pointers4.style.color = "white"
  })
  
  document.querySelector("#main #creative ").addEventListener("mouseout",function(dets){
     cursor.style.width = "20px";
     cursor.style.height = "20px";
     cursor.style.backgroundColor = "red"
     cursor.style.border = ""
     pointers4.style.fontWeight= "initial"
     pointers4.style.color = "black "
 
   })
   