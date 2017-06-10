module.exports = {
	path:'home',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				console.log('Index')
				cb(null,require('page/home/Index').default)
			},'home')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path: 'honor',
					getComponents(location,cb){
						require.ensure([],require=>{
							console.log('Index')
							cb(null,require('page/home/Index').default)
						},'home')
					}
				}
			])
		})
	}
}