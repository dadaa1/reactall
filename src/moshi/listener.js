//观察者模式
let salesOffice={};
salesOffice.client=[];//缓存列表，存放订阅者的回掉函数

salesOffice.listen=function(fn){
  this.client.push(fn)
}

salesOffice.trigger=function(){
	for(let i=0,fn;fn=this.client[i++];){
		fn.apply(this,arguments);
	}
}

salesOffice.listen(function(price,squaremeter){
   console.log('价格是：',price);
   console.log('面积是：',squaremeter);
})

salesOffice.listen(function(price,squaremeter){
   console.log('价格是：',price);
   console.log('面积是：',squaremeter);
})


salesOffice.trigger('1000','2000');
