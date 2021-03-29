const { menubar } = require('menubar')
const { Menu } = require('electron')

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
})
