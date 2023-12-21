function loader(){
    document.querySelector('.lds-roller').style.display='inline-block'
}


const mytext = new SplitType("#intro-text")
function introPlay(){
    document.querySelector('.lds-roller').style.display='none'
    document.querySelector('#intro-text').style.display='flex'
    document.querySelector('#intro-text').style.opacity='1'
    gsap.to(".char", {y:0, opacity:1 ,stagger:0.05, delay:.5,duration:2});
}


function homeLoad(){
    const myTitle = new SplitType("#title-text")
    document.querySelector('#intro-box').style.display='none'
    gsap.to(".char", {y:0, opacity:1 ,stagger:0.05, delay:.5,duration:2});
    gsap.fromTo("#menu-btn", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
    gsap.fromTo("#menu-btn-ic", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 1});
    gsap.fromTo("#logo-img", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
    gsap.fromTo("#mobImg", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, delay: 1 });
    gsap.fromTo(".play_reel_left_video_option", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo("#myVideo", { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
}

window.onload = function() {
    loader();
  
    setTimeout(function() {
      introPlay();
      setTimeout(function() {
        homeLoad();
      }, 5000); 
    }, 1000); 
  };

let playBtn = document.querySelector('#play-reel')
let homePage = document.querySelector('#home')

homePage.addEventListener('mouseenter',()=>{
    gsap.fromTo("#play-reel", { scale: 0 } , { scale: 1, duration: 1 });
})
homePage.addEventListener('mousemove',(e)=>{
    gsap.to("#play-reel", { left: e.clientX, top: e.clientY, duration: 1 });
})
homePage.addEventListener('mouseleave',(e)=>{
    gsap.fromTo("#play-reel", { scale: 1 } ,{ scale: 0, duration: 1 });
})


function Nav(opt){
    if(opt=='o'){
        gsap.fromTo(".menus", { height: 0 }, { height: '60vh', duration: 1 });
        document.getElementById('close-btn').style.display='flex'
        animateMenus()
    }else{
        gsap.fromTo(".menus", { height: '60vh' }, { height: '0', duration: 1 });
        document.getElementById('close-btn').style.display='none'
    }
}


var lists = document.querySelectorAll(".lists");
var tl = new TimelineMax({paused:true});
tl.staggerFromTo(lists, 1, {opacity:0,y:20}, {opacity:1,y:0}, 0.25);


var linksub = document.querySelectorAll(".linksub");
var t2 = new TimelineMax({paused:true});
t2.staggerFromTo(linksub, 1, {opacity:0,y:-20}, {opacity:1,y:0}, 0.5);

function animateMenus() {
    tl.play(0);
    gsap.fromTo("#sampImg", { scale: 0 }, { scale:1, duration: 1 , delay:.5 });
    t2.play(0);
}


gsap.registerPlugin(ScrollTrigger);

gsap.from(".top_heading", {
  y: 50,
  stragger:.2,
  opacity:0,
  duration: 1,
  scrollTrigger: { 
    trigger: ".top_heading",
    start: "top 100%",
    end: "top 100%",
    scrub:2,
    markers:true
 },
});

gsap.from(".main_text", {
    y: 120,
    stragger:.2,
    opacity:0,
    duration: 1,
    scrollTrigger: { 
      trigger: ".main_text p",
      start: "top 100%",
      end: "top 100%",
      scrub:2,
      markers:true
   },
  });