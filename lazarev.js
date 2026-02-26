/*var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let t1 = gsap.timeline()
    
    t1.to("#nav-bottom",{
        height:"21vh",
        duration:0.3
    })
    t1.to(".nav-part2 h5 ",{
    display:"block"
    })
    t1.tfrom(".nav-part2 h5 span",{
        y:25,
    /*duration:0.3;
        stagger:{
        amount:0.2
    }
    })
})
nav.addEventListener("mouseleave",function(){
    let t1 = gsap.timeline()
    
    t1.to(".nav-part2 h5 span",{
    y:25,
    /*duration:0.3;
    stagger:{
        amount:0.2
    }
    })

    t1.to(".nav-part2 h5", {
        display: "none"
    })

    t1.to("#nav-bottom", {
        height: "0vh"
    })
})*/


var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let t1 = gsap.timeline()

    t1.to("nav", {
        height: "21vh",
        duration: 0.3
    })

    t1.to(".nav-part2 h5", {
        display: "block"
    })

    t1.from(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let t1 = gsap.timeline()

    t1.to(".nav-part2 h5 span", {
        y: 25,
        duration :0.15,
        stagger: {
            amount: 0.05
        }
    })

    t1.to(".nav-part2 h5", {
        display: "none"
    })

    t1.to("nav", {
        height: "12vh",
        duration: 0.2
    })
})













