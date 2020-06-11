import React from 'react'
import './styles/UserOptions.css'
import { Link } from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md'

class UserOptions extends React.Component{
    render(){
        return(
                <div className="UserOptions_container">
                    <Link to="/account/profile" className="UserOptions_item" id="UserOptions_Profile">
                        <MdAccountCircle id="UserOptions_Profile-logo"/>
                        {/* <img className="UserOptions_User-logo" src={MdAccountCircle} alt="User photo"/> */}
                        <div id="UserOptions_Profile-text-container">
                            <h1 className="UserOptions_Profile-text">Public Name</h1>
                            <h1 className="UserOptions_Profile-text">Email</h1>
                        </div>
                    </Link>
                    <Link to="/myTickets"  className="UserOptions_item" id="UserOptions_MyTickets">
                        <div className="UserOptions_text-container" id="My-Tickets-container">
                            <h1 className="UserOptions_item-text">My Tickets</h1>
                        </div>
                    </Link>
                    <Link to="/account/appsettings" className="UserOptions_item" id="UserOptions_AppSetting">
                        <div className="UserOptions_text-container" id="App-Setting-cotainer">
                            <h1 className="UserOptions_item-text">App Setting</h1>
                        </div>
                    </Link>
                    <Link to="/account/help" className="UserOptions_item" id="UserOptions_Help">
                        <div className="UserOptions_text-container" id="Help-cotainer">
                            <h1 className="UserOptions_item-text">Help</h1>
                        </div>
                    </Link>
                </div>
        )
    }
}

export default UserOptions;