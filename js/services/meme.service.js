'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Hello there',
            size: 30,
            font: 'impact',
            align: 'center',
            color: 'white'
        },
        {
            txt: '',
            size: 30,
            font: 'impact',
            align: 'center',
            color: 'white'
        }
    ]
}


function resetInputParameters() {
    gMeme.selectedLineIdx = 0
    gMeme.lines[0].txt = 'Hello there'
    gMeme.lines[1].txt = ''
    document.getElementById("myInput").value = ''
    gMeme.lines[0].size = 30
    gMeme.lines[1].size = 30
    gMeme.lines[0].color = 'white'
    gMeme.lines[1].color = 'white'
}

function downloadCanvas(elLink) {
    
    const data = gElCanvas.toDataURL() 
    elLink.href = data 
    elLink.download = 'my-meme' 
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = function (event) {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        img.onload = onImageReady.bind(null, img)
        // Can also do it this way:
        // img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
    console.log(reader)
}

function renderImg(img) {
    // Draw the img on the canvas
    gImgs.push({ id: gId++, url: img.src })
    gMeme.selectedImgId = gId - 1
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    resetInputParameters()
    renderMeme(gMeme.selectedImgId)
}


function _saveCreatedMemes() {
    saveToStorage('memesDB', gUserMemes)
}


function getMeme() {
    return gMeme
}



