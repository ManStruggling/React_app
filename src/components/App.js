import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Home from './Home';
import FootNav from './FootNav';
import Travel from './Travel';
import Chet from './Chet';
import User from './User';
import Set from './Set';
import Error from './Error';
import Login from './Login'
import Reg from './Reg';
import Detail from './Detail';

import AuthUser from "../guard/AuthUser";
import Loading from '../common/Loading/Loading'
import pubsub from 'pubsub-js';

import {connet} from 'react-redux'

class App extends React.Component {
    constructor(){
        super();
    
        this.state={
          bLoading:false,
          bNav:true
        };
        //订阅loading请求
        pubsub.subscribe('view_loading',(mess,bl)=>{
          this.setState({bLoading:bl})
        })
    
    }
    componentWillReceiveProps(nextProps){
      let path = nextProps.location.pathname;
      if(/home|travel|chet|user/.test(path)){
        this.setState({bNav:true})
      }
      if(/set|login|reg|detail/.test(path)){
        this.setState({bNav:false})
      }
    }
    render() {
        return (
                <div>
                    {this.state.bLoading && <Loading/>}
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/travel' component={Travel}></Route>
                        <Route path='/chet' component={Chet}></Route>

                        <AuthUser path="/user" component={User} />
                        
                        <Route path='/set' component={Set}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>

                        <Redirect exact from="/" to="/home"></Redirect>
                        <Route component={Error} />
                    </Switch>
                    {this.state.bNav&&<FootNav></FootNav>}
                </div>
        )
    }
}

export default App

//模板移植--路由搭建--数据交互--授权路由/自定义路由/前置守卫--全局loading(pubsub订阅发布)--非状态管理--状态管理