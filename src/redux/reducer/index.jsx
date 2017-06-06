import {combineReducers} from 'redux'
import * as actions from 'action/index';

function setHead (state={title:'首页'}, action){
	switch(action.type){
		case actions.SET_HEAD:
			return Object.assign({},state,{title:action.head.title});
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
export default combineReducers({
	toggleMenu,
	setHead
})
