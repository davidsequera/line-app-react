import React from 'react'
import './styles/UserTimer.css'

class Usertimer extends React.Component{
    render(){
        return(
                <div className="UserTimer_container">
                    <div className="UserTimer_time-container">
                        <h2 className="UserTimer_time">{this.props.time}</h2>
                    </div>
                </div>
        )
    }
}

export default Usertimer;
