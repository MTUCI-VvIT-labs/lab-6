const { app, BrowserWindow } = require('electron')

const path = require('path')

// переменная для создания стартового окна
const createWindow = () => {
    const win = new BrowserWindow({
        width: 490,
        height: 678,
        roundedCorners: true,
    })
    win.setMenuBarVisibility(false)
    win.loadFile('index.html')
}

// создание окна после загрузки приложения
app.whenReady().then(() => {
    createWindow()
})

// команды для того, чтобы электрон работал на винде
app.commandLine.appendSwitch('no-sandbox');
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-gpu-compositing');
app.commandLine.appendSwitch('disable-gpu-rasterization');
app.commandLine.appendSwitch('disable-gpu-sandbox');
app.commandLine.appendSwitch('--no-sandbox');
app.disableHardwareAcceleration();