var menuItems = document.getElementById('menuItems');

function menuToggle(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }else{
        menuItems.style.maxHeight = '0px';
    }
}

var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = ()=>{
    productImg.src = smallImg[0].src
}

smallImg[1].onclick = ()=>{
    productImg.src = smallImg[1].src
}

smallImg[2].onclick = ()=>{
    productImg.src = smallImg[2].src
}

smallImg[3].onclick = ()=>{
    productImg.src = smallImg[3].src
}
