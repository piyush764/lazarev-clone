var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let t1 = gsap.timeline()

    t1.to("nav", {
        height: "35vh",
        duration: 0.3
    })

    t1.to(".nav-part2 h5", {
        opacity: 1,
        visibility: "visible",
        duration: 0.1
       /* display: "block"*/
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
     /*   duration :0.15,
        stagger: {
            amount: 0.05
        }*/
    })

    t1.to(".nav-part2 h5", {
     /*   display: "none"*/
        opacity: 0,
        visibility: "hidden",
        duration: 0.1
    })

    t1.to("nav", {
        height: "12vh",
        duration: 0.2
    })
})

var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){

        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
     elem.addEventListener("mouseleave",function(){
         gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        console.log(elem.getBoundingClientRect())

        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-150
        })
    })
})
var page3Center =document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0

    })
})
video.addEventListener("click",function(){
    video.pause()
     gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"

    })

})

//page 4 
/*var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].pause()
    })
})*/
var sections = document.querySelectorAll(".sec-right");

sections.forEach(function(elem){

    var video = elem.querySelector("video");

    elem.addEventListener("mouseenter", function(){
        video.style.opacity = 1;
        video.play();
    });

    elem.addEventListener("mouseleave", function(){
        video.style.opacity = 0;
        video.pause();
        video.currentTime = 0;
    });

});














