import {combineReducers} from 'redux'
import * as actions from 'action/index';

function setHead (state={head:{title:'首页'}}, action){
	switch(action.type){
		case actions.SET_HEAD:
		console.log()
			return Object.assign({},state,{head:{title:action.head.title}});
		break;
		default: 
		return state;
	}
}

function toggleMeun(state={}){
	switch(action.type){
		case actions.TOGGLE_MENU:
		return state;
		break;

	default:

	return state;
	}
}

module.exports = setHead;
