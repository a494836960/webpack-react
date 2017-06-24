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
		let user = tools.SS.getItem('user');
		if(user.lastTime && new Date() - user.lastTime <= 3600 * 24 * 1000){
			dispath({
					type: GET_USER,
					user
				})
		} else {
			dispath({
				type: GET_USER,
				user:{
					isLogin:false
				}
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

export const REQUEST_HOME = 'REQUEST_HOME';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export function getHome(){
	return function (dispatch,getState){
		let state = getState();
		if(!state.home.invalid){//home 页面只有空才不请求数据
			dispatch(receiveHome(state.home.banner));
		}else{
			dispatch(FetchingHome());
		}
	}
}

function requestHome(){
	return dispatch=>{
		dispatch({
			type: REQUEST_HOME,
			home:{
				isFetching: true
			}
		});
	}
}


function FetchingHome(){
	return dispatch=>{
			tools.fetch({
			url:'/protal/mobile/indexAds',
			method: 'get'
		}).then(response=>{
			let banners = []; 
			response.map((item,index)=>{
				banners.push({
					banner: item.path
				});
			});
			dispatch(receiveHome(banners))
		})
	}
}

function receiveHome(banners){
	return {
		type: RECEIVE_HOME,
		home:{
			banner:banners
		}
	}
}


//首页introduce

export const REQUEST_INTRO = 'REQUEST_INTRO';
export const RECEIVE_INTRO = 'RECEIVE_INTRO';
export function getIntro(){
	return function (dispatch,getState){
		let state = getState();
		console.log(state.intro.invalid,'============')
		if(!state.intro.invalid){//home 页面只有空才不请求数据
			dispatch(receiveIntro(state.intro.list));
		}else{
			dispatch(FetchingIntro());
		}
	}
}

function requestIntro(){
	return dispatch=>{
		dispatch({
			type: REQUEST_INTRO,
			intro:{
				isFetching: true
			}
		});
	}
}


function FetchingIntro(){
	return dispatch=>{
			tools.fetch({
			url:'/protal/mobile/introduce',
			method: 'get'
		}).then(response=>{
			 
			dispatch(receiveIntro(response.articles))
		})
	}
}

function receiveIntro(data){
	return {
		type: RECEIVE_INTRO,
		intro:{
			list:data
		}
	}
}



// 获取友情链接
export const REQUEST_FL = 'REQUEST_FL';
export const RECEIVE_FL = 'RECEIVE_FL';
export function getFriendLinks(){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.friendLinks.invalid){
			dispatch(receiveFriendLinks(state.friendLinks.list))
		}else{
			dispatch(fetchingFriendLinks());
		}
	}
}

function fetchingFriendLinks(){
	return dispatch=>{
		tools.fetch({
			url:'/protal/mobile/friendLinks',
			method: 'GET'
		}).then(response=>{
			dispatch(receiveFriendLinks(response.friendLinks));
		});
	}
}

function requestFriendLinks(){
	return {
		type: REQUEST_FL,
		friendLinks:{
			isFetching: true
		}
	}
}

function receiveFriendLinks(data){
	return {
		type: RECEIVE_FL,
		friendLinks:{list: data}
	}
}


// 获取子品牌
export const REQUEST_BRAND = 'REQUEST_BRAND';
export const RECEIVE_BRAND = 'RECEIVE_BRAND';
export function getBrand(){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.brand.invalid){
			dispatch(receiveBrand(state.brand.list))
		}else{
			dispatch(fetchingBrand());
		}
	}
}

function fetchingBrand(){
	return dispatch=>{
		tools.fetch({
			url:'/protal/mobile/brands',
			method: 'GET'
		}).then(response=>{
			dispatch(receiveBrand(response.brands));
		});
	}
}

function requestBrand(){
	return {
		type: REQUEST_BRAND,
		brand:{
			isFetching: true
		}
	}
}

function receiveBrand(data){
	return {
		type: RECEIVE_BRAND,
		brand:{list: data}
	}
}
