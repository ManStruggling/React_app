import React from 'react';


import {NavLink} from 'react-router-dom';

class FootNav extends React.Component{
    render(){
        return (
                <section className="comm-nav">
                <div className="nav-index">
                    <NavLink to='/home' activeClassName="active">
                        <div className="nav-img-box"><img src="../assets/img/nav_index_chk.png" alt=""/></div>
                        <div className="nav-active">首页</div>
                    </NavLink>
                </div>
                <div className="nav-travel">
                    <NavLink to='/travel' activeClassName="active">
                        <div className="nav-img-box">
                            <img src="../assets/img/nav_travel.png" alt="" />
                        </div>
                        <div>旅行</div>
                    </NavLink>
                </div>
                <div className="nav-chat">
                    <NavLink to='chet' activeClassName="active">
                        <div className="nav-img-box">
                            <img src="../assets/img/nav_chat.png" alt="" />
                        </div>
                        <div>聊天</div>
                    </NavLink>
                </div>
                <div className="nav-user">
                    <NavLink to='user' activeClassName='active'>
                        <div className="nav-img-box">
                            <img src="../assets/img/nav_user.png" alt="" />
                        </div>
                        <div>主页</div>
                    </NavLink>
                </div>

            </section>
        )
    }
}

export default FootNav