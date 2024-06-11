
const incresebtn  = document.getElementById(`inbutton`) ;
const decresebtn = document.getElementById(`dcbutton`) ;
const rebutton = document.getElementById(`rebutton`) ;
const label = document.getElementById(`mylabel`);

var count = 0 ; 

incresebtn.onclick = function(){
    count++ ;
    label.textContent = count ;
}

decresebtn.onclick = function(){
    count-- ;
    label.textContent = count ;
}

rebutton.onclick = function(){
    count = 0 ;
    label.textContent = count ;
}
