const player=document.getElementById("player");
const dialogue=document.getElementById("dialogue");

let x=100;
let y=100;

function say(text){

dialogue.innerHTML=text;

dialogue.style.opacity=1;

clearTimeout(window.t);

window.t=setTimeout(()=>{

dialogue.style.opacity=0;

},3500);

}

say("...");

setTimeout(()=>{

say("سلام؟");

},2500);

setTimeout(()=>{

say("کسی اونجاست؟");

},5500);

setTimeout(()=>{

say("اگر صدای منو میشنوی... منو حرکت بده.");

},9000);

document.addEventListener("keydown",(e)=>{

if(e.key=="ArrowUp")y-=10;
if(e.key=="ArrowDown")y+=10;
if(e.key=="ArrowLeft")x-=10;
if(e.key=="ArrowRight")x+=10;

player.style.left=x+"px";
player.style.top=y+"px";

});