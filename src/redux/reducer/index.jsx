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


function home (state={banner:[],invalid:true}, action){
	switch(action.type){

		case actions.RECEIVE_HOME:
			action.home.invalid = false;
			action.home.fetching = false;
			return Object.assign({},state,action.home);

		case actions.REQUEST_HOME:

			return {fetching : true};

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
		return {txt:''};
	}
}

function friendLinks(state={invalid: true,list:[]},action){
	switch(action.type){
		case actions.REQUEST_FL:

		return {fetching: false};

		case actions.RECEIVE_FL:
			action.friendLinks.isFetching = false;
			action.friendLinks.invalid = false;
		return Object.assign({},state,action.friendLinks);
		default:
		return state;
	}
}

function brand(state={invalid: true,list:[]},action){
	switch(action.type){
		case actions.REQUEST_BRAND:

		return {fetching: false};

		case actions.RECEIVE_BRAND:
			action.brand.isFetching = false;
			action.brand.invalid = false;
		return Object.assign({},state,action.brand);
		default:
		return state;
	}
}

function intro(state={invalid: true,list:[]},action){
	switch(action.type){
		case actions.REQUEST_INTRO:

		return {fetching: false};

		case actions.RECEIVE_INTRO:
			action.intro.isFetching = false;
			action.intro.invalid = false;
		return Object.assign({},state,action.intro);
		default:
		return state;
	}
}

function news(state={invalid: true,list:[],pageNumber:0},action){
	switch(action.type){
		case actions.REQUEST_NEWS:

		return {fetching: false,pageNumber:0,list:[]};

		case actions.RECEIVE_NEWS:
			action.news.isFetching = false;
			action.news.invalid = false;
		return Object.assign({},state,action.news);
		default:
		return state;
	}
}

function newsAd(state={invalid: true,list:[]},action){
	switch(action.type){
		case actions.REQUEST_NEWSAD:

		return {fetching: false};

		case actions.RECEIVE_NEWSAD:
			action.newsAd.isFetching = false;
			action.newsAd.invalid = false;
		return Object.assign({},state,action.newsAd);
		default:
		return state;
	}
}

function myOrder(state={invalid: true,list:[],pageNumber: 0},action){
	switch(action.type){
		case actions.REQUEST_MYORDER:

		return {isFetching: true,list:[],pageNumber: 0};

		case actions.RECEIVE_MYORDER:
			action.myOrder.isFetching = false;
			action.myOrder.invalid = false;
		return Object.assign({},state,action.myOrder);
		default:
		return state;
	}
}

function allBrands(state={invalid: true,data:{brands:[]}},action){
	switch(action.type){
		case actions.REQUEST_ALL_BRANDS:

		return {fetching: false,data:{brands:[]}};

		case actions.RECEIVE_ALL_BRANDS:
			action.allBrands.isFetching = false;
			action.allBrands.invalid = false;
		return Object.assign({},state,action.allBrands);
		default:
		return state;
	}
}

export default combineReducers({
	toggleMenu,
	setHead,
	user,
	home,
	showTip,
	friendLinks,
	intro,
	brand,
	newsAd,
	myOrder,
	news,
	allBrands
})
