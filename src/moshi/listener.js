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

//升级版
let hhh={
    list:{},
    on:function(key,fn){
        if(typeof fn!=='function'){
            console.log('第二个参数不是函数');
            return;
        }
        if(!this.list[key]){
           this.list[key]=[];
        }
        if(this.list[key].indexOf(fn)>=0){
            console.log('我已经绑定过了，不用重复绑定~');
            return
        }
        this.list[key].push(fn);
        console.log(this.list);
    },
    fire:function(){
        let key=[...arguments][0];
        if(!this.list[key]){
            return
        }
        for(let i=0,fn;fn=this.list[key][i++];){
            let arg=[...arguments];
                arg.shift();
            fn.apply(this,arg);
        }
    },
    unfire:function(key,fn){
        let l=this.list[key].indexOf(fn);
        if(!this.list[key]||l<0){
           return;
        }
        this.list[key].splice(l,1);
    }
}
function onLll(name){
    console.log('我是lll触发的~',name)
}
function onHhh(name){
    console.log('我是Hhh触发的~',name)
}
hhh.on('lll',onLll);
hhh.on('lll',onLll);
hhh.on('lll','kkkkkk');
hhh.on('hhh',onHhh);

hhh.fire('lll','dadaa');
hhh.fire('hhh','hhhhh');

hhh.unfire('lll',onLll);
console.log('___________________');
hhh.fire('lll','dadaa');
hhh.fire('hhh','hhhhh');