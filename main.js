'use strict'

console.log('Hello');
let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
}




function onImgClicked(ev) {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    drawImg(ev.src)
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'block'
    
}

function onButtonClick(){
    const elInput = document.getElementById('fline').value
    console.log(elInput)
}


function drawImg(source) {
    const elImg = new Image() // Create a new html img element
    elImg.src = source // Send a network req to get that image, define the img src
    // When the image ready draw it on the canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}




function onGalleryClick() {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'flex'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";
}

function onAboutClick() {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "block";
}


