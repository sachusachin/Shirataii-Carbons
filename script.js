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

gsap.from(".page-2 .top_heading", {
  y: -50,
  stragger:.2,
  opacity:0,
  duration: 1,
  scrollTrigger: { 
    trigger: ".main_text",
    start: "top 100%",
    end: "top 100%",
    scrub:2,
 },
});

gsap.from(".page-2 .main_text", {
    y: 120,
    stragger:.2,
    opacity:0,
    duration: 3,
    scrollTrigger: { 
      trigger: ".main_text p",
      start: "top 100%",
      end: "top 100%",
      scrub:2,
   },
  });


const scroll = document.querySelector(".servive_scroller_main");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scroll.classList.add("active");
	scrollX = e.pageX - scroll.offsetLeft;
	scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll.scrollLeft = scrollLeft - scrolling;
});


gsap.from(".page-3 .service_top_heading_small", {
    y: -50,
    stragger:.2,
    opacity:0,
    duration: 3,
    scrollTrigger: { 
      trigger: ".page-3 .service_main_top",
      start: "top 100%",
      end: "top 100%",
      scrub:2,
   },
  });
  
  gsap.from(".page-3 .service_top_heading_main", {
      y: 120,
      stragger:.5,
      opacity:0,
      duration: 3,
      scrollTrigger: { 
        trigger: ".page-3 .service_main_top",
        start: "top 100%",
        end: "top 100%",
        scrub:2,
     },
});



gsap.from(".page-4 .top_heading", {
    y: -50,
    stragger:.2,
    opacity:0,
    duration: 1,
    scrollTrigger: { 
      trigger: ".page-4 .main_text",
      start: "top 100%",
      end: "top 100%",
      scrub:2,
   },
  });
  
  gsap.from(".page-4 .main_text", {
      y: 120,
      stragger:.5,
      opacity:0,
      duration: 3,
      scrollTrigger: { 
        trigger: ".page-4 .main_text",
        start: "top 100%",
        end: "top 100%",
        scrub:2,
     },
});


gsap.from(".page-5 .top_heading", {
    y: -50,
    stragger:.2,
    opacity:0,
    duration: 1,
    scrollTrigger: { 
      trigger: ".page-5 .main_text",
      start: "top 100%",
      end: "top 100%",
      scrub:2,
   },
});
  
  gsap.from(".page-5 .main_text", {
      y: 120,
      stragger:.5,
      opacity:0,
      duration: 3,
      scrollTrigger: { 
        trigger: ".page-5 .main_text p",
        start: "top 100%",
        end: "top 100%",
        scrub:2,
     },
});



let visionPage = document.querySelector('.joinball_box')

visionPage.addEventListener('mouseenter',()=>{
    gsap.fromTo("#join-btn-r", { scale: 0 } , { scale: 1, duration: 1 });
})
visionPage.addEventListener('mousemove',(e)=>{
    // gsap.to("#join-btn-r", {left:e.clientX, top:e.clientY, duration: 1 });
    gsap.to("#join-btn-r", {left:e.pageX, top:e.pageY, duration: 1 });
})
visionPage.addEventListener('mouseleave',(e)=>{
    gsap.fromTo("#join-btn-r", { scale: 1 } ,{ scale: 0, duration: 1 });
})


function openSidePanel(){
  gsap.fromTo("#sidepanel", { width: 0, opacity:0, visibility:'hidden' }, { width: '100vw', opacity:1, visibility:'visible', duration: 1 });
  gsap.fromTo(".sidepanel_top .logo", { scale: 0 }, { scale:1, duration: .5, delay:1});
  gsap.fromTo("#closeSide-btn", { scale: 0 }, { scale:1, duration: .5, delay:1 });
  // gsap.fromTo(".contact_form_container", { scale: 0, visibility:'hidden' }, { scale:1, visibility:'visible', duration: 1, delay:1 });
}
function closeSidePanel(){
  gsap.fromTo(".sidepanel_top .logo", { scale: 1 }, { scale:0, duration: .5});
  gsap.fromTo("#closeSide-btn", { scale: 1}, { scale:0, duration: .5 });
  // gsap.fromTo(".contact_form_container", { scale: 1 , visibility:'visible'}, { scale:0, visibility:'hidden' , duration: .5 });
  gsap.fromTo("#sidepanel", { width: '100vw' , opacity:1 , visibility:'visible'}, { width: '0', opacity:0, visibility:'hidden' ,duration: .5 ,delay:.5});
}


// import {collection, addDoc, getDocs} from 'firebase-onanimationiteration.js'


// var dataArray = [];

// async function fetchDataFromFirestore() {
//   const querySnapshot = await getDocs(collection(db, "user-messages"));
//   querySnapshot.forEach((doc) => {
//     dataArray.push(doc.data());
//   });
// }

// // Call this function on page load to fetch data from Firestore
// fetchDataFromFirestore();

// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   addData()
// });

// function removeData(){
//   document.getElementById("name").value='';
//   document.getElementById("email").value='';
//   document.getElementById("message").value='';
// }


// // Function to update the table based on the data array
// async function addData() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const date = Date.now();

//   // Validation can be added here

//   const newData = {
//     id: Date.now().toString(), // Using timestamp as a unique ID
//     name: name,
//     email: email,
//     message: message,
//     date: date
//   };

//   try {
//     // Add data to Firestore
//     await addDoc(collection(db, "user-messages"), newData);

//     dataArray.push(newData);
//     updateTable();

//     // Display success message
//     alert("Data added successfully!");
//     removeData()
//   } catch (error) {
//     console.error("Error adding data:", error);

//     // Display error message
//     alert("Error adding data. Please try again.");
//   }
// }



$(".filter a").click(function (e) {
  e.preventDefault();
  var a = $(this).attr("href");
  a = a.substr(1);
  $(".sets a").each(function () {
    if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
    else $(this).removeClass("hide");
  });



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btncontainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace(" btn-active", "");
  this.className += " btn-active";

}
});


let imgs = document.querySelectorAll("img");
let count;
imgs.forEach((img, index) => {
  img.addEventListener("click", function (e) {
    if (e.target == this) {
      count = index;
      let openDiv = document.createElement("div");
      let imgPreview = document.createElement("img");
      let butonsSection = document.createElement("div");
      butonsSection.classList.add("butonsSection");
      let closeBtn = document.createElement("button");
      let nextBtn = document.createElement("button");
      let prevButton = document.createElement("button");
      prevButton.innerText = "Previous";
      nextBtn.innerText = "Next";

      nextBtn.classList.add("nextButton");
      prevButton.classList.add("prevButton");
      nextBtn.addEventListener("click", function () {
        if (count >= imgs.length - 1) {
          count = 0;
        } else {
          count++;
        }

        imgPreview.src = imgs[count].src;
      });

      prevButton.addEventListener("click", function () {
        if (count === 0) {
          count = imgs.length - 1;
        } else {
          count--;
        }

        imgPreview.src = imgs[count].src;
      });

      closeBtn.classList.add("closeBtn");
      closeBtn.innerText = "Close";
      closeBtn.addEventListener("click", function () {
        openDiv.remove();
      });

      imgPreview.classList.add("imgPreview");
      imgPreview.src = this.src;

      butonsSection.append(prevButton, nextBtn);
      openDiv.append(imgPreview, butonsSection, closeBtn);

      openDiv.classList.add("openDiv");

      document.querySelector("body").append(openDiv);
    }
  });
});