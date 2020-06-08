import React from 'react'
import UserOptions from '../components/UserOptions'

class Account extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="Account">
                    <h1 className="Page-title">My Account</h1>
                    <div className="account">
                        <UserOptions/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Account