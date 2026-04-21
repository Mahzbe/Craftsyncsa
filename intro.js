const intro = document.getElementById("introVideo");
const skip = document.getElementById("skipBtn");

skip.onclick = () => intro.style.display = "none";

setTimeout(()=>{
intro.style.display="none";
},8000);
