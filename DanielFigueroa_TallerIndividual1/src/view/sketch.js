let camisa1;
let camisa2;
let camisa3;
let Camisa4;
let camisa5;
let pantalon1;
let pantalon2;
let pantalon3;
let pantalon4;
let characters;
let load;
let save;
let cuerpo;
let pantallaInicio;
let click;
var pantalla = 0;
var inicio;

function setup() {
    camisa1 = [];
    camisa2 = [];
    camisa3 = [];
    camisa4 = [];
    camisa5 = [];
    pantalon1 = [];
    pantalon2 = [];
    pantalon3 = [];
    pantalon4 = [];

    createCanvas(1200, 760);
    camisa1 = loadImage ("images/Camisa1.png");
    camisa2 = loadImage ("images/Camisa2.png");
    camisa3 = loadImage ("images/Camisa3.png");
    camisa4 = loadImage ("images/Camisa4.png");
    camisa5 = loadImage ("images/Camisa5.png");
    pantalon1 = loadImage ("images/Pantalon1.png");
    pantalon2 = loadImage ("images/Pantalon2.png");
    pantalon3 = loadImage ("images/Pantalon3.png");
    pantalon4 = loadImage ("images/Pantalon4.png");
    characters = loadImage ("images/Cuerpo.png");
    load = loadImage ("images/Load.png");
    save = loadImage ("images/Save.png");
    nombre = loadImage ("images/Nombre1.png");
    menu = loadImage ("images/menu.png"); 
    cuerpo = loadImage ("images/Cuerpo.png");
    click = loadImage ("images/ClickDrag3.png");
    pantallaInicio = loadImage ("images/pantallaInicio.png");
        
        pantalla=0;
}

function draw() {
    background (100);
    switch (pantalla){
    case 0://inicio
    image (menu,0,0, width/4, height/2);
    image (menu,900,0, width/4, height/2);
    image (pantallaInicio,0,0,1200,760);
    image (cuerpo,500,200,220,350);
    //Posicion personajes creados
    //image (cuerpo,850,170,width/18,height/9);
    //image (cuerpo,850,(170+540)/1.7,width/18,height/9);
    //image (cuerpo,850,(170+540)/2.5,width/18,height/9);
    //image (cuerpo,850,540,width/18,height/9);
    //camisas
    image (camisa1,55,160,90,135);
    image (camisa2,(55+268)/2,160,90,135);
    image (camisa3,268,160,90,135);
    image (camisa4,(55+268)/3,300,90,135);
    image (camisa5,(55+268)/1.52,300,90,135);
    //pantalones
    image (pantalon1,(55+268)/3,370,90,135);
    image (pantalon2,(55+268)/1.52,370,90,135);
    image (pantalon3,(55+268)/3,480,90,135);
    image (pantalon4,(55+268)/1.52,480,90,135);
    break;
    /*
    case 1://principal
    image (juegos,0,0);
    break;
    case 2://juego
    
    image (moneda,920,505);
    textSize(30);
    fill(0);
    
    dibujarPersonaje(personaje);
    break;
    */
}
}



/*
function dibujarRoca(e) {
    //console.log(e)
   image (roca,e.x, e.y+30);
}
*/