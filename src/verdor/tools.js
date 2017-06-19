let tools = {
	basePath:'',
	/*
	*  data:{
	*    url: '', data:{}
	* }
	*/
	fetch(data ={}){
		return fetch(tools.basePath+data.url,{
			method: data.method || 'post',
			body:data.data
		}).then((response)=>{
			console.log(response);
			
			return response.text();
		})
	},
	LS:{
		getItem: function (key){
			let value = localStroage.getItem(key);
			try{
				return JSON.parse(value)||{};
			}catch(e){
				return value||{};
			}
		},
		setItem: function (key, value){
			localStroage.setItem(key, JSON.stringify(value))
		},
		clear: function(){
			localStroage.clear()
		},
		removeItem: function(key){
			localStroage.removeItem(key)
		}
	},SS:{
		getItem: function (key){
			let value = sessionStorage.getItem(key);
			try{
				return JSON.parse(value)||{};
			}catch(err){
				return value||{};
			}
		},
		setItem: function (key, value){
			sessionStorage.setItem(key, JSON.stringify(value))
		},
		clear: function(){
			sessionStorage.clear()
		},
		removeItem: function(key){
			sessionStorage.removeItem(key)
		}
	}
}
export default tools;