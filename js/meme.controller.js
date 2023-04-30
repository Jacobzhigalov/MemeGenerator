'use strict'

console.log('Hello');
let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery()
    _createSavedMemes()
    renderSavedMemesGallery()
}


function renderMeme(meme) {
    const elImg = new Image()
    elImg.src = gImgs[meme - 1].url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        getMemeSettings()
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
    let elSpan = document.querySelector('.control-box button span')
    elSpan.style.display = 'block'
    setTimeout(() => {
        elSpan.style.display = 'none'
    }, 1500
    )
}



function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
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
    renderMeme(gMeme.selectedImgId)
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



