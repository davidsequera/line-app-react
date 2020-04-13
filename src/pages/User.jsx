import React from 'react'
import UserOptions from '../components/UserOptions'

class User extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="User">
                    <h1 className="Page-title">My Account</h1>
                    <div className="user">
                        <UserOptions/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User