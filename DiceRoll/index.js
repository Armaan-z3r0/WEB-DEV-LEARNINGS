let button = document.getElementById(`roll`); 

let dynamic_img = document.getElementById(`img-dynamic`) ;

let dice_imgs = [
                'images/one-img.png',
                'images/two-img.png',
                'images/three-img.png',
                'images/four-img.png',
                'images/five-img.png',
                'images/six-img.png'
                ] ;

button.addEventListener("click",function (event) {
    event.preventDefault() ;
    showRes() ;
});

function showRes() {
    let randomNumber = Math.floor((Math.random()*6)+1) ;
    
    switch (randomNumber) {
        case 1:
            dynamic_img.src = dice_imgs[0];
            break;
        case 2 : 
            dynamic_img.src = dice_imgs[1] ;
            break ;
        case 3 : 
            dynamic_img.src = dice_imgs[2] ;
            break ;
        case 4:
            dynamic_img.src = dice_imgs[3];
            break;
        case 5 : 
            dynamic_img.src = dice_imgs[4] ;
            break ;
        case 6 : 
            dynamic_img.src = dice_imgs[5] ;
            break ;
    }

    console.log(randomNumber);
}