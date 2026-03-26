// -------------------- LOCOMOTIVE + SCROLLTRIGGER SETUP --------------------
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// -------------------- NAV ANIMATION --------------------
function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let t1 = gsap.timeline();
    t1.to("nav", { height: "35vh", duration: 0.3 });
    t1.to(".nav-part2 h5", { opacity: 1, visibility: "visible", duration: 0.1 });
    t1.from(".nav-part2 h5 span", { y: 25, stagger: { amount: 0.2 } });
  });

  nav.addEventListener("mouseleave", () => {
    let t1 = gsap.timeline();
    t1.to(".nav-part2 h5 span", { y: 25 });
    t1.to(".nav-part2 h5", { opacity: 0, visibility: "hidden", duration: 0.1 });
    t1.to("nav", { height: "12vh", duration: 0.2 });
  });
}

// -------------------- RIGHT ELEMENT HOVER IMAGE --------------------
function rightElemAnimation() {
  const rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach((elem) => {
    const img = elem.querySelector("img"); // safer than childNodes[3]

    elem.addEventListener("mouseenter", () => {
      gsap.to(img, { opacity: 1, scale: 1 });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(img, { opacity: 0, scale: 0 });
    });

    elem.addEventListener("mousemove", (e) => {
      const rect = elem.getBoundingClientRect();
      gsap.to(img, {
        x: e.clientX - rect.left - 50,
        y: e.clientY - rect.top - 150
      });
    });
  });
}

// -------------------- PAGE 3 VIDEO POPUP --------------------
function page3VideoAnimation() {
  const page3Center = document.querySelector(".page3-center");
  const video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      scale: 1,
      opacity: 1,
      borderRadius: 0
    });
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      scale: 0.7,
      opacity: 0,
      borderRadius: "30px"
    });
  });
}

// -------------------- PAGE 4 VIDEO HOVER --------------------
function page4VideoHover() {
  const sections = document.querySelectorAll(".sec-right");

  sections.forEach((elem) => {
    const video = elem.querySelector("video");

    elem.addEventListener("mouseenter", () => {
      video.style.opacity = 1;
      video.muted = true;
      video.play();
    });

    elem.addEventListener("click", () => {
      video.muted = false;
    });

    elem.addEventListener("mouseleave", () => {
      video.style.opacity = 0;
      video.pause();
      video.currentTime = 0;
    });
  });
}

// -------------------- PAGE 6 SCROLL ANIMATION --------------------
function page6ScrollAnimation() {
  ["#btm6-part2", "#btm6-part3", "#btm6-part4"].forEach((col) => {
    gsap.from(`${col} h4`, {
      x: (i) => i * 40,
      duration: 1,
      scrollTrigger: {
        trigger: col,
        scroller: "#main", // REQUIRED for Locomotive
        start: "top 80%",
        end: "top 20%",
        scrub: true
      }
    });
  });
}

// -------------------- INIT ALL --------------------
function init() {
  locomotiveAnimation();
  navAnimation();
  rightElemAnimation();
  page3VideoAnimation();
  page4VideoHover();
  page6ScrollAnimation();
}

// -------------------- RUN AFTER DOM LOAD --------------------
document.addEventListener("DOMContentLoaded", init);













