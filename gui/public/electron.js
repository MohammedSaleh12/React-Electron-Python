const { app, BrowserWindow, screen} = require('electron')
const path = require("path")
const os = require('os')
const isDev = require("electron-is-dev")
const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer')


app.whenReady().then(() => {
  installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
});

function createWindow () {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    width,
    height,
    minWidth: 800, // set a min width!
    minHeight: 600, // and a min height!
    frame: false,
    titleBarStyle: 'hidden', 
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL(
      isDev ? "http://localhost:3000" : 'file://${path.join(__dirname, "../build/index.html")}'
  )
  // Using require

  
  
 
  // Open the DevTools.
  // win.webContents.openDevTools()
}


app.whenReady().then(createWindow)





// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
