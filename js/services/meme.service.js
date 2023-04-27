'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Hello there',
            size: 30,
            align: 'center',
            color: 'red'
        },
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'red'


        }
    ]
}


function getMeme(){
    return gMeme
}


