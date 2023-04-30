'use strict'

var gUserMemes = []
var gId = 1
var gFilterBy = 'All'

_createSavedMemes()
renderSavedMemesGallery()
// localStorage.clear()

var gImgs = [
    { id: gId++, url: 'meme-imgs (square)/1.jpg', keywords:['politics','funny'] },
    { id: gId++, url: 'meme-imgs (square)/2.jpg', keywords:['cute','animals'] },
    { id: gId++, url: 'meme-imgs (square)/3.jpg', keywords:['cute','animals'] },
    { id: gId++, url: 'meme-imgs (square)/4.jpg', keywords:['cute','animals'] },
    { id: gId++, url: 'meme-imgs (square)/5.jpg', keywords:['cute','funny'] },
    { id: gId++, url: 'meme-imgs (square)/6.jpg', keywords:['cinema','funny'] },
    { id: gId++, url: 'meme-imgs (square)/7.jpg', keywords:['cute','funny'] },
    { id: gId++, url: 'meme-imgs (square)/8.jpg', keywords:['cinema','funny'] },
    { id: gId++, url: 'meme-imgs (square)/9.jpg', keywords:['cute','funny'] },
    { id: gId++, url: 'meme-imgs (square)/10.jpg', keywords:['politics','funny'] },
    { id: gId++, url: 'meme-imgs (square)/11.jpg', keywords:['funny'] },
    { id: gId++, url: 'meme-imgs (square)/12.jpg', keywords:['funny'] },
    { id: gId++, url: 'meme-imgs (square)/13.jpg', keywords:['cinema'] },
    { id: gId++, url: 'meme-imgs (square)/14.jpg', keywords:['cinema','funny'] },
    { id: gId++, url: 'meme-imgs (square)/15.jpg', keywords:['cinema','funny'] },
    { id: gId++, url: 'meme-imgs (square)/16.jpg', keywords:['cinema','funny'] },
    { id: gId++, url: 'meme-imgs (square)/18.jpg', keywords:['cinema','cute'] }
]


function renderGallery() {
    const templates = getTemplates()
    const strHTML = templates
        .map(
            (image) => `
        <img src="${image.url}" onclick="onImgClicked(${image.id})" class="meme">
        `
        )
        .join('')
    const elImgGallery = document.querySelector('.main-gallery')
    elImgGallery.innerHTML = strHTML
    closeAllExceptGallery()
}

function onSetFilter(elFilterBy) {
    setFilterBy(elFilterBy)
    renderGallery()
}


function renderSavedMemesGallery() {
    const savedMemes = gUserMemes
    const strHtml = gUserMemes
        .map(
            (image) => `
        <img src="${image}" class="meme">
        `
        )
        .join('')
    const elSavedMemesGallery = document.querySelector('.main-saved-memes')
    elSavedMemesGallery.innerHTML = strHtml
}

