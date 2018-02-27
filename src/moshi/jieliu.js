let throttle=function(fn,interval){
	let self=fn,timer,firstTime=true;
	return function(){
		let arg=arguments,
		    me=this;
		if(firstTime){
			self.apply(me,arg);
			firstTime=false;
			return;
		}
		if(timer){//定时器在的话，不执行
			return;
		}
		timer=setTimeout(function(){
            clearTimeout(timer);
            timer=null;
            self.apply(me,arg);
		},interval||500);
	}
}
window.onscroll=throttle(function(){console.log(i++)},600);