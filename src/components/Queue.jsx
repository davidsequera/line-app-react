import React from 'react'
import './styles/Queue.css'

class Queue extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="Queue_container">
                    <div className="Queue_headline-container">
                        <h2 className="Queue_headline">Queue</h2>
                    </div>
                    <ul className="Queue_box">
                        {this.props.user.map((user) =><li  className={user.id === '1' ? 'Queue_me Queue_User-item': 'Queue_User-item'} key={user.id}>
                            <h2 className="Queue_User Queue_User-name">{user.name}</h2>
                            <h2 className="Queue_User Queue-User-spot">{user.spot}</h2>
                            </li>)}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Queue;