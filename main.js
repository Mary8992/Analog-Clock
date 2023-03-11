function toggleClass() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
}


/* Clock niddles rotate from = 0-360deg
Total seconds in a minute / total minutes in a hour = 60
360/60 = 6deg */
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

/* setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}); */

//key things: 1)div 1 / div2::before  = div2 prints over div1  2) style.transform = rotate(xdeg) - rotates div around mystical Z axis (which points from your screen towards you).

//if you want hour, minute, second pointers move smoothly, modify setInterval block like this:

setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds() + (day.getMilliseconds() / 1000);    // get rid of getMilliseconds() part if you want to move second by second on second pointer
    let mm = day.getMinutes() + (ss / 60);
    let hh = day.getHours() + (mm / 60);

    hr.style.transform = `rotateZ(${hh * 30}deg)`;
    mn.style.transform = `rotateZ(${mm * deg}deg)`;
    sc.style.transform = `rotateZ(${ss * deg}deg)`;
});