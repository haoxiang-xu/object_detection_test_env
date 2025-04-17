const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const axios = require("axios");

let overlayWindow = null;
let controlPanelWindow = null;

const createOverlay = () => {
  const checkServerAndLoadURL = (url) => {
    axios
      .get(url)
      .then(() => {
        overlayWindow.loadURL(url);
      })
      .catch((error) => {
        console.error("Server not ready, retrying...", error);
        setTimeout(() => checkServerAndLoadURL(url), 2000);
      });
  };
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
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  checkServerAndLoadURL("http://localhost:3000");
  overlayWindow.setIgnoreMouseEvents(true, { forward: true });
  overlayWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  overlayWindow.on("closed", () => {
    overlayWindow = null;
  });
};
const createControlPanel = () => {
  const checkControlPanelURL = (url) => {
    axios
      .get("http://localhost:3000") // just check root is up
      .then(() => {
        controlPanelWindow.loadURL(url);
      })
      .catch(() => {
        console.log("Control panel waiting for server...");
        setTimeout(() => checkControlPanelURL(url), 1500);
      });
  };
  const { width, height } = screen.getPrimaryDisplay().bounds;

  const panelWidth = 128;
  const panelHeight = 40;

  controlPanelWindow = new BrowserWindow({
    width: panelWidth,
    height: panelHeight,
    x: Math.floor((width - panelWidth) / 2),
    y: height - panelHeight - 20,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,
    backgroundColor: '#00000000',
    vibrancy: "sidebar",
    hasShadow: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  checkControlPanelURL("http://localhost:3000/#/control");
  controlPanelWindow.setVisibleOnAllWorkspaces(true, {
    visibleOnFullScreen: true,
  });
  controlPanelWindow.on("closed", () => {
    controlPanelWindow = null;
  });
};
app.on("window-all-closed", (e) => {
  e.preventDefault();
});
app.whenReady().then(() => {
  createOverlay();
  createControlPanel();
});
