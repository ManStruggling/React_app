import React from 'react';
import ReactSwipe from 'react-swipe';

class Slider extends React.Component{
    render(){
        return (
            <div className="Home">
            <ReactSwipe
              className="carousel"
              swipeOptions={{
                continuous: true,
                auto: 2000,
    
              }}
            >
              <div style={{background:'url(../assets/img/index_header.png)','height':'4.18rem'}}></div>
              <div style={{background:'url(../assets/img/guide_pic.png)','height':'4.18rem'}}></div>
            </ReactSwipe>
    
          </div>
        )
    }
}

export default Slider