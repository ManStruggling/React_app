import React from 'react';

import DetailHead from './DetailHead';
import DetailList from './DetailList';

class Detail extends React.Component{
    constructor(props){
        super()
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