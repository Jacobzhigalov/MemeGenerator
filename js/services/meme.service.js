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


function _saveCreatedMemes() {
    saveToStorage('memesDB', gUserMemes)
}


function getMeme() {
    return gMeme
}



