import React from 'react'

import {Link} from 'react-router-dom';

class Title extends React.Component{
    render(){
        return (
            <section className="theme-box">
            <div className="theme-title">
                <span className="index-title-square"></span>
                <span>推荐主题</span>
                <span>|</span>
                <span>THEME</span>
                <img src="../assets/img/index_more.png" alt="" className="more-right" />
            </div>
            <div className="theme-list">
                <Link to='/detail'>
                    <div className="theme-sub">
                        <div className="theme-title-box">
                            <div className="theme-sub-title">迷人的兰州</div>
                            <div className="theme-time">2018.01.01</div>
                        </div>
                        <div className="thmem-writer-box">
                            <div className="theme-writer">
                                <div className="theme-avatar">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <span>飞奔的蜗牛</span>
                            </div>
                            <div className="theme-like">
                                <img src="../assets/img/love.png" alt="" />
                                <span>2200</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/detail'>
                    <div className="theme-sub">
                        <div className="theme-title-box">
                            <div className="theme-sub-title">迷人的兰州</div>
                            <div className="theme-time">2018.01.01</div>
                        </div>
                        <div className="thmem-writer-box">
                            <div className="theme-writer">
                                <div className="theme-avatar">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <span>飞奔的蜗牛</span>
                            </div>
                            <div className="theme-like">
                                <img src="../assets/img/love.png" alt="" />
                                <span>2200</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mb-bg"></div>
        </section>
        )
    }
}

export default Title