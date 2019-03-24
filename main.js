const { app, BrowserWindow } = require('electron');

function createWindow(){
    let window = new BrowserWindow({width: 1000, height: 500})

    window.loadFile('index.html');
    window.webContents.openDevTools();
}

app.on('ready', createWindow)