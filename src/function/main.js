const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const datastore = require("./database/datastore");
const globalSettings = require("./settings/global");
datastore();
globalSettings("Hello from electron main.js");

require("update-electron-app")({
  repo: "midoghranek/reactron",
  updateInterval: "1 hour"
});

function createWindow() {
  let win = new BrowserWindow({
    width: 1100,
    height: 500,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "../preload/preload.js")
    }
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  win.setMenu(null);
  win.openDevTools();
  win.on("closed", () => (win = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
