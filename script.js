const btn1= document.getElementById('btn1')
const btn2=document.getElementById('unbtn')
const num= document.getElementById('number')
function onClick(){

    if(btn1.click){
        num.textContent = parseInt(num.textContent) + 1;
    }
}
function onUnClick(){

    if(unbtn.click){
        num.textContent = parseInt(num.textContent) - 1;
    }
}
btn1.addEventListener('click', onClick);
unbtn.addEventListener('click', onUnClick);

