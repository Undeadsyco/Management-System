/* eslint-disable import/no-extraneous-dependencies */
const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let win;

app.whenReady().then(() => {
  // eslint-disable-next-line global-require
  const { screen } = require('electron');

  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const createWindow = () => {
    win = new BrowserWindow({
      width: width + 50,
      height: height + 50,
      // webPreferences: {
      //   nodeIntegration: true,
      // },
    });

    win.maximize();

    win.loadURL(
      isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
    );

    // win.webContents.openDevTools();
  };

  createWindow();

  app.on('ready', () => {
    globalShortcut.register('escape', () => {
      console.log('escape is pressed');
      win.setFullScreen(false);
    });
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregister('Escape');
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
