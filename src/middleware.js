function count(n) {
    let num=n?parseInt(n):0;
    console.log(n,num)
    return ({ getState }) => (next) => (action) => {
      let returnedValue=Math.random()>0.5;
      console.log('我一共执行了',num++,'次~',returnedValue);
        if(returnedValue){
            return next(action);
        }else{
            setTimeout(()=>{
                next(action);
            },3000)
            return function(){};
        }

    };
  }
  
  export default count;