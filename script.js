//  create the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
//  set the canvas and avatar size
canvas.height= 400;
canvas.width= 400;
const pixelSize = 40;
//  color palettes
const backPalette = ["#ecabab", "#f9cb9c", "#ffffff", "#fff597", "#a5aed6", "#e0faff", "#dcf0e4", "#cff0bb"]
const skinPalette = ["#ffedd8","#f3d5b5","#e7bc91","#d4a276","#bc8a5f","#a47148","#8b5e34","#6f4518","#603808","#583101"];
const eyePalette = ["#814f12", "#7e8546", "#787e3f", "#81badd", "#81b1ce", "#579ec9", "#989696", "#7c7c7c"];
const nosePalette = ["#c38a8a", "#8d7c7c", "#905a5a", "#d2b1b1", "#8d6868"];
const mouthPalette = ["#f9e4d0", "#ecc0b0", "#9c3940", "#710019", "#391306", "#fb6090", "#ffc5d0", "#ae388b" ,"#e983d8", "#000000"];
const tshirtPalette = ["#90e0ef","#6700fd","#9100fd","#f244a4","#f2134f","#ff7e47","#ffd60a","#70e000"];
//  set a function that returns a random element from array 
let getElement = (array) => array[Math.floor(Math.random() * array.length)];
//  set a function that draws pixels on the canvas
let drawPixel = (x, y, color, xspan = 1 , yspan = 1) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * pixelSize, y * pixelSize, xspan * pixelSize, yspan * pixelSize);}
//  set a function that creates random pixel avatars 
function generateAvatar() {
    //  draw backround
    drawPixel(0, 0, getElement(backPalette), canvas.width, canvas.height);
    //  random color for the hair
    const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16); 
    //  draw hair
    const hairStyles = [
        () => drawPixel(1, 2, randomColor(), 3, 3),   // back hair 
        () => drawPixel(2, 1, randomColor(), 6, 2),   //  shor hair    
        () => drawPixel(1, 1, randomColor(), 7, 9),   //  long hair 1
        () => drawPixel(2, 0, randomColor(), 8, 3)]   //  long hair 2
    getElement(hairStyles)();
    //  draw face
    drawPixel(2, 3, getElement(skinPalette), 5, 5);
    //  draw eyes
    const eyesColor = getElement(eyePalette);
    drawPixel(3, 4, eyesColor);
    drawPixel(6, 4, eyesColor);
    //  draw nose
    drawPixel(4, 5, getElement(nosePalette), 2);
    //  draw mouth
    drawPixel(3, 6, getElement(mouthPalette), 4);
    //  draw t-shirt
    drawPixel(2, 8, getElement(tshirtPalette), 6, 2);}
generateAvatar();
