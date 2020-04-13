import React from 'react'
import './styles/UserEditComponent.css'
import { MdAccountCircle } from 'react-icons/md';

class UserEditComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="UserEditComponent_container">
                    <form className="UserEditComponent_form" action="">
                    <MdAccountCircle className="UserEditComponent_User-logo"/>
                    <div className="UserEditComponent_item" id="UserEditComponent_Username">
                        <label htmlFor="">Username</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        // type="text"
                        // name="jobTitle"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="UserEditComponent_item" id="UserEditComponent_PublicName">
                        <label htmlFor="">Public Name</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="text"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="UserEditComponent_item" id="UserEditComponent_Email">
                        <label htmlFor="">Email</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="email"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <button 
                    // onClick={this.props.consoleprinter} 
                    className="UserEditComponent_button">Save</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default UserEditComponent;