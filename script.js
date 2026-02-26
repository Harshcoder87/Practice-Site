var body = document.querySelector("body")

var nav = document.querySelector("nav")

body.addEventListener('wheel', function(e){
     if(e.deltaY>0){
        nav.style.transform = 'translateY(-100%)'

        console.log("seedha scrolling")
     }
      else{
        console.log("ulta scrolling");
        nav.style.transform = 'translateY(0)'
     }


})

