const electron = require('electron')
const url      = require('url')
const path     = require('path')

const { app, BrowserWindow, Menu, Tray } = electron

//process.env.NODE_ENV = 'production'

let mainWindow
let tray

// Listen for app to be ready
app.on('ready', () => {
    // Create new window
    mainWindow = new BrowserWindow({ width: 480, height: 600, show: false })

    // Load HTML file into window
    mainWindow.loadURL(process.env.LOCAL_URL || url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    // Show the window once ready
    mainWindow.on('ready-to-show', () => {
        console.log('ready-to-show')
        mainWindow.show()
    })

    // Quit app when closed
    mainWindow.on('closed', () => {
        app.quit()
    })

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)

    // Insert Menu
    Menu.setApplicationMenu(mainMenu)
    
    tray = new Tray(path.join(__dirname, 'stopwatch.ico'))
    tray.setToolTip('Timer')

    tray.on('click', () => {

        if (mainWindow.isVisible()) {
            mainWindow.hide()
        }
        else {
            mainWindow.show()
        }
    })

})

// Create Menu Template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit()
                }
            }
        ]
    },
    {
        label: 'About'
    }
]

// If Mac, add empty obj
if (process.platform === 'darwin') {
    mainMenuTemplate.unshift({})
}

// Add Dev Tools
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Dev Tools',
        submenu: [
            {
                label: 'Toggle Dev Tools',
                accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools()
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}