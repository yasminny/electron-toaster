const ipc = require("electron").ipcRenderer;

const showToaster = (url, options) => {
	ipc.send( 'show-toaster', url, options)
}

export default showToaster
