import React from 'react';

import Slider from './Slider'
import Title from './Title'
import List from './List'

import pubsub from 'pubsub-js';

class Home extends React.Component{
    state={
        list:[]
    }
    componentDidMount(){
        pubsub.publish('view_loading',true);
        fetch('/data/list.json').then(
            res=>res.json()
        ).then(
            data=>{
                setTimeout(() => {
                        pubsub.publish('view_loading',false);
                        this.setState({list:data})
                    }, 1000)
                }

        )
    }
    render(){
        return (
            <div>
                <Slider></Slider>
                <Title></Title>
                <List list={this.state.list}/>
            </div>
        )
    }
}

export default Home