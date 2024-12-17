const { app, BrowserWindow } = require('electron');

let mainWindow;
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    mainWindow.loadFile('dist/index.html');  
    //mainWindow.loadURL('http://localhost:3000');
});