const { app, BrowserWindow, Menu, ipcMain } = require("electron");

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 900,
    height: 550,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    icon: __dirname + "/icon.jpg",
  });
  win.loadURL("https://nifty-golick-17f1ee.netlify.app/");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on("CloseApp", () => {
  app.quit();
});
