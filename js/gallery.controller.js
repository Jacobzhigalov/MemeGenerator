'use strict'

var gUserMemes = []

_createSavedMemes()
renderSavedMemesGallery()
// localStorage.clear()

var gImgs = [
    { id: 1, url: 'meme-imgs (square)/1.jpg'},
    { id: 2, url: 'meme-imgs (square)/2.jpg' },
    { id: 3, url: 'meme-imgs (square)/3.jpg' },
    { id: 4, url: 'meme-imgs (square)/4.jpg' },
    { id: 5, url: 'meme-imgs (square)/5.jpg' },
    { id: 6, url: 'meme-imgs (square)/6.jpg' },
    { id: 7, url: 'meme-imgs (square)/7.jpg' },
    { id: 8, url: 'meme-imgs (square)/8.jpg' },
    { id: 9, url: 'meme-imgs (square)/9.jpg' },
    { id: 10, url: 'meme-imgs (square)/10.jpg' },
    { id: 11, url: 'meme-imgs (square)/11.jpg' },
    { id: 12, url: 'meme-imgs (square)/12.jpg' },
    { id: 13, url: 'meme-imgs (square)/13.jpg' },
    { id: 14, url: 'meme-imgs (square)/14.jpg' },
    { id: 15, url: 'meme-imgs (square)/15.jpg' },
    { id: 16, url: 'meme-imgs (square)/16.jpg' },
    { id: 17, url: 'meme-imgs (square)/18.jpg' }
];


function renderGallery() {
    const images = gImgs
    const strHTML = images
        .map(
            (image) => `
        <img src="${image.url}" onclick="onImgClicked(${image.id})" class="meme">
        `
        )
        .join('')
    const elImgGallery = document.querySelector('.main-gallery')
    elImgGallery.innerHTML = strHTML

    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'flex'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "none";
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";
}

function _createSavedMemes(){
    gUserMemes = loadFromStorage('memesDB')
    if (gUserMemes && gUserMemes.length > 0) return
    gUserMemes = []
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