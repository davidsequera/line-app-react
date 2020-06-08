import React from 'react'
import UserLogInComponent from '../components/UserLogInComponent'
import './styles/LogIn.css'

class LogIn extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="LogIn">
                    <h1 className="Page-title">LogIn</h1>
                    <div className="login">
                        <UserLogInComponent/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LogIn