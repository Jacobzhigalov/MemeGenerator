'use strict'

console.log('Hello');
let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery()
}


function renderMeme(meme) {
    const elImg = new Image() //
    elImg.src = gImgs[meme - 1].url//
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        gCtx.font = "30px impact";
        gCtx.strokeStyle = "black";
        gCtx.textAlign = "center";

        gCtx.fillText(gMeme.lines[0].txt.toUpperCase(), 150, 50);
        gCtx.fillText(gMeme.lines[1].txt.toUpperCase(), 150, 250)

    }
}

function onInputText() {
    let text = document.getElementById("myInput").value;
    console.log(text)
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme(gMeme.selectedImgId)
}

function onSwitchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
    document.getElementById("myInput").value = gMeme.lines[gMeme.selectedLineIdx].txt;
}



function onImgClicked(ev) {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'grid'
    gMeme.selectedImgId = ev
    renderMeme(ev)
}


function onGalleryClick() {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'flex'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";

    gMeme.selectedLineIdx = 0
    gMeme.lines[0].txt = 'Hello there'
    gMeme.lines[1].txt = ''
    document.getElementById("myInput").value = ''
}

function onAboutClick() {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "block";
}


