const path = require('path')
const {BrowserWindow, app} = require('electron')

let win

const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath('./src/img/favicon.png');

function createWindow(){
    win = new BrowserWindow({
        width: 450,
        height: 625,
        resizable: false,
        opacity: 0.9,
        icon: image
})

    win.loadFile('src/index.html')
}

app.on('closed', ()=>{
    win = null
})

app.on('ready',createWindow)