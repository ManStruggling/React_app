import React from 'react';

import {Link} from 'react-router-dom';

class UserList extends React.Component{
    render(){
        return (
            <section className="home-box">
                <a href="my-trip.html">
                    <div className="home-sub">
                        <div className="home-sub-icon">
                            <img src="../assets/img/home_1.png" alt="" />
                        </div>
                        <div className="home-sub-sort">
                            我的行程
                        </div>
                        <div className="float-right home-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                </a>
                <a href="ticket.html">
                    <div className="home-sub">
                        <div className="home-sub-icon">
                            <img src="../assets/img/home_2.png" alt="" />
                        </div>
                        <div className="home-sub-sort">
                            优惠券
                        </div>
                        <div className="float-right home-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                </a>
                <div className="home-sub">
                    <div className="home-sub-icon">
                        <img src="../assets/img/home_3.png" alt="" />
                    </div>
                    <div className="home-sub-sort">
                        联系客服
                    </div>
                    <div className="float-right home-right">
                        <img src="../assets/img/select.png" alt="" />
                    </div>
                </div>
                <Link to='/set'>
                    <div className="home-sub">
                        <div className="home-sub-icon">
                            <img src="../assets/img/home_4.png" alt="" />
                        </div>
                        <div className="home-sub-sort">
                            设置
                        </div>
                        <div className="float-right home-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                </Link>
            </section>
        )
    }
}

export default UserList;