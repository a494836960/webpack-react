import {combineReducers} from 'redux'
import * as actions from 'action/index';

function setHead (state={title:'首页',isHome: false}, action){
	switch(action.type){
		case actions.SET_HEAD:
			if(!action.head.isHome){
				action.head.isHome = false;
			}

			if(typeof action.head.hasRight == 'undefined'){
				action.head.hasRight = true;
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

			return Object.assign({},state,action.user);
		break;

		default: 

		return Object.assign({},state,action.user);;
	}
}

export default combineReducers({
	toggleMenu,
	setHead,
	user
})
