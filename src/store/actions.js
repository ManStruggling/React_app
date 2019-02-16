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
    fetch('http://47.102.127.181:4000/api/log').then(
            res=>res.json()
        ).then(
            data=>{
                setTimeout(() => {
                    dispatch({type:'CHANGE_LOADING',payload:false})
                if(arg.userName==data.data[0].userName && arg.passWord==data.data[0].passWord){
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