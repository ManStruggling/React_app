import React from 'react';
import {Route,Redirect} from 'react-router-dom'

// import Login from "../components/Login";
// import User from "../components/User";

/*let AuthUser = ({component, ...rest})=>{
  // component == User 组件本身
  // rest 剩余参数 路由上下文信息 ， path


  //需要条件  同步||异步

  //同步
  /!*if (Math.random()<.5){
    return (
      <Route component={component}/>
    )
  } else{
    return (
      <Route component={Login}/>
    )
  }*!/

  //同步2
  return <Route {...rest} render={(props)=>
    Math.random()<0.5 ?
      <Route component={component}/> :
      <Redirect to="/login" />
  } />

};*/

// let obj={a:1,b:function(){}};

// let {a,b}=obj;
// b == 函数体

// let {a,b:show}=obj;

// a = 1
// b = 函数体
// show == 函数名

// xx.api(keys:'函数')
// xx.api(keys:'show')

//同步条件3
/*let AuthUser = ({component:Component, ...rest})=>(
  <Route {...rest} render={(props)=>
    Math.random()<0.5 ?
      <Component {...props} /> :
      <Component data={预载数据} {...props} /> :
      <Redirect to="/login" />
  } />
);*/

//条件异步1
/*class AuthUser extends React.Component{
  constructor(props){
    super(props);

    this.state={
      hasAuth:false,
      auth:false
    }

  }
  componentDidMount(){
    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      data=>{
        this.setState({auth:data.auth,hasAuth:true})
      }
    )
  }
  render(){
    if (!this.state.hasAuth) return null;
    if (this.state.auth){
      return <Route component={this.props.component}/>
    } else {
      return <Redirect to='/login'/>
    }
  }
}*/

//异步条件2
class AuthUser extends React.Component{
  constructor(props){
    super(props);

    this.state={
      hasAuth:false,
      auth:false,
      data:null
    }

  }
  componentDidMount(){
    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      res=>{
        this.setState({auth:res.auth,hasAuth:true,data:res.data})
      }
    )
  }
  render(){

    let {component:Component, ...rest}=this.props;

    if (!this.state.hasAuth) return null;
    return <Route {...rest} render={(props)=>
      this.state.auth ? //data == 预载数据
        <Component data={this.state.data} {...props} /> :
        <Redirect to="/login" />
    } />
  }
}



export default AuthUser;