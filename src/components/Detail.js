import React from 'react';

import DetailHead from './DetailHead';
import DetailList from './DetailList';

let sTop = 0;

class Detail extends React.Component{
    componentDidMount(){
        window.scrollTo(0,sTop);
    }
    componentWillUnmount(){
        sTop = document.documentElement.scrollTop
    }
    render(){
        let {history,location,match}=this.props;
        return (
            <div>
                {match.url}
                <DetailHead></DetailHead>
                <DetailList></DetailList>
            </div>
        )
    }
}

export default Detail;