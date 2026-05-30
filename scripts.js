// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

// FADE ANIMATION
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

fadeElements.forEach((el)=>{
  observer.observe(el);
});

// DARK / LIGHT MODE
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    toggleBtn.innerHTML = "☀️";
  } else {
    toggleBtn.innerHTML = "🌙";
  }

};