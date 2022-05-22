var dayselm = document.getElementById("counter1");
var hourselm = document.getElementById("counter2");
var minselm = document.getElementById("counter3");
var secselm = document.getElementById("counter4");
var newyear = "1 Jan 2023";

function countdown(){
    var newyeardate = new Date(newyear);
    var currentdate = new Date();
    var totalsec = (newyeardate - currentdate) / 1000;

    var days = Math.floor(totalsec / 3600 / 24);
    var mins = Math.floor(totalsec / 3600 ) % 24;
    var hours = Math.floor(totalsec / 60 ) % 60;
    var secs = Math.floor(totalsec) % 60;
    
    dayselm.innerHTML = days;
    hourselm.innerHTML = formatTime(hours);
    minselm.innerHTML = formatTime(mins);
    secselm.innerHTML = formatTime(secs);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);

