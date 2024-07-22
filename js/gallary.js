
let btnWs = document.getElementById("ws");
let menuWs = document.querySelector(".menu_child_ws");


btnWs.addEventListener("click", () =>{

    menuWs.classList.toggle("ocultar");

    
})

let btnLogo = document.getElementById("logo");
let menuLogo = document.querySelector(".menu_child_logo");


btnLogo.addEventListener("click", () =>{

    menuLogo.classList.toggle("ocultar");

    
})

let btnExpo = document.getElementById("expo");
let menuExpo = document.querySelector(".menu_child_expo");


btnExpo.addEventListener("click", () =>{

    menuExpo.classList.toggle("ocultar");

    
})

let btnPapel = document.getElementById("papel");
let menuPapel = document.querySelector(".menu_child_papel");


btnPapel.addEventListener("click", () =>{

    menuPapel.classList.toggle("ocultar");

    
})

let btnFolleto = document.getElementById("folleto");
let menuFolleto = document.querySelector(".menu_child_folloto");


btnFolleto.addEventListener("click", () =>{

    menuFolleto.classList.toggle("ocultar");

    
})








// show image



let btnWSb = document.getElementById("ws_b");
let btnWSsp = document.getElementById("ws_sp");
let btnWSnico = document.getElementById("ws_nico");
let btnWSnz = document.getElementById("ws_nz");
let btnLogoG = document.getElementById("logo_g");
let btnLogoA = document.getElementById("logo_a");
let btnExpo1 = document.getElementById("expo1");
let btnExpo2 = document.getElementById("expo2");
let btnExpo3 = document.getElementById("expo3");
let btnPapelM = document.getElementById("papel_m");
let btnCDb = document.getElementById("cd_b");
let btnFtrisnow = document.getElementById("f_trisnow");
let btnFaida = document.getElementById("f_aida");




let imageWSb = document.getElementById("image_ws_b");
let imageWSsp = document.getElementById("image_ws_sp");
let imageWSnico = document.getElementById("image_ws_nico");
let imageWSnz = document.getElementById("image_ws_nz");
let imageLogo1 = document.getElementById("image_logo1");
let imageLogo2 = document.getElementById("image_logo2");
let imageExpo1 = document.getElementById("image_expo1");
let imageExpo2 = document.getElementById("image_expo2");
let imageExpo3 = document.getElementById("image_expo3");
let imagePapelM = document.getElementById("image_papel_m");
let imageCDb = document.getElementById("image_cd_b");
let imageFtrisnow = document.getElementById("image_f_trisnow");
let imageFaida = document.getElementById("image_f_aida");


window.onload = function(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;
    
}

// show web zone

function showWSb(){

    imageWSb.style.opacity = 1;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnWSb.addEventListener("click", showWSb)


function showWSsp(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 1;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnWSsp.addEventListener("click", showWSsp)

function showWSnico(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 1;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnWSnico.addEventListener("click", showWSnico)

function showWSnz(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 1;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnWSnz.addEventListener("click", showWSnz)



function showLogo1(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 1;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnLogoG.addEventListener("click", showLogo1)

function showLogo2(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 1;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnLogoA.addEventListener("click", showLogo2)

// show expo

function showExpo1(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 1;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnExpo1.addEventListener("click", showExpo1)


function showExpo2(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 1;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnExpo2.addEventListener("click", showExpo2)


function showExpo3(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 1;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnExpo3.addEventListener("click", showExpo3)


function showPapelM(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 1;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnPapelM.addEventListener("click", showPapelM)

function showCDb(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 1;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 0;


};

btnCDb.addEventListener("click", showCDb)

function showFtrisnow(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 1;
    imageFaida.style.opacity = 0;


};

btnFtrisnow.addEventListener("click", showFtrisnow)


function showFaida(){

    imageWSb.style.opacity = 0;
    imageWSsp.style.opacity = 0;
    imageWSnico.style.opacity = 0;
    imageWSnz.style.opacity = 0;
    imageLogo1.style.opacity = 0;
    imageLogo2.style.opacity = 0;
    imageExpo1.style.opacity = 0;
    imageExpo2.style.opacity = 0;
    imageExpo3.style.opacity = 0;
    imagePapelM.style.opacity = 0;
    imageCDb.style.opacity = 0;
    imageFtrisnow.style.opacity = 0;
    imageFaida.style.opacity = 1;


};

btnFaida.addEventListener("click", showFaida)





