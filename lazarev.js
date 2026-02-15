var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let t1 = gsap.timeline()
    
    t1.to("#nav-bottom",{
        height:"21vh"
    })
    t1.to(".nav-part2 h5 ",{
    display:"block"
    })
    t1.to(".nav-part2 h5 span",{
    y:25,
    /*duration:0.3;*/
    stagger:{
        amount:0.1
    }
    })
})
nav.addEventListener("mouseleave",function(){
    var t1 = gsap.timeline()
    
   /* t1.to("#nav-bottom",{
        height:"21vh"
    })
    t1.to(".nav-part2 h5 ",{
    display:"block"
    })*/
    t1.to(".nav-part2 h5 span",{
    y:25,
    /*duration:0.3;*/
    stagger:{
        amount:0.2
    }
    })
})













