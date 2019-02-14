import React from 'react';

import {connect} from 'react-redux'

class DetailList extends React.Component{
    constructor(){
        super()
        this.state={
            str:''
        }
    }
    render(){
        let {list,add} = this.props;
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
                            <input type="text" value={this.state.str} className="comment-input" placeholder="写评论" onChange={
                                (ev)=>{
                                    this.setState({
                                        str:ev.target.value
                                    })
                                }
                            }/>
                            <input type="button" value="发表" onClick={(ev)=>{
                                add.call(null,ev,this.state.str)
                                this.setState({
                                    str:''
                                })
                            }} style={{background:'#ccc',margin:'5px',padding:'5px 10px',borderRadius:'3px'}}/>
                        </div>
                    </div>
                    <div className="comment-list">
                        {
                            list.map((item,index)=>(
                                <div className="comment-sub " key={index}>
                                    <div className="comment-sub-title">
                                        <div className="comment-pic">
                                            <img src={"../assets/"+item.url} alt="" />
                                        </div>
                                        <div className="comment-info">
                                            <div className="comment-name">
                                                {item.name}
                                            </div>
                                            <div className="comment-time" style={{fontSize:'.3rem'}}>
                                                {item.time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-content">
                                       {item.content}
                                    </div>
                                </div>
                            ))
                        }
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

const mapStateToProps=state=>({
    ...state,
    list:state.list
  });
  
  const mapDispatchToProps=dispatch=>(
    {
      add:(ev,arg)=>{
        dispatch({
            type:'ADD_ITEM',
            payload:{
                url:'img/avatar.jpg',
                name:'飞奔的蜗牛',
                time:'2018.01.01',
                content:arg
              }
        })
      }
    }
  );
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(DetailList);