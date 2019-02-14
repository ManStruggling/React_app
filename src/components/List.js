import React from 'react'

import {Link} from 'react-router-dom';

const List = ({list}) => (
    <section className="raider-wrap">
        <div className="theme-title">
        <span className="index-title-square"></span>
        <span>攻略路线</span>
        <span>|</span>
        <span>RAIDERS</span>
        </div>
        <div className="raider-box">
            {list.map(item=>{
                let path = `/detail/00${item.id}?a=1&b=3`
                return (
                    <Link to={path} key={item.id}>
                    <div className="raider-sub">
                        <div className="raider-left">
                            <div className="raider-title">
                                {item.title}
                            </div>
                            <div className="raider-text">
                                {item.content}
                            </div>
                            <div className="raider-bottom">
                                <span className="raider-bottom-sub">
                                    <img src="../assets/img/index_like.png" alt="" />
                                    {item.good}
                                </span>
                                    <span className="raider-bottom-sub">
                                    <img src="../assets/img/index_dislike.png" alt="" />
                                    {item.bad}
                                </span>
                                    <span className="raider-bottom-sub">
                                    <img src="../assets/img/index_love.png" alt="" />
                                    {item.like}
                                </span>
                            </div>
                        </div>
                        <div className="raider-right">
                            <img src={"../assets/"+item.url} alt="" />
                        </div>
                    </div>
                </Link>
                )
            })}
        </div>
        </section>
)


export default List