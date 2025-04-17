const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let overlayWindow = null;

function createOverlay() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.bounds;
  overlayWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    hasShadow: false,
    skipTaskbar: true,
    fullscreen: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  overlayWindow.setIgnoreMouseEvents(true, { forward: true });
  overlayWindow.loadFile(path.join(__dirname, "index.html"));
  overlayWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  overlayWindow.on("closed", () => {
    overlayWindow = null;
  });
}

app.on("window-all-closed", (e) => {
  e.preventDefault();
});
app.on("activate", () => {
  if (overlayWindow === null) {
    createOverlay();
  }
});
app.whenReady().then(() => {
  createOverlay();
});
