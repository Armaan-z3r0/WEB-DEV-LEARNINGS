let button = document.getElementById("mybtn");
let para = document.getElementById("myPara");
const lowerAlphabetChar = "abcdefghijkhlmnopqrstuvwxyz" ;
const higherAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const numberChar = "0123456789" ;
const symbolChar = "~`@#$%^&*()_+{}[]|\\/*-+.," ;
const allowdChar = lowerAlphabetChar + higherAlphabetChar + numberChar + symbolChar ;
const passwordLenght = 12 ;
button.onclick = function(){
    let password = "" ;
    let randomIndex ;
    for (let index = 0; index < passwordLenght; index++) {
        randomIndex = Math.floor(Math.random()*88);
        password += allowdChar[randomIndex];
    }
    para.textContent = password ;
}