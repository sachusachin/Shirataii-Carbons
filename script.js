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
t2.staggerFromTo(linksub, 1, {x:20}, {x:0 , delay:1}, 1);

function animateMenus() {
    tl.play(0);
    gsap.fromTo("#sampImg", { scale: 0 }, { scale:1, duration: 1 , delay:.5 });
    t2.play(0);
}