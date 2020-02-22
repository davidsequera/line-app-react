import React from 'react'
import UserOptionDetails from '../components/UserOptionDetails'

class AppSettings extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="AppSettings">
                    <h1 className="Page-title">App Settings</h1>
                    <div className="appsettings">
                        <UserOptionDetails/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AppSettings;