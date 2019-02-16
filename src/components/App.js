import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';
// import User from './User';
import Set from './Set';
import Error from './Error';
import Login from './Login'
import Reg from './Reg';
import Detail from './Detail';
import {connect} from 'react-redux'
import Home from './Home';
import FootNav from './FootNav';
import Travel from './Travel';
// import Chet from './Chet';
import Loadable from 'react-loadable';

import Loading from '../common/Loading/Loading'
const Chet = Loadable({
  loader: () => import('./Chet'),
//  loading: Loading,
 loading:()=>{return null}
});

const User = Loadable({
  loader: () => import('./User'),
//  loading: Loading,
 loading:()=>{return null}
});

// import AuthUser from "../guard/AuthUser";
// import pubsub from 'pubsub-js';


class App extends React.Component {
    // constructor(){
    //     super();
    
    //     this.state={
    //       bLoading:false,
    //       bNav:true
    //     };
    //     //订阅loading请求
    //     pubsub.subscribe('view_loading',(mess,bl)=>{
    //       this.setState({bLoading:bl})
    //     })
    
    // }
    // componentWillReceiveProps(nextProps){
    //   let path = nextProps.location.pathname;
    //   if(/home|travel|chet|user/.test(path)){
    //     this.setState({bNav:true})
    //   }
    //   if(/set|login|reg|detail/.test(path)){
    //     this.setState({bNav:false})
    //   }
    // }
    componentDidMount(){
      let {show_loading,hid_loading} = this.props
      show_loading()//显示loading

      setTimeout(() => {
        hid_loading();//隐藏loading
      }, 1000);
    }
    componentWillReceiveProps(nextProps){
      let path = nextProps.location.pathname;
      let {hid,show,show_loading,hid_loading} = this.props
      if(/home|travel|chet|user/.test(path)){
        show()
      }
      if(/set|login|reg|detail/.test(path)){
        hid()
      }

      if(path !== this.props.location.pathname){//跳转组件
        show_loading()//显示loading

        setTimeout(() => {
          hid_loading();//隐藏loading
        }, 300);
      }
    }
    render() {
        let {auth} = this.props;
        return (
                <div>
                    {this.props.bLoading && <Loading/>}
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/travel' component={Travel}></Route>
                        <Route path='/chet' component={Chet}></Route>

                        {auth?<Route path="/user" component={User}/>:<Redirect exact from="/user" to="/login"/>}
                        <Route path='/set' component={Set}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>

                        <Redirect exact from="/" to="/home"></Redirect>
                        <Route component={Error} />
                    </Switch>
                    {this.props.bNav&&<FootNav></FootNav>}
                </div>
        )
    }
}

const mapStateToProps=state=>({
  ...state,
  list:state.list
});

const mapDispatchToProps=dispatch=>(
  {
    show:()=>{
      dispatch({type:'CHANGE_BNAV',payload:true})
    },
    hid:()=>{
      dispatch({type:'CHANGE_BNAV',payload:false})
    },
    hid_loading:()=>{
      dispatch({type:'CHANGE_LOADING',payload:false})
    },
    show_loading:()=>{
      dispatch({type:'CHANGE_LOADING',payload:true})
    }
  }
);


export default connect(mapStateToProps,mapDispatchToProps)(App);

//模板移植--路由搭建--数据交互--授权路由/自定义路由/前置守卫--全局loading(pubsub订阅发布)--非状态管理--状态管理(loading、bNav、detail的评论数据、路由守卫)--异步组件（懒加载）--异步action--滚动条监听