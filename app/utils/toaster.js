const ipc = require("electron").ipcRenderer;
const remote = require('electron').remote;

export const showToaster = (url, options) => {
	ipc.send( 'show-toaster', url, options)
}

export const closeToaster = () => {
	let win = remote.getCurrentWindow();
	win.close()
}
