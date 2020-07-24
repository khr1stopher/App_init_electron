// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainwindow = null;
let start = null;

start = () => {
	mainwindow = new BrowserWindow({
    show: false,
    center: true,
    frame: false,
		// transparent: true,
		webPreferences: {
      preload: path.join(__dirname + '/preload.js'),
      nodeIntegration: true
		}
	})
	mainwindow.loadFile(__dirname + '/src/index.html');
	mainwindow.once('ready-to-show', () => {
		mainwindow.show();
		mainwindow.webContents.openDevTools();
	})
	mainwindow.on('closed', () => {
		mainwindow = null
	})
}
app.on('ready', start);