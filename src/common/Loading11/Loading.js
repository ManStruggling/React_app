import React from 'react';

import './Loading.css'

class Loading extends React.Component{
    render(){
        return (
            <div className="loading">
                <div className="loader">
                    <div className="loader-inner pacman">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;