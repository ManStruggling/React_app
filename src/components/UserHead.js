import React from 'react';

class UserHead extends React.Component{
    render(){
        return (
            <div>
                <header className="home-header">
                    <div className="home-title">
                        主页
                    </div>
                    <div className="home-avatar">
                        <img src="../assets/img/avatar.jpg" alt="" />
                    </div>
                    <div className="home-name">
                        用户名
                    </div>
                    <div className="home-btn">
                        <a href="info.html">编辑资料</a>
                    </div>
                </header>
                <div className="mb-bg"></div>
            </div>
        )
    }
}

export default UserHead;