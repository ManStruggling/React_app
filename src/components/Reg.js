import React from 'react';

class Reg extends React.Component{
    render(){
        return (
            <div>
                <header className="page-header">
                    <a href="javascript:history.go(-1)" className="page-return">
                        <img src="../assets/img/return.png" alt="" className="return" />
                    </a>
                    <span className="page-name">注册</span>
                    <a href="logon.html" className="page-right">已有账号</a>
                </header>
                <section className="logon-box">
                    <input type="text" placeholder="手机号" />
                    <input type="text" placeholder="验证码" />
                    <input type="password" placeholder="密码" />
                    <a href="" className="send-code">发送验证码</a>
                    <div className="btn-box">
                        <button>注册</button>
                    </div>
                    <div className="user-agreement">
                        点击注册表示同意
                        <a href="user-agreement.html">用户协议</a>
                    </div>
                </section>
            </div>
        )
    }
}

export default Reg;