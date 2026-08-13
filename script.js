/* ===========================
   AOS Animation
=========================== */

AOS.init({
    duration:1000,
    once:true
});

/* ===========================
   Typing Effect
=========================== */

const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Python Programmer",
  "MCA Student",
  "Problem Solver"
];

let wordIndex=0;
let charIndex=0;
let currentWord="";
let isDeleting=false;

const typing=document.getElementById("typing");

function type(){

currentWord=words[wordIndex];

if(isDeleting){

typing.textContent=currentWord.substring(0,charIndex--);

}else{

typing.textContent=currentWord.substring(0,charIndex++);

}

let speed=isDeleting ? 70 : 120;

if(!isDeleting && charIndex===currentWord.length+1){

speed=1500;

isDeleting=true;

}

if(isDeleting && charIndex===0){

isDeleting=false;

wordIndex++;

if(wordIndex===words.length){

wordIndex=0;

}

}

setTimeout(type,speed);

}

type();

/* ===========================
   Dark Mode
=========================== */



/* ===========================
   Mobile Menu
=========================== */

const menu=document.getElementById("menu");

const nav=document.getElementById("navbar");

menu.onclick=()=>{

nav.classList.toggle("active");

};

document.querySelectorAll("nav a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

};

});

/* ===========================
   Scroll Progress Bar
=========================== */

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});

/* ===========================
   Back To Top Button
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
   Preloader
=========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("preloader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

});

/* ===========================
   Active Navigation
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(window.pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================
   Contact Form
=========================== */

const form=document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you for contacting me! I'll get back to you soon.");

form.reset();

});

/* ===========================
   Smooth Reveal Effect
=========================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".project-card,.skill-card,.stat,.timeline-item,.experience-card,.certificate-card").forEach(el=>{

observer.observe(el);

});

/* ===========================
   Console Message
=========================== */

console.log("%c👋 Welcome to Vinod's Portfolio","color:#4f46e5;font-size:20px;font-weight:bold;");

console.log("%cDesigned & Developed by Vinod Shahapurkar","color:#7c3aed;font-size:14px;");

function openCertificate(){

    document.getElementById("certificatePopup").style.display = "flex";

}

function closeCertificate(){

    document.getElementById("certificatePopup").style.display = "none";

}

window.onclick = function(event){

    const popup = document.getElementById("certificatePopup");

    if(event.target === popup){

        popup.style.display = "none";

    }

}