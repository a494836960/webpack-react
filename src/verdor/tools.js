let tools = {
	basePath:'http://localhost:8080/57',
	/*
	*  data:{
	*    url: '', data:{}
	* }
	*/
	fetch(data ={}){
		let method = data.method || 'post';
		let params = {};
		if(method == 'post' || method == 'POST'){
			let formData = new FormData();
			for(let key in data.data){
				formData.append(key , data.data[key]);
			}

			params={
				method: method,
			    body: formData
			}
		} else {
			params={
				method: method,
				headers:{
				 'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		}

		

		return fetch(tools.basePath+data.url,params).then((response)=>{
			return response.json();
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
	},
	formatterDate(ms,formatter='yyyy-MM-dd HH:mm:ss'){
		let date = new Date(ms);
		formatter = formatter.replace(/yyyy/,date.getFullYear());
		formatter = formatter.replace(/MM/,date.getMonth()+1);
		formatter = formatter.replace(/dd/,date.getDate());
		formatter = formatter.replace(/HH/,date.getHours());
		formatter = formatter.replace(/mm/,date.getMinutes());
		formatter = formatter.replace(/ss/,date.getSeconds());
		return formatter;
	}
}
export default tools;