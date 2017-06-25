import tools from 'verdor/tools'
module.exports = {
	path:'order',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				cb(null,require('page/order/Add').default)
			},'order')
		}
	},
	onEnter: (_, replaceState) => {
		let user = tools.SS.getItem('user');
		
		if(!(user.lastTime && new Date() - user.lastTiem <= 3600 * 24 * 1000 && !user.isLogin)){
			replaceState('/user');
		}		
	},
	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'Search',
					getComponents(location, cb){
						require.ensure([],require=>{
							cb(null, require('page/order/Search').default)
						},'order')
					}
				},
				{
					path:'detail/:id',
					getComponents(location, cb){
						require.ensure([],require=>{
							cb(null, require('page/order/Detail').default)
						},'order')
					}
				},{
					path:'submit',
					getComponents(location, cb){
						require.ensure([],require=>{
							cb(null, require('page/order/Submit').default)
						},'order')
					}
				}
			])
		})
	}
}