import React from 'react';

import {connect} from 'react-redux'

import {Link} from 'react-router-dom';

class Set extends React.Component{
    render(){
        let {logout} = this.props
        return (
            <div>
                <header className="page-header">
                    <a href="javascript:history.go(-1);" className="page-return">
                        <img src="../assets/img/return.png" alt="" className="return" />
                    </a>
                    <span className="page-name">设置</span>
                </header>
                <section>
                    <div className="set-sub">
                        <span>个人资料</span>
                        <div className="info-row-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                    <div className="set-sub">
                        <span>清除缓存</span>
                        <div className="info-row-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                    <div className="set-sub">
                        <span>关于我们</span>
                        <div className="info-row-right">
                            <img src="../assets/img/select.png" alt="" />
                        </div>
                    </div>
                    <div className="logout">
                        <Link to='login'>
                            <button onClick={
                                logout.bind(this)
                            }>退出登录</button>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    ...state,
  });
  
const mapDispatchToProps=dispatch=>(
    {
      logout:()=>{
        dispatch({type:'LOGOUT',payload:false})
      },
      
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(Set);