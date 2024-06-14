let input = document.getElementById("myinput"); 
let Para = document.getElementById("myPara");

let Ftc = document.getElementById("FtoC") ;
let Ctf = document.getElementById("CtoF");

let submitbtn = document.getElementById("mysubmit");

submitbtn.addEventListener("click",convert);

submitbtn.addEventListener("click", function(event) {
    event.preventDefault();
    convert();
});

function convert() {

    let tempnum = Number(input.value) ;

    if (isNaN(tempnum)) {
        Para.textContent = "Please Enter a NUMBER !!";
    }

    if (Ftc.checked) {
        Para.textContent = `${tempnum}'F is equal to ${((tempnum - 32) * 5/9)}'C` ;
    }else if (Ctf.checked) {
        Para.textContent = `${tempnum}'C is equal to ${(tempnum *(9/5) + 32 )}'F` ;
    } else {
        Para.textContent = "Please select the CONVERTION !!" ;
    }
}
