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

//新闻
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export function getNews(pages){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.news.invalid && (!pages || state.news.noMore)){
			dispatch(receiveNews(state.news))
		}else{
			if(!pages){
				dispatch(requestNews());
			}
			dispatch(fetchingNews());
		}
	}
}

function fetchingNews(){
	return (dispatch,getState)=>{
		let state = getState();
		let list = state.myOrder.list;

		tools.fetch({
			url:'/protal/mobile/articles',
			method: 'GET'
		}).then(response=>{
			let data = {
				pageSize: response.pageSize,
				pageNumber: response.pageNumber,
				total: response.total
			}
			list.push(...response.articles)
			data.list = list;

			if(response.pageSize > response.articles.length){
				data.noMore = true;
			}

			dispatch(receiveNews(data));
		});
	}
}

function requestNews(){
	return {
		type: REQUEST_NEWS,
		news:{
			isFetching: true
		}
	}
}

function receiveNews (data){
	return {
		type: RECEIVE_NEWS,
		news:data
	}
}

//新闻Banner
export const REQUEST_NEWSAD = 'REQUEST_NEWSAD';
export const RECEIVE_NEWSAD = 'RECEIVE_NEWSAD';
export function getNewsAd(){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.newsAd.invalid){
			dispatch(receiveNewsAd(state.newsAd.list))
		}else{
			dispatch(fetchingNewsAd());
		}
	}
}

function fetchingNewsAd(){
	return dispatch=>{
		tools.fetch({
			url:'/protal/mobile/articleAds',
			method: 'GET'
		}).then(response=>{
			let banners = [];
			response.ads.map((item,index)=>{
				banners.push({
					banner:item.path
				})
			})
			dispatch(receiveNewsAd (banners));
		});
	}
}

function requestNewsAd(){
	return {
		type: REQUEST_NEWSAD,
		newsAd:{
			isFetching: true
		}
	}
}

function receiveNewsAd (data){
	return {
		type: RECEIVE_NEWSAD,
		newsAd:{list: data}
	}
}

//我的订单查询
export const REQUEST_MYORDER= 'REQUEST_MYORDER';
export const RECEIVE_MYORDER = 'RECEIVE_MYORDER';
export function getMyOrder(pages){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.myOrder.invalid && (!pages || state.myOrder.noMore)){
			dispatch(receiveMyOrder(state.myOrder));
		}else{
			if(!pages){
				dispatch(requestMyOrder());
			}
			dispatch(fetchingMyOrder());
		}
	}
}

function fetchingMyOrder(){
	return (dispatch,getState)=>{
		let state = getState();
		let list = state.myOrder.list;
		tools.fetch({
			url:'/protal/mobile/orders?pageNumber='+ (Number(state.myOrder.pageNumber)+1),
			method: 'GET'
		}).then(response=>{

			let data = {
				pageSize: response.pageSize,
				pageNumber: response.pageNumber,
				total: response.total
			}
			list.push(...response.brandMaterielOrder)
			data.list = list;
			if(response.pageSize > response.brandMaterielOrder.length){
				data.noMore = true;
			}
			dispatch(receiveMyOrder(data));
		});
	}
}

function requestMyOrder(){
	return {
		type: REQUEST_MYORDER,
		myOrder:{
			isFetching: true
		}
	}
}

function receiveMyOrder (data){
	return {
		type: RECEIVE_MYORDER,
		myOrder:data
	}
}

//获取已经加盟品牌Brand
export const REQUEST_ALL_BRANDS= 'REQUEST_ALL_BRANDS';
export const RECEIVE_ALL_BRANDS = 'RECEIVE_ALL_BRANDS';
export function getAllBrands(){
	return (dispatch,getState)=>{
		let state = getState();
		if(!state.allBrands.invalid){
			dispatch(receiveAllBrands(state.allBrands.data));
		}else{
			dispatch(requestAllBrands());
			dispatch(fetchingAllBrands());
		}
	}
}

function fetchingAllBrands(){
	return dispatch=>{
		tools.fetch({
			url:'/protal/mobile/allyBrands',
			method: 'GET'
		}).then(response=>{
			dispatch(receiveAllBrands ({brands:response.brands,type:response.type}));
		});
	}
}

function requestAllBrands(){
	return {
		type: REQUEST_ALL_BRANDS,
		allBrands:{
			isFetching: true
		}
	}
}

function receiveAllBrands (data){
	return {
		type: RECEIVE_ALL_BRANDS,
		allBrands:{data: data}
	}
}