import React from 'react';

import {Link} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return (
            <div>
                <header className="logon-header"></header>
                <section className="logon-box">
                    <input type="text" placeholder="手机号" />
                    <input type="password" placeholder="密码" />
                    <a href="" className="forget">忘记密码？</a>
                    <div className="btn-box">
                        <Link to='/user'><button>登录</button></Link>
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

export default Login;