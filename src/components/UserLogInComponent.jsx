import React from 'react'
import './styles/UserLogInComponent.css'

class UserLogInComponent extends React.Component{
    render(){
        return(
                <div className="UserLogInComponent_container">
                    <form className="UserLogInComponent_form" action="">
                    <div className="UserLogInComponent_item" id="UserLogInComponent_Email">
                        <label htmlFor="">Email</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="email"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="UserLogInComponent_item" id="UserLogInComponent_Username">
                        <label htmlFor="">Password</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="password"
                        // name="jobTitle"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <button 
                    // onClick={this.props.consoleprinter} 
                    className="UserLogInComponent_button">LogIn</button>
                    </form>
                </div>
        )
    }
}

export default UserLogInComponent;