// Modules to control application life and create native browser window
const path = require('path')
const electron = require('electron')

const app = electron.app
const Menu = electron.Menu
const Tray = electron.Tray
const BrowserWindow = electron.BrowserWindow

let tray = null
let win = null
let quitting = false
const express = require('./app/express');
const squirrel = require('./config/squirrel')

// create main menue bar
const createMenu = () => {
  require('./menu/main')
}

// create tray icon options
const createTray = () => {
  const variant = (process.platform === 'darwin' ? 'Black' : 'White')
  const iconPath = path.resolve(__dirname, './app/public/img/logo.ico')

  tray = new Tray(iconPath)

  const trayMenu = Menu.buildFromTemplate([{
      label: 'Preferences...',
      click: () => {
        win.show()
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: () => {
        app.quit()
      }
    }
  ])
  tray.setContextMenu(trayMenu)
}
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const createWindow = () => {
  const iconPath = path.resolve(__dirname, './app/public/img/logo.ico')
  const winUrl = "http://localhost:3000/"
  //  express();
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    icon: iconPath,
    webPreferences: {
      webSecurity: false
    }
  })
  // and load the index.html of the app.
  win.loadURL(winUrl)
  // Open the DevTools.
   win.webContents.openDevTools()

  // Emitted when the window is closed but keep the app runing.
  win.on('close', (evt) => {
    if (quitting) {
      return
    }

    evt.preventDefault()
    win.hide()
  })
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    tray = null
    win = null
  })
}

app.on('before-quit', () => {
  quitting = true
})
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createMenu()
  createTray()
  createWindow()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) createWindow()
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.