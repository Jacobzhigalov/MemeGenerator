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


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme'
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    reader.onload = function (event) {
        let img = new Image()
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
    console.log(reader)
}

function renderImg(img) {
    gImgs.push({ id: gId++, url: img.src })
    gMeme.selectedImgId = gId - 1
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    resetInputParameters()
    renderMeme(gMeme.selectedImgId)
}


function _saveCreatedMemes() {
    saveToStorage('memesDB', gUserMemes)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
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

function getMemeSettings() {

    gCtx.strokeStyle = "black";
    gCtx.lineWidth = 4;
    gCtx.font = gMeme.lines[0].size + `px ${gMeme.lines[0].font}`
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.strokeText(gMeme.lines[0].txt.toUpperCase(), 150, 50)
    gCtx.fillText(gMeme.lines[0].txt.toUpperCase(), 150, 50)
    gCtx.font = gMeme.lines[1].size + `px ${gMeme.lines[1].font}`
    gCtx.textAlign = gMeme.lines[1].align
    gCtx.fillStyle = gMeme.lines[1].color
    gCtx.strokeText(gMeme.lines[1].txt.toUpperCase(), 150, 250)
    gCtx.fillText(gMeme.lines[1].txt.toUpperCase(), 150, 250)

    // gCtx.textAlign = gMeme.lines[1].align
    // gCtx.fillStyle = gMeme.lines[1].color
    // gCtx.font = gMeme.lines[1].size + `px ${gMeme.lines[1].font}`;
    // gCtx.fillText(gMeme.lines[1].txt.toUpperCase(), 150, 250)
    // gCtx.strokeText(gMeme.lines[1].txt.toUpperCase(), 150, 250)
}




