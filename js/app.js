const seconds = document.querySelector(".second");
const minutes = document.querySelector(".minute");
const hours = document.querySelector(".hour");

setInterval(()=>{
    let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  secRotation = 6 * sec;
  minRotation = 6 * min;
  hourRotation = 30 * hour + min / 2;
  seconds.style.transform = `rotate(${secRotation}deg)`;
  minutes.style.transform = `rotate(${minRotation}deg)`;
  hours.style.transform = `rotate(${hourRotation}deg)`;
},1000) 
  

