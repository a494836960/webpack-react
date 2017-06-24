module.exports = {
	path:'activity',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				console.log('Index')
				cb(null,require('page/activity/Index').default)
			},'activity')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'detail/:id',
					getComponents(location, cb){
						require.ensure([],require=>{
							cb(null, require('page/activity/Detail').default)
						},'activity')
					}
				}
			])
		})
	}
}