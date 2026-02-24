var statuss = document.querySelector(".status");
var full = document.querySelector(".fullimg"); 
var growth = document.querySelector("#growth");
var close = document.querySelector("#close");
var grow = 0;
var timer;
var timee;

statuss.addEventListener("click", function(){
    full.style.display = "block";
    
    timer =  setInterval(function(){
       growth.style.width = grow +"%";
       grow++;
    console.log(grow);

     },30)
     
    timee = setTimeout(function(){
        full.style.display = "none";
        clearInterval(timer);
     },3000)
})

close.addEventListener("click", function(){
   full.style.display = "none";
   clearInterval(timer);
   clearTimeout(timee);
   grow = 0;
})


