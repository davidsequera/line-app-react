import React from 'react'
import './styles/Queue.css'

class Queue extends React.Component{
    
    render(){
        const paquita = 'hola soy paquita'
        return(
            <React.Fragment>
                <div className="Queue_container">
                    <div className="Queue_headline-container">
                        <h2 className="Queue_headline">Queue</h2>
                    </div>
                    <div className="Queue_box">
                        <div className="Queue_User-item" >
                            <h2 className="Queue_username">User Name</h2>
                            <p className="userinfo">Height</p>
                            <p className="user-timer">Mass</p>
                            <h1>{paquita}</h1>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Queue;