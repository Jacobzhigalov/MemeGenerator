'use strict'

var gImgs = [{ id: 1, url: 'meme-imgs (square)/1.jpg'},
             { id: 2, url: 'meme-imgs (square)/2.jpg'},
             { id: 3, url: 'meme-imgs (square)/3.jpg'},
             { id: 4, url: 'meme-imgs (square)/4.jpg'},
             { id: 5, url: 'meme-imgs (square)/5.jpg'},
             { id: 6, url: 'meme-imgs (square)/6.jpg'},
             { id: 7, url: 'meme-imgs (square)/7.jpg'}
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
}