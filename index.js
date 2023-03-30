const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampm = document.getElementById("am");

function updateClock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AMPM = "AM";

    if(h>12)
    {
        h=h-12;
        AMPM = "PM";
    }

    hourE1.innerText =h
    minuteE1.innerText =m;
    secondsE1.innerText = s;
    ampm.innerText = AMPM;
   setTimeout(()=>{ updateClock()

   },1000)
}

updateClock();