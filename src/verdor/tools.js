let tools = {
	/*
	*  data:{
	*    url: '', data:{}
	* }
	*/
	fetch(data ={}){
		return fetch(data.url,{
			method: data.method || 'post',
			body:data.data
		}).then((respone)=>{
			console.log(respone);
		})
	}
}
export default tools;