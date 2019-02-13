import React from 'react';

class Chet extends React.Component{
    render(){
        return (
            <div>
                <header className="page-header">
                    <span className="page-name">聊天</span>
                </header>
                <section className="min-height chat-list">
                    <a href="chat.html">
                        <div className="chat-list-sub">
                            <div className="guide-pic-sm">
                                <img src="../assets/img/avatar.jpg" alt="" />
                            </div>
                            <div className="chat-content">
                                <div className="chat-name">
                                    飞奔的蜗牛
                                </div>
                                <div className="chat-text">
                                    您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？
                                </div>
                            </div>
                            <div className="float-right chat-right">
                                昨天
                            </div>
                        </div>
                    </a>
                    <a href="chat.html">
                        <div className="chat-list-sub">
                            <div className="guide-pic-sm">
                                <img src="../assets/img/avatar.jpg" alt="" />
                            </div>
                            <div className="chat-content">
                                <div className="chat-name">
                                    飞奔的蜗牛
                                </div>
                                <div className="chat-text">
                                    您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？您好，请问在吗？我的订单可以取消吗？
                                </div>
                            </div>
                            <div className="float-right chat-right">
                                2018.01.01
                            </div>
                        </div>
                    </a>
                </section>
            </div>
        )
    }
}

export default Chet;