module.exports = {
	path: '*',
	onEnter: (_, replaceState) => {
		replaceState('/home')
	}
}