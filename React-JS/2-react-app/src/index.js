
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
// Plan JS Code

let jsClock=document.querySelector("#js-clock");

function jsTick(){
    let time=new Date().toLocaleTimeString();

    let ui=`
       <div class="alert alert-info">  
            <span> JS Span Element Data </span>  
            <span class="badge badge-primary" >${time}</span>
       </div>
    `
    jsClock.innerHTML=ui;
}
setInterval(jsTick,1000);


// using react js DOM -> Virtual DOM
let reactClock=document.querySelector("#react-clock");

function reactTick(){
    let time=new Date().toLocaleTimeString();

    let ui=
       <div class="alert alert-info">    
            <span>Hello .. How are you...</span>
            <span class="badge badge-success" >{time}</span>
       </div>
    
let reactClock=document.querySelector("#react-clock");
    ReactDOM.render(ui,reactClock);
}
setInterval(reactTick,1000);