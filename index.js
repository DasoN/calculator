const path = require('path')
const {BrowserWindow, app} = require('electron')

let win

function createWindow(){
    win = new BrowserWindow({
        width: 450,
        height: 600,
        resizable: false,
        opacity: 0.9
})

    win.loadFile('index.html')
}

app.on('closed', ()=>{
    win = null
})

app.on('ready',createWindow)