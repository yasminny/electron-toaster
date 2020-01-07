const remote = require('electron').remote;

export const closeWindow = () => {
	let win = remote.getCurrentWindow();
	win.close()
}

export const minimizeWindow = () => {
	const win = remote.getCurrentWindow();
	win.minimize()
}
