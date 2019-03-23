const { app, BrowserWindow } = require('electron');

function createWindow(){
    let window = new BrowserWindow({width: 500, height: 500})

    window.loadFile('index.html');
}

app.on('ready', createWindow)