import React from 'react'
import './styles/Queue.css'

class Queue extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Queue_container">
                    <div class="Queue_headline-container">
                        <h2 class="Queue_headline">Queue</h2>
                    </div>
                    <div class="Queue_box">
                        <div class="Queue_User-item" >
                            <h2 class="Queue_username">User Name</h2>
                            <p class="userinfo">Height</p>
                            <p class="user-timer">Mass</p>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Queue;