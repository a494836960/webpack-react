module.exports = {
	path:'recruitment',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				console.log('33')
				cb(null,require('page/recruitment/Index').default)
			},'recruitment')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'detail/:type',
					getComponents(location,cb){
						require.ensure([],require=>{
							
							cb(null,require('page/recruitment/Detail').default)
						},'recruitment')
					}
				}
			])
		})
	}
}