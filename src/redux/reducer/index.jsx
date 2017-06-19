import tools from 'verdor/tools'
import {combineReducers} from 'redux'
import * as actions from 'action/Index';

function setHead (state={title:'首页',isHome: false}, action){
	switch(action.type){
		case actions.SET_HEAD:
			if(!action.head.isHome){
				action.head.isHome = false;
			}

			if(typeof action.head.hasRight == 'undefined'){
				action.head.hasRight = true;
			}

			if(typeof action.head.cls == 'undefined'){
				action.head.cls = null;
			}

			return Object.assign({},state,action.head);
		break;
		default: 
		return state;
	}
}

function toggleMenu(state={isShow: false},action){
	switch(action.type){
		case actions.TOGGLE_MENU:
			if(typeof action.isShow === 'undefined'){
				return {isShow: !state.isShow}
			}
		return {isShow: action.isShow}
		break;

	default:

	return state;
	}
}
  
function user (state={isLogin: false},action){
	switch(action.type){
		case actions.SET_USER:

			if(action.user.isLogin === false){  //清空用户数据
				action.user = {
					isLogin: false
				};
			}
			action.user.lastTime = +new Date();
			tools.SS.setItem('user',action.user);

			return Object.assign({},state,action.user);
		break;

		case actions.GET_USER:
			return action.user;
		break;

		default: 

		return Object.assign({},state,action.user);;
	}
}


function home (state={banner:[]}, action){
	switch(action.type){
		case actions.GET_HOME:
		return Object.assign({},state,action.home);

		default :

		return state;
	}
}

function showTip (state={txt:''},action){
	switch(action.type){
		case actions.SHOW_TIPS:
		action.txt.lastTime = +new Date();
		return action.txt;
		break;

		default:
		return state;
	}
}

export default combineReducers({
	toggleMenu,
	setHead,
	user,
	home,
	showTip
})
