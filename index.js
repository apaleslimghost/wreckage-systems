const { menubar } = require('menubar')
const { Menu, shell } = require('electron')

const mb = menubar({
   browserWindow: {
      width: 560,
      height: 315,
   },
   preloadWindow: true
})

const contextMenu = Menu.buildFromTemplate([
	{ label: 'Quit', click: () => mb.app.quit() }
])

mb.on('ready', () => {
	mb.tray.on('right-click', () => mb.tray.popUpContextMenu(contextMenu))

   mb.window.webContents.on('will-navigate', openExternal)
   mb.window.webContents.on('new-window', openExternal)
})

function openExternal(event, url) {
   event.preventDefault()
   shell.openExternal(url)
}
