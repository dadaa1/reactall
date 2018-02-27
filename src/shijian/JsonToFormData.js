function JsonToFormData(json){//暂时没有考虑文件的情况
	let formdata=new FormData();
	for(let key in json){
		formdata.append(key,json[key]);
	}
    return formdata;
}
function formDataToJson(formdata){
    let arr=formdata.entries();
    let obj={};
    for( let [key,value] of arr){
      obj[key]=value;
    }
   return obj
}

let accc=JsonToFormData({
	a:1,
	b:2,
	c:3
})

let bccc=formDataToJson(accc);

console.log('我是bccc',bccc)

// console.log(accc);
// for (var [key, value] of accc.entries()) { 
//   console.log(key, value);
// }
