module.exports = {
	path:'join',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				cb(null,require('page/join/Index').default)
			},'news')
		}
	}
}