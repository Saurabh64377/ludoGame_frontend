var slide = document.querySelector(".togl");
var code = document.querySelector("#copy-code")
var menu = document.querySelector("#menu");

 var tl = gsap.timeline()
 var play=1;

 tl.to("#menu",{
    x:399,
    duration:0.2,
    delay:0.1,
    // stagger:0.3,
    // yoyo:true,
    // repeat:-1
 });

 tl.pause();

 slide.addEventListener("click",function(){
   if(play==1){
      tl.play();
      play=2;

   }
   else{
      tl.reverse();
      play=1;
   }
       
 });

 code.addEventListener("click",function(){
   alert("Refferal code copied!")
 })

 