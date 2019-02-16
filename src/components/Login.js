import React from 'react';
import {connect} from 'react-redux'

import {Link} from 'react-router-dom';

import async from '../store/actions'
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'',
            passWord:''
        }
        this.bind_data=this.bind_data.bind(this);
    }
    bind_data(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render(){
        let {check_user} = this.props
        return (
            <div>
                <Link to='home'>
                    <header className="logon-header"></header>
                </Link>
                <section className="logon-box">
                    <input type="text" value={this.state.userName} name='userName' placeholder="手机号" onChange={this.bind_data} />
                    <input type="password" value={this.state.passWord} name='passWord' placeholder="密码" onChange={this.bind_data} />
                    <a href="" className="forget">忘记密码？</a>
                    <div className="btn-box">
                        <button  onClick={(ev)=>{
                            check_user.call(null,ev,{
                                userName:this.state.userName,
                                passWord:this.state.passWord,
                                history:this.props.history
                            })
                        }}>登录</button>
                    </div>
                    <div className="register-box">
                        没有账号？
                        <Link to='reg'>注册</Link>
                    </div>
                </section>
                <section className="logon-link">
                    <div className="logon-link-text">
                        使用其他账号登录
                    </div>
                    <div className="logon-link-list">
                        <a href="">
                            <img src="../assets/img/wechat.png" alt="" />
                        </a>
                        <a href="">
                            <img src="../assets/img/weibo.png" alt="" />
                        </a>
                        <a href="">
                            <img src="../assets/img/qq.png" alt="" />
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    ...state,
  });
  
const mapDispatchToProps=dispatch=>(
    {
      check_user:(ev,arg)=>{
        // fetch('/data/user.json').then(
        //     res=>res.json()
        // ).then(
        //     data=>{
        //         if(arg.userName==data.userName && arg.passWord==data.passWord){
        //           dispatch({type:'CHECK_USER',payload:true});
        //         }else{
        //           dispatch({type:'CHECK_USER',payload:false})
        //         }
        //     }
        // )
        return dispatch(async(dispatch,arg))
      }
    //   add:()=>dispatch(async2()).then(
    //     (id)=>console.log('回执后的业务',id)
    //   )
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(Login);