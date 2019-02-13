import React from 'react'

class Travel extends React.Component{
    render(){
        return (
            <div>   
                <header className="page-header">
                    <span className="page-name">基础信息</span>
                </header>
                <section className="form-box">
                    <div className="form-sub">
                        <span>前往城市</span>
                        <input type="text" placeholder="城市" id="location" readOnly="" />
                        <input id="value2" type="hidden" />
                    </div>
                    <div className="form-sub">
                        <span>时间</span>
                        <input type="text" placeholder="出发时间" id="date" readOnly="" />
                    </div>
                    <div className="form-sub">
                        <span>同行人数</span>
                        <input type="text" placeholder="同行人数" />
                    </div>
                    <div className="form-sub">
                        <span>旅行意愿</span>
                        <input type="checkbox" value="0" id="formSub1" /><label htmlFor="formSub1">人文</label>
                        <input type="checkbox" value="0" id="formSub2" /><label htmlFor="formSub2">历史</label>
                        <input type="checkbox" value="0" id="formSub3" /><label htmlFor="formSub3">自然</label>
                    </div>
                    <div className="form-sub">
                        <span>备注</span>
                        <textarea></textarea>
                    </div>
                    <div className="orders-btn">
                        <a href="guide-select.html"><button>下一步</button></a>
                    </div>
                </section>
            </div>
        )
    }
}

export default Travel;