module.exports = {
	path:'/',
	//TODO 没有index
	getComponents(location,cb){
		require.ensure([],require=>{
			console.log('root')
			cb(null,require('page/index.jsx').default)
		},'root')
	},

	getChildRoutes(location,cb){
		require.ensure([], require=>{
			cb(null,[
				require('./brand.jsx'), //旗下品牌
				require('./news.jsx'), //新闻资讯
				require('./activity.jsx'), //品牌活动
				require('./order.jsx'), //订单相关
				require('./user.jsx'),	//登录注册之类
				require('./join.jsx'), //在线加盟
				require('./home.jsx')
			])
		})
	}
}