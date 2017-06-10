module.exports = {
	path:'brand',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				console.log('Index')
				cb(null,require('page/brand/Index').default)
			},'brand')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'detail/:id',
					getComponents(location, cb){
						require.ensure([],require=>{
							cb(null, require('page/brand/Detail').default)
						},'brand')
					}
				}
			])
		})
	}
}