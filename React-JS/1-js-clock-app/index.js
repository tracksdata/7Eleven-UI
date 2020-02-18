// using plain java script code

let jsClock=document.querySelector("#js-clock");

function jsTick(){
    let time=new Date().toLocaleTimeString();
    
    let ui=`
    <div>
        <span>${time}</span>
    </div>
    `
    jsClock.innerHTML=ui;
}
setInterval(jsTick,1000);