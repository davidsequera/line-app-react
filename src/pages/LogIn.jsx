import React from 'react'
import UserEditComponent from '../components/UserEditComponent'

class LogIn extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="LogIn">
                    <h1 className="Page-title">LogIn</h1>
                    <div className="login">
                        <UserEditComponent/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LogIn