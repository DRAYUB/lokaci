const hEL = document.querySelector('.h');
const mEL = document.querySelector('.m');
const sEL = document.querySelector('.s');



setInterval(()=>{
    const date = new Date;

    const sDeg = date.getSeconds() / 60 * 360 -90;
    const mDeg = date.getMinutes() / 60 * 360 -90;
    const hDeg = date.getHours() / 12 * 360 -90;
    sEL.style.transform  = `rotate(${sDeg}deg)`
    mEL.style.transform  = `rotate(${mDeg}deg)`
    hEL.style.transform  = `rotate(${hDeg}deg)`
},1000)
