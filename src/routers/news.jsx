module.exports = {
	path:'news',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				cb(null,require('page/news/Index').default)
			},'news')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'detail/:id',
					getComponents(location,cb){
						require.ensure([],require=>{
							cb(null,require('page/news/Detail').default)
						},'news')
					}
				}
			])
		})
	}
}