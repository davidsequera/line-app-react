import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

class UserEdit extends React.Component{
    render(){
        return(
            <div className="Page-container" id="UserEdit">
                <div className="useredit">
                    <ProfileComponent/>
                </div>
            </div>
        )
    }
}

export default UserEdit;