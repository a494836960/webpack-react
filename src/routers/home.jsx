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
					path: 'qualification',
					getComponents(location,cb){
						require.ensure([],require=>{
							console.log('Index')
							cb(null,require('page/home/Qualification').default)
						},'home')
					}
				},{
					path: 'development',
					getComponents(location,cb){
						require.ensure([],require=>{
							console.log('Index')
							cb(null,require('page/home/Development').default)
						},'home')
					}
				},{
					path: 'about',
					getComponents(location,cb){
						require.ensure([],require=>{
							console.log('Index')
							cb(null,require('page/home/About').default)
						},'home')
					}
				},{
					path: 'professional',
					getComponents(location,cb){
						require.ensure([],require=>{
							console.log('Index')
							cb(null,require('page/home/Professional').default)
						},'home')
					}
				}
			])
		})
	}
}