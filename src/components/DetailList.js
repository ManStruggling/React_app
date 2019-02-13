import React from 'react';

class DetailList extends React.Component{
    render(){
        return (
            <div className="wrap">
                <section className="mb-10">
                    <div className="guide-content-box">
                        <div className="guide-content">
                            我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层
                        </div>
                        <div className="guide-content-pic">
                            <img src="../assets/img/guide_pic.png" alt="" />
                        </div>
                        <div className="guide-content">
                            我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层
                        </div>
                    </div>
                    <div className="guide-info-wrap container">
                        <div className="guide-pic-sm">
                            <img src="../assets/img/avatar.jpg" alt="" />
                        </div>
                        <div className="guide-info-sm">
                            <div className="guide-name-sm">
                                飞奔的蜗牛
                            </div>
                            <div className="guide-job-sm">
                                <span>已接单：30</span>
                                <span>主要接单地：兰州</span>
                            </div>
                        </div>
                        <div className="guide-contact">
                            <a href="guide-info.html">联系他</a>
                        </div>
                    </div>
                </section>
                <section className="guide-comment">
                    <div className="comment-box">
                        <div className="comment-num container">
                            评论（2200）
                        </div>
                        <div className="container">
                            <input type="text" className="comment-input" placeholder="写评论" />
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="comment-sub ">
                            <div className="comment-sub-title">
                                <div className="comment-pic">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <div className="comment-info">
                                    <div className="comment-name">
                                        飞奔的蜗牛
                                    </div>
                                    <div className="comment-time">
                                        2018.01.01
                                    </div>
                                </div>
                            </div>
                            <div className="comment-content">
                                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                            </div>
                        </div>
                        <div className="comment-sub ">
                            <div className="comment-sub-title">
                                <div className="comment-pic">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <div className="comment-info">
                                    <div className="comment-name">
                                        飞奔的蜗牛
                                    </div>
                                    <div className="comment-time">
                                        2018.01.01
                                    </div>
                                </div>
                            </div>
                            <div className="comment-content">
                                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                            </div>
                        </div>
                        <div className="comment-sub ">
                            <div className="comment-sub-title">
                                <div className="comment-pic">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <div className="comment-info">
                                    <div className="comment-name">
                                        飞奔的蜗牛
                                    </div>
                                    <div className="comment-time">
                                        2018.01.01
                                    </div>
                                </div>
                            </div>
                            <div className="comment-content">
                                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                            </div>
                        </div>
                        <div className="comment-sub ">
                            <div className="comment-sub-title">
                                <div className="comment-pic">
                                    <img src="../assets/img/avatar.jpg" alt="" />
                                </div>
                                <div className="comment-info">
                                    <div className="comment-name">
                                        飞奔的蜗牛
                                    </div>
                                    <div className="comment-time">
                                        2018.01.01
                                    </div>
                                </div>
                            </div>
                            <div className="comment-content">
                                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                            </div>
                        </div>
                    </div>
                    <div className="comment-more">
                        加载全部评论
                    </div>
                    <div className="comment-state">
                        <div className="comment-like">
                            <img src="../assets/img/like.png" alt="" />
                            <span>2.9万</span>
                        </div>
                        <div className="comment-dislike">
                            <img src="../assets/img/dislike.png" alt="" />
                            <span>1200</span>
                        </div>
                        <div className="comment-love">
                            <img src="../assets/img/love.png" alt="" />
                            <span>2200</span>
                        </div>
                        <div className="comment-share">
                            <img src="../assets/img/share.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default DetailList;