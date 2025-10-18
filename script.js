let time= document.getElementById ("time");

setInterval (() => { 
    let currentTime = new Date();
    time.innerHTML = currentTime.getTime();
},1000
)

