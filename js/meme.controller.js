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
        gCtx.strokeStyle = "black";
        gCtx.lineWidth = 2;
        gCtx.textAlign = gMeme.lines[0].align
        gCtx.fillStyle = gMeme.lines[0].color
        gCtx.font = gMeme.lines[0].size + `px ${gMeme.lines[0].font}`;
        gCtx.fillText(gMeme.lines[0].txt.toUpperCase(), 150, 50);
        gCtx.strokeText(gMeme.lines[0].txt.toUpperCase(), 150, 50);
        gCtx.textAlign = gMeme.lines[1].align
        gCtx.fillStyle = gMeme.lines[1].color
        gCtx.font = gMeme.lines[1].size + `px ${gMeme.lines[1].font}`;
        gCtx.fillText(gMeme.lines[1].txt.toUpperCase(), 150, 250)
        gCtx.strokeText(gMeme.lines[1].txt.toUpperCase(), 150, 250)
    }

}


function onInputText() {
    let text = document.getElementById("myInput").value;
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme(gMeme.selectedImgId)
}

function onTextAlign(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value
    renderMeme(gMeme.selectedImgId)

}

function onSwitchLine() {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1
        if (gMeme.lines[gMeme.selectedLineIdx].txt === '') {
            gMeme.lines[gMeme.selectedLineIdx].txt = 'Hello there!'
            renderMeme(gMeme.selectedImgId)
        }
    }
    else gMeme.selectedLineIdx = 0
    document.getElementById("myInput").value = gMeme.lines[gMeme.selectedLineIdx].txt;
}


function onDecreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    renderMeme(gMeme.selectedImgId)
}


function onIncreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    renderMeme(gMeme.selectedImgId)
}

function onSetFont(value) {
    gMeme.lines.map(line => line.font = value)
    renderMeme(gMeme.selectedImgId)
}


function onColorChange() {
    let getColor = document.getElementById('fontColor')
    gMeme.lines[gMeme.selectedLineIdx].color = getColor.value
    renderMeme(gMeme.selectedImgId)
}

function onSaveMeme() {
    const savedMeme = saveImgCanvas(gElCanvas)
    gUserMemes.push(savedMeme)
    renderSavedMemesGallery()
    _saveCreatedMemes()
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}


function onImgClicked(ev) {
    let elFilter = document.querySelector('.filter')
    elFilter.style.display = 'none'
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "none";
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'grid'
    gMeme.selectedImgId = ev
    renderMeme(ev)
}


function onGalleryClick() {
    let elFilter = document.querySelector('.filter')
    elFilter.style.display = 'block'
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'flex'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "none";
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";
    resetInputParameters()
}


function onMyMemesClick() {
    let elFilter = document.querySelector('.filter')
    elFilter.style.display = 'none'
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "flex";
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";

}


function onAboutClick() {
    let elFilter = document.querySelector('.filter')
    elFilter.style.display = 'none'
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'none'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "none";
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "block";
}



