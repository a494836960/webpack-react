import tools from 'verdor/tools';

export const SET_HEAD = 'SET_HEAD';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const GET_HOME = 'GET_HOME';
export const SHOW_TIPS = 'SHOW_TIPS'

export function setHead (head) {
	return {type: SET_HEAD, head}
} 

export function toggleMenu(isShow){
	return {type: TOGGLE_MENU,isShow}
}


export function showTips(txt){
	return {type: SHOW_TIPS, txt}
}


/************* user ****************/

export function getUser(){

	return function (dispath){
		let user = SS.getItem('user');
		if(user.lastTime && new Date() - user.lastTiem <= 3600 * 24 * 1000){
			dispath({
					type: GET_USER,
					user
				})
		} else {
			return tools.fetch().then(response=>{
				response.lastTime = +new Date();
				response.isLogin = true;
				tools.SS.setItem('user', response);
				dispath({
					type: GET_USER,
					user:{
						response
					}
				})
			})
		}
	}
}

export function setUser(user){
	return {type: SET_USER, user}
}


/*
* 获取首页的数据
*/

export function getHome(){
	return function (dispath,getState){
		let state = getState();
		if(state.home.banner.length != 0){//home 页面只有空才不请求数据
			dispath({
				type: GET_HOME,
				home:state
			})
		}else{
			return tools.fetch({
				url:'/mobile/indexAds',
				method: 'get'
				}).then(response=>{
					//TODO 处理后台来的数据
					let banners = []; 
					response.map((item,index)=>{
						banners.push({
							banner: item.path
						});
					})

					dispath({
						type: GET_HOME,
						home:{
							banner:banners
						}
					})
			})
		}
	}
}

