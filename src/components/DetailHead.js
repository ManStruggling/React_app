import React from 'react';

class DetailHead extends React.Component{
    render(){
        return (
            <header className="guide-header">
                <div className="page-header clear-header">
                    <a href="javascript:history.go(-1)" className="page-return">
                        <img src="../assets/img/return_white.png" alt="" className="return" />
                    </a>
                    <span className="page-name">迷人的兰州</span>
                    <a href="search.html" className="page-right page-search">
                        <img src="../assets/img/search.png" alt="" />
                    </a>
                </div>
                <div className="writer">
                    <div className="writer-name">
                        <img src="../assets/img/guide_icon.png" alt="" />
                        <span>向导：飞奔的蜗牛</span>
                    </div>
                    <div className="writer-time">
                        <img src="../assets/img/time.png" alt="" />
                        <span>发布时间：2018.01.01</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default DetailHead;