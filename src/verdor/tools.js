let tools = {
	basePath:'http://localhost:8080/57',
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
			
			return response.json();
		})
	}
}
export default tools;