import tools from 'verdor/tools';

export const SET_HEAD = 'SET_HEAD';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_USER = 'SET_USER';

export function setHead (head) {
	return {type: SET_HEAD, head}
} 

export function toggleMenu(isShow){
	return {type: TOGGLE_MENU,isShow}
}

export function user (){
	return function (dispath){
		return tools.fetch().then(respone=>{
			dispath({
				type: SET_USER,
				user:{
					isLogin: true,
					lastTime: 123123
				}
			})
		})
	}
}