const async=(dispatch,arg)=>{

    //公共的异步处理业务
    // fetch(
    //   `/data/index.data`
    // ).then(
    //   res=>res.json()
    // ).then(
    //   data=>{
    //     setTimeout(()=>{
    //       //提交请求到的数据给reducer,同时也可给调用方一个回执
    //       dispatch({type:'VIEW_LOADING',payload:false});
    //       dispatch({type:'ADD_ITEM',payload:data[0].title})
    //     },1000);
    //   }
    // );
    fetch('/data/user.json').then(
            res=>res.json()
        ).then(
            data=>{
                setTimeout(() => {
                    dispatch({type:'CHANGE_LOADING',payload:false})
                if(arg.userName==data.userName && arg.passWord==data.passWord){
                    console.log('send')
                  dispatch({type:'CHECK_USER',payload:true});
                }else{
                  dispatch({type:'CHECK_USER',payload:false})
                }
                arg.history.push({pathname:'/user'})
                }, 1000);
            }
        )
  
  
    //给外面的dispatch返回对象
    return {type:'CHANGE_LOADING',payload:true};
  };

  export default async;