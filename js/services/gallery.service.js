'use strict'

var gUserMemes = []

function getTemplates() {
    if (gFilterBy === 'All') return gImgs

    switch (gFilterBy) {
        case 'cinema':
            let filteredImagesByCinema = gImgs.filter(img => img.keywords.find(keyword => keyword === 'cinema'))
            return filteredImagesByCinema
        case 'funny':
            let filteredImagesByFunny = gImgs.filter(img => img.keywords.find(keyword => keyword === 'funny'))
            return filteredImagesByFunny
        case 'animals':
            let filteredImagesByAnimals = gImgs.filter(img => img.keywords.find(keyword => keyword === 'animals'))
            return filteredImagesByAnimals
        case 'cute':
            let filteredImagesByCute = gImgs.filter(img => img.keywords.find(keyword => keyword === 'cute'))
            return filteredImagesByCute
        case 'politics':
            let filteredImagesByPolitics = gImgs.filter(img => img.keywords.find(keyword => keyword === 'politics'))
            return filteredImagesByPolitics
    }

}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function _createSavedMemes() {
    gUserMemes = loadFromStorage('memesDB')
    if (gUserMemes === null) gUserMemes = []
    if (gUserMemes && gUserMemes.length > 0) return
}

function closeAllExceptGallery() {
    let elGallery = document.querySelector('.main-gallery')
    elGallery.style.display = 'flex'
    let elMemeGenerator = document.querySelector('.main-meme-generator')
    elMemeGenerator.style.display = 'none'
    let elMyMemes = document.querySelector('.main-saved-memes')
    elMyMemes.style.display = "none";
    let elAbout = document.querySelector('.main-about')
    elAbout.style.display = "none";
}