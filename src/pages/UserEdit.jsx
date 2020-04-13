import React from 'react'
import UserEditComponent from '../components/UserEditComponent'

class UserEdit extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="Page-container" id="UserEdit">
                <div className="useredit">
                    <UserEditComponent/>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default UserEdit;