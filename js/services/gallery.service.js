'use strict'


function getTemplates() {
    console.log(gFilterBy)
    if (gFilterBy === 'All') return gImgs

    // if (gFilterBy === 'cinema') {
    //     let filteredImages = gImgs.filter(img => img.keywords.find(keyword => keyword === 'cinema'))
    //     console.log(filteredImages)
    //     return filteredImages
    // }

    switch (gFilterBy) {
        case 'cinema':
            let filteredImagesByCinema = gImgs.filter(img => img.keywords.find(keyword => keyword === 'cinema'))
            console.log(filteredImagesByCinema)
            return filteredImagesByCinema
        case 'funny':
            let filteredImagesByFunny = gImgs.filter(img => img.keywords.find(keyword => keyword === 'funny'))
            console.log(filteredImagesByFunny)
            return filteredImagesByFunny
        case 'animals':
            let filteredImagesByAnimals = gImgs.filter(img => img.keywords.find(keyword => keyword === 'animals'))
            console.log(filteredImagesByAnimals)
            return filteredImagesByAnimals
        case 'cute':
            let filteredImagesByCute = gImgs.filter(img => img.keywords.find(keyword => keyword === 'cute'))
            console.log(filteredImagesByCute)
            return filteredImagesByCute
        case 'politics':
            let filteredImagesByPolitics = gImgs.filter(img => img.keywords.find(keyword => keyword === 'politics'))
            console.log(filteredImagesByPolitics)
            return filteredImagesByPolitics
    }

}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function _createSavedMemes() {
    gUserMemes = loadFromStorage('memesDB')
    if (gUserMemes && gUserMemes.length > 0) return
    gUserMemes = []
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