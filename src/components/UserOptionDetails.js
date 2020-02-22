import React from 'react'
import './styles/UserOptionDetails.css'

class UserOptionDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="UserOptionDetails_container">
                    <p className="UserOptionDetails_text">This Version is in development wait until a official release version.</p>                    
                    <p className="UserOptionDetails_text">Terms and conditions</p>                    
                    <p className="UserOptionDetails_text">Pre-Alpha Version 1.0</p>                    
                </div>
            </React.Fragment>
        )
    }
}

export default UserOptionDetails;