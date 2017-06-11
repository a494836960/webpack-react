module.exports = {
	path:'user',

	indexRoute:{
		getComponents(location,cb){
			require.ensure([],require=>{
				cb(null,require('page/user/Login').default)
			},'user')
		}
	},

	getChildRoutes(location,cb){
		require.ensure([],require=>{
			cb(null,[
				{
					path:'forgetPassword',
					getComponents(location,cb){
						require.ensure([],require=>{
							cb(null,require('page/user/ForgetPassword').default)
						},'user')
					}
				}
			])
		})
	}
}